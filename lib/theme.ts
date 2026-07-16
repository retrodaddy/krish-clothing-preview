import type { ClientConfig } from "@/types";

/**
 * Converts hex to an "R G B" triplet string so CSS variables can be used
 * with Tailwind's opacity modifiers (e.g. bg-primary/50) if ever needed.
 */
function hexToRgbChannels(hex: string): string {
  const normalized = hex.replace("#", "");
  const bigint = parseInt(
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}

/**
 * Builds the CSS custom properties that drive the entire color system.
 * Consumed once in the root layout and injected via a <style> tag so the
 * whole site re-themes from three hex values in config/client.ts.
 */
export function buildThemeCssVariables(config: ClientConfig): string {
  return `
    :root {
      --color-primary: ${config.primaryColor};
      --color-primary-foreground: #FFFFFF;
      --color-secondary: ${config.secondaryColor};
      --color-secondary-foreground: #FFFFFF;
      --color-accent: ${config.accentColor};
      --color-accent-foreground: ${config.secondaryColor};
      --color-ink: ${config.secondaryColor};
      --color-cream: #FAF7F2;
      --color-primary-rgb: ${hexToRgbChannels(config.primaryColor)};
    }
  `;
}
