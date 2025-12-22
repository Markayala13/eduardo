// Motion utilities for GSAP animations and accessibility

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check if device is touch-enabled (mobile/tablet)
 */
export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(pointer: coarse)').matches;
};

/**
 * Check if device has low memory (< 4GB)
 */
export const isLowEndDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  // @ts-ignore - navigator.deviceMemory is experimental
  const memory = navigator.deviceMemory;
  return memory ? memory < 4 : false;
};

/**
 * Should disable heavy animations based on device capabilities and user preferences
 */
export const shouldDisableHeavyAnimations = (): boolean => {
  return prefersReducedMotion() || isLowEndDevice();
};

/**
 * Throttle function for performance-critical operations like mousemove
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  let lastRan: number;

  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

/**
 * Request animation frame throttle for smooth 60fps updates
 */
export const rafThrottle = <T extends (...args: any[]) => void>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let rafId: number | null = null;

  return function(this: any, ...args: Parameters<T>) {
    if (rafId !== null) return;

    rafId = requestAnimationFrame(() => {
      func.apply(this, args);
      rafId = null;
    });
  };
};
