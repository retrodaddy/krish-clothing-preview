/**
 * Generic, business-agnostic constants (animation timings, breakpoints,
 * copy fallbacks). Business-specific values belong in config/client.ts,
 * not here.
 */
export const ANIMATION = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
  viewportOnce: true,
  viewportMargin: "-80px",
};

export const PLACEHOLDER_RATING = 5;
