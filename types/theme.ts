/**
 * Theme Engine types.
 *
 * A theme is a named, swappable bundle of color/typography/shape tokens.
 * Components never read hex values or font names directly — they read
 * Tailwind classes (bg-primary, font-serif, ...) that resolve to CSS
 * variables derived from whichever preset is active. Swapping the active
 * theme (or layering a business-specific override on top of it) changes
 * colors, buttons, cards, and backgrounds without touching a component.
 */
export type ThemeName = "luxury" | "minimal" | "dark" | "elegant" | "modern" | "classic";

export interface ThemeColorTokens {
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  ink: string;
  cream: string;
}

export interface ThemeFontTokens {
  /** Logical font-pair key, resolved to an actual next/font import in app/layout.tsx. */
  heading: string;
  body: string;
}

export interface ThemePreset {
  name: ThemeName;
  label: string;
  colors: ThemeColorTokens;
  fonts: ThemeFontTokens;
  radius: "sharp" | "soft" | "rounded";
  shadow: "flat" | "soft" | "elegant";
}

export interface ThemeConfig {
  active: ThemeName;
  /** Optional per-business color overrides layered on top of the active preset. */
  overrides?: Partial<ThemeColorTokens>;
}
