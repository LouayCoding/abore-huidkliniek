'use client';

import { useEffect, useRef, type RefObject } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { fadeInUp, staggerChildren, scaleIn, killAllScrollTriggers } from '@/lib/animations';

type AnimationType = 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'staggerChildren';

interface UseScrollTriggerOptions {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  childSelector?: string;
  stagger?: number;
  once?: boolean;
}

/**
 * Hook for scroll-triggered animations
 */
export function useScrollTrigger<T extends HTMLElement>(
  options: UseScrollTriggerOptions = {}
): RefObject<T | null> {
  const ref = useRef<T>(null);
  const {
    type = 'fadeInUp',
    delay = 0,
    duration = 0.8,
    childSelector,
    stagger = 0.1,
    once = true,
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let animation: gsap.core.Tween | null = null;

    const scrollTriggerConfig: ScrollTrigger.Vars = {
      trigger: element,
      start: 'top 85%',
      toggleActions: once ? 'play none none none' : 'play none none reverse',
    };

    switch (type) {
      case 'fadeInUp':
        animation = fadeInUp(element, { delay, duration, scrollTrigger: scrollTriggerConfig });
        break;
      case 'scaleIn':
        animation = scaleIn(element, { delay, duration, scrollTrigger: scrollTriggerConfig });
        break;
      case 'staggerChildren':
        if (childSelector) {
          animation = staggerChildren(element, childSelector, {
            delay,
            duration,
            stagger,
            scrollTrigger: scrollTriggerConfig,
          });
        }
        break;
      default:
        animation = fadeInUp(element, { delay, duration, scrollTrigger: scrollTriggerConfig });
    }

    return () => {
      animation?.kill();
    };
  }, [type, delay, duration, childSelector, stagger, once]);

  return ref;
}

/**
 * Hook to clean up all scroll triggers on unmount
 */
export function useScrollTriggerCleanup(): void {
  useEffect(() => {
    return () => {
      killAllScrollTriggers();
    };
  }, []);
}

/**
 * Hook for parallax effect
 */
export function useParallax<T extends HTMLElement>(
  speed = 0.5
): RefObject<T | null> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tween = gsap.to(element, {
      y: () => window.innerHeight * speed * 0.5,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  return ref;
}

