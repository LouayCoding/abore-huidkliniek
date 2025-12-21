/**
 * Application constants
 */

// Animation
export const ANIMATION_DURATION = 0.8;
export const ANIMATION_EASE = "power3.out";
export const SCROLL_TRIGGER_START = "top 85%";
export const STAGGER_DELAY = 0.1;

// Breakpoints (match Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Carousel/Slider
export const CAROUSEL_AUTO_PLAY_INTERVAL = 5000; // 5 seconds
export const CAROUSEL_TRANSITION_DURATION = 1000; // 1 second

// UI
export const MOBILE_MENU_TRANSITION_DURATION = 500;
export const TOOLTIP_SHOW_DELAY = 2000;
export const TOOLTIP_HIDE_DELAY = 5000;

// Form
export const FORM_DEBOUNCE_DELAY = 300;
