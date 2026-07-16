import { engine } from "./engine";

/**
 * @deprecated Backward-compatibility shim — Navbar/Footer still import
 * `{ navLinks }` from here. New code should read `engine.navigation`
 * directly. Remove once those components are rewired (Phase C).
 */
export const navLinks = engine.navigation.main;

export const siteConfig = {
  templateVersion: engine.meta.engineVersion,
  templateName: "Retro Daddy Website Engine",
};
