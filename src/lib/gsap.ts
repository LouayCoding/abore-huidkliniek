/**
 * Centralized GSAP configuration
 * Import from this file instead of 'gsap' directly
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Export configured instances
export { gsap, ScrollTrigger };

// Default animation settings
export const defaults = {
  duration: 0.8,
  ease: "power3.out",
} as const;

// Common scroll trigger settings
export const scrollTriggerDefaults = {
  start: "top 85%",
  end: "top 20%",
  toggleActions: "play none none reverse",
} as const;
