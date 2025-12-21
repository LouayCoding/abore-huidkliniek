/**
 * Reusable animation helpers
 * Use these instead of writing GSAP code directly in components
 */

import { gsap, ScrollTrigger, defaults, scrollTriggerDefaults } from './gsap';

type AnimationOptions = {
  duration?: number;
  delay?: number;
  ease?: string;
  scrollTrigger?: ScrollTrigger.Vars | boolean;
};

/**
 * Fade in from bottom animation
 */
export function fadeInUp(
  element: Element | null,
  options: AnimationOptions = {}
): gsap.core.Tween | null {
  if (!element) return null;
  
  const { duration = defaults.duration, delay = 0, ease = defaults.ease, scrollTrigger } = options;
  
  const scrollTriggerConfig = scrollTrigger === true 
    ? { trigger: element, ...scrollTriggerDefaults }
    : scrollTrigger;
  
  return gsap.fromTo(
    element,
    { y: 20, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration, 
      delay,
      ease,
      scrollTrigger: scrollTriggerConfig,
    }
  );
}

/**
 * Fade in animation
 */
export function fadeIn(
  element: Element | null,
  options: AnimationOptions = {}
): gsap.core.Tween | null {
  if (!element) return null;
  
  const { duration = defaults.duration, delay = 0, ease = defaults.ease, scrollTrigger } = options;
  
  const scrollTriggerConfig = scrollTrigger === true 
    ? { trigger: element, ...scrollTriggerDefaults }
    : scrollTrigger;
  
  return gsap.fromTo(
    element,
    { opacity: 0 },
    { 
      opacity: 1, 
      duration, 
      delay,
      ease,
      scrollTrigger: scrollTriggerConfig,
    }
  );
}

/**
 * Scale in animation (for images)
 */
export function scaleIn(
  element: Element | null,
  options: AnimationOptions = {}
): gsap.core.Tween | null {
  if (!element) return null;
  
  const { duration = defaults.duration, delay = 0, ease = defaults.ease, scrollTrigger } = options;
  
  const scrollTriggerConfig = scrollTrigger === true 
    ? { trigger: element, ...scrollTriggerDefaults }
    : scrollTrigger;
  
  return gsap.fromTo(
    element,
    { scale: 1.05 },
    { 
      scale: 1, 
      duration, 
      delay,
      ease,
      scrollTrigger: scrollTriggerConfig,
    }
  );
}

/**
 * Stagger children animation
 */
export function staggerChildren(
  container: Element | null,
  childSelector: string,
  options: AnimationOptions & { stagger?: number } = {}
): gsap.core.Tween | null {
  if (!container) return null;
  
  const children = container.querySelectorAll(childSelector);
  if (children.length === 0) return null;
  
  const { 
    duration = 0.6, 
    delay = 0, 
    ease = defaults.ease, 
    stagger = 0.1,
    scrollTrigger 
  } = options;
  
  const scrollTriggerConfig = scrollTrigger === true 
    ? { trigger: container, ...scrollTriggerDefaults }
    : scrollTrigger;
  
  return gsap.fromTo(
    children,
    { y: 24, opacity: 0 },
    { 
      y: 0, 
      opacity: 1, 
      duration,
      delay,
      ease,
      stagger,
      scrollTrigger: scrollTriggerConfig,
    }
  );
}

/**
 * Reveal mask animation (for images)
 */
export function revealMask(
  mask: Element | null,
  options: AnimationOptions = {}
): gsap.core.Tween | null {
  if (!mask) return null;
  
  const { duration = defaults.duration, delay = 0, ease = defaults.ease } = options;
  
  return gsap.to(mask, {
    scaleX: 0,
    transformOrigin: "left",
    duration,
    delay,
    ease,
  });
}

/**
 * Create a timeline with scroll trigger
 */
export function createScrollTimeline(
  trigger: Element | null,
  options: Omit<ScrollTrigger.Vars, 'trigger'> = {}
): gsap.core.Timeline | null {
  if (!trigger) return null;
  
  return gsap.timeline({
    scrollTrigger: {
      trigger,
      ...scrollTriggerDefaults,
      ...options,
    },
  });
}

/**
 * Kill all scroll triggers (cleanup)
 */
export function killAllScrollTriggers(): void {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh scroll triggers (after layout changes)
 */
export function refreshScrollTriggers(): void {
  ScrollTrigger.refresh();
}
