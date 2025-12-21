/**
 * useScrollAnimation Hook
 * 
 * Applies scroll-triggered GSAP animations to an element.
 * Handles cleanup automatically.
 */

import { useEffect, useRef, type RefObject } from 'react';
import { gsap, ScrollTrigger, killAllScrollTriggers } from '@/lib/gsap';
import { fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerFadeInUp } from '@/lib/animations';
import { ANIMATION } from '@/lib/constants';

type AnimationType = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'stagger';

interface UseScrollAnimationOptions {
  /** Animation type to apply */
  type?: AnimationType;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** Scroll trigger start position */
  start?: string;
  /** Stagger delay for stagger animations */
  stagger?: number;
  /** Selector for child elements (for stagger animations) */
  childSelector?: string;
  /** Whether animation is enabled */
  enabled?: boolean;
}

/**
 * Hook for applying scroll-triggered animations
 * 
 * @example
 * ```tsx
 * const ref = useScrollAnimation<HTMLDivElement>({ type: 'fadeInUp' });
 * return <div ref={ref}>Animated content</div>
 * ```
 */
export function useScrollAnimation<T extends HTMLElement>(
  options: UseScrollAnimationOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    type = 'fadeInUp',
    duration = ANIMATION.DURATION,
    delay = 0,
    start = ANIMATION.SCROLL_START,
    stagger: staggerDelay = ANIMATION.STAGGER,
    childSelector,
    enabled = true,
  } = options;

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const element = ref.current;
    let animation: gsap.core.Tween | null = null;

    const scrollTriggerConfig = {
      trigger: element,
      start,
      toggleActions: 'play none none reverse' as const,
    };

    const animationOptions = {
      duration,
      delay,
      scrollTrigger: scrollTriggerConfig,
    };

    switch (type) {
      case 'fadeInUp':
        animation = fadeInUp(element, animationOptions);
        break;
      case 'fadeInLeft':
        animation = fadeInLeft(element, animationOptions);
        break;
      case 'fadeInRight':
        animation = fadeInRight(element, animationOptions);
        break;
      case 'scaleIn':
        animation = scaleIn(element, animationOptions);
        break;
      case 'stagger':
        if (childSelector) {
          const children = element.querySelectorAll(childSelector);
          animation = staggerFadeInUp(children, {
            ...animationOptions,
            stagger: staggerDelay,
          });
        }
        break;
    }

    return () => {
      animation?.kill();
    };
  }, [type, duration, delay, start, staggerDelay, childSelector, enabled]);

  return ref;
}

/**
 * Hook for staggered scroll animations on child elements
 * 
 * @example
 * ```tsx
 * const ref = useStaggerAnimation<HTMLDivElement>('.item');
 * return (
 *   <div ref={ref}>
 *     <div className="item">Item 1</div>
 *     <div className="item">Item 2</div>
 *   </div>
 * );
 * ```
 */
export function useStaggerAnimation<T extends HTMLElement>(
  childSelector: string,
  options: Omit<UseScrollAnimationOptions, 'type' | 'childSelector'> = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    duration = ANIMATION.DURATION,
    delay = 0,
    start = ANIMATION.SCROLL_START,
    stagger: staggerDelay = ANIMATION.STAGGER,
    enabled = true,
  } = options;

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const element = ref.current;
    const children = Array.from(element.querySelectorAll(childSelector));

    const animations = children.map((child, index) =>
      gsap.fromTo(
        child,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay: delay + index * staggerDelay,
          ease: ANIMATION.EASE,
          scrollTrigger: {
            trigger: child,
            start,
          },
        }
      )
    );

    return () => {
      animations.forEach(anim => anim.kill());
    };
  }, [childSelector, duration, delay, start, staggerDelay, enabled]);

  return ref;
}

/**
 * Cleanup all scroll triggers on unmount
 * Use this in page components
 */
export function useScrollCleanup(): void {
  useEffect(() => {
    return () => {
      killAllScrollTriggers();
    };
  }, []);
}

