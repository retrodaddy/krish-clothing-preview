import type { ThemeConfig, ThemeName, ThemePreset } from "@/types";

/**
 * Theme Engine presets.
 *
 * Six named palettes any business can select via `theme.active` below.
 * `luxury` is set to the exact palette the Fashion template already
 * ships with, so turning this engine on changes nothing visually for
 * Krish Clothing Store today. The other five are ready for the next
 * templates (restaurant, salon, gym, real estate, ...) to pick from or
 * override.
 *
 * Wiring these fully into Tailwind/next-font (so `theme.active` actually
 * swaps fonts at build time) is the next migration step — this file is
 * the data layer that step will consume.
 */
export const themePresets: Record<ThemeName, ThemePreset> = {
  luxury: {
    name: "luxury",
    label: "Luxury",
    colors: {
      primary: "#7A1F2B",
      primaryForeground: "#FFFFFF",
      secondary: "#1C1B19",
      secondaryForeground: "#FFFFFF",
      accent: "#C9A66B",
      accentForeground: "#1C1B19",
      ink: "#1C1B19",
      cream: "#FAF7F2",
    },
    fonts: { heading: "playfair", body: "inter" },
    radius: "rounded",
    shadow: "elegant",
  },
  elegant: {
    name: "elegant",
    label: "Elegant",
    colors: {
      primary: "#1F4D3D",
      primaryForeground: "#FFFFFF",
      secondary: "#14201B",
      secondaryForeground: "#FFFFFF",
      accent: "#C9A66B",
      accentForeground: "#14201B",
      ink: "#14201B",
      cream: "#F7F5F0",
    },
    fonts: { heading: "cormorant", body: "inter" },
    radius: "rounded",
    shadow: "elegant",
  },
  classic: {
    name: "classic",
    label: "Classic",
    colors: {
      primary: "#8B2635",
      primaryForeground: "#FFFFFF",
      secondary: "#2B2118",
      secondaryForeground: "#FFFFFF",
      accent: "#B08D57",
      accentForeground: "#2B2118",
      ink: "#2B2118",
      cream: "#F5F0E6",
    },
    fonts: { heading: "playfair", body: "lora" },
    radius: "soft",
    shadow: "soft",
  },
  minimal: {
    name: "minimal",
    label: "Minimal",
    colors: {
      primary: "#3F3F46",
      primaryForeground: "#FFFFFF",
      secondary: "#18181B",
      secondaryForeground: "#FFFFFF",
      accent: "#A1A1AA",
      accentForeground: "#18181B",
      ink: "#18181B",
      cream: "#FAFAFA",
    },
    fonts: { heading: "inter", body: "inter" },
    radius: "sharp",
    shadow: "flat",
  },
  modern: {
    name: "modern",
    label: "Modern",
    colors: {
      primary: "#2563EB",
      primaryForeground: "#FFFFFF",
      secondary: "#0F172A",
      secondaryForeground: "#FFFFFF",
      accent: "#F97316",
      accentForeground: "#0F172A",
      ink: "#0F172A",
      cream: "#F8FAFC",
    },
    fonts: { heading: "manrope", body: "inter" },
    radius: "soft",
    shadow: "soft",
  },
  dark: {
    name: "dark",
    label: "Dark",
    colors: {
      primary: "#E11D48",
      primaryForeground: "#FFFFFF",
      secondary: "#F4F4F5",
      secondaryForeground: "#0B0B0C",
      accent: "#FBBF24",
      accentForeground: "#0B0B0C",
      ink: "#F4F4F5",
      cream: "#0B0B0C",
    },
    fonts: { heading: "sora", body: "inter" },
    radius: "soft",
    shadow: "elegant",
  },
};

export const theme: ThemeConfig = {
  active: "luxury",
};
