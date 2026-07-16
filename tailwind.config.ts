import type { Config } from "tailwindcss";

/**
 * Tailwind theme.
 *
 * Brand colors are NOT hardcoded hex values here. They resolve to CSS
 * custom properties (set at runtime from `config/client.ts` via
 * `components/ThemeProvider.tsx`) so that swapping a client's palette
 * never requires touching this file or rebuilding Tailwind's config.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        ink: "var(--color-ink)",
        cream: "var(--color-cream)",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.12)",
        elegant: "0 20px 60px -15px rgba(0,0,0,0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      letterSpacing: {
        wide2: "0.15em",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
