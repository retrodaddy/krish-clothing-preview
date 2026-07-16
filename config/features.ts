import type { FeatureFlags } from "@/types";

/**
 * Feature flags.
 *
 * The `enable*` flags gate real sections/actions (wired in Engine
 * migration Phase C — every section already exists, this is what will
 * let a future business turn one off without deleting code). Everything
 * below the divider is an architecture placeholder for a capability not
 * built yet; flipping one of those does nothing today.
 */
export const features: FeatureFlags = {
  enableProducts: true,
  enableTestimonials: true,
  enableInstagram: true,
  enableGallery: true,
  enableMap: true,
  enableContactForm: true,
  enableWhatsApp: true,
  enableCall: true,
  enableDirections: true,

  // --- future / architecture-only, not implemented ---
  productCatalogue: false,
  ecommerce: false,
  adminDashboard: false,
  blog: false,
  aiGeneratedContent: false,
  instagramApi: false,
  googleReviews: false,
  cms: false,
  multiTheme: false,
  multiLanguage: false,
  cloudinary: false,
  supabaseStorage: false,
  analytics: false,
};
