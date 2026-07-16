import { client } from "@/config/client";
import { buildThemeCssVariables } from "@/lib/theme";

/**
 * Injects the client's brand palette as CSS custom properties before
 * first paint. This is the mechanism that lets `config/client.ts` be the
 * single source of truth for color — no component ever imports a hex
 * value directly.
 */
export function ThemeProvider() {
  return <style id="theme-vars" dangerouslySetInnerHTML={{ __html: buildThemeCssVariables(client) }} />;
}
