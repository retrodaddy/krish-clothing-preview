/**
 * Feature flags.
 *
 * The `enable*` flags gate sections/actions that exist today — disabling
 * one hides that section entirely (wired in Phase C of the Engine
 * migration). Everything below that is purely an architecture
 * placeholder for a capability this engine will support later; flipping
 * one of those does nothing yet.
 */
export interface FeatureFlags {
  // Live toggles
  enableProducts: boolean;
  enableTestimonials: boolean;
  enableInstagram: boolean;
  enableGallery: boolean;
  enableMap: boolean;
  enableContactForm: boolean;
  enableWhatsApp: boolean;
  enableCall: boolean;
  enableDirections: boolean;

  // Future / architecture-only
  productCatalogue: boolean;
  ecommerce: boolean;
  adminDashboard: boolean;
  blog: boolean;
  aiGeneratedContent: boolean;
  instagramApi: boolean;
  googleReviews: boolean;
  cms: boolean;
  multiTheme: boolean;
  multiLanguage: boolean;
  cloudinary: boolean;
  supabaseStorage: boolean;
  analytics: boolean;
}
