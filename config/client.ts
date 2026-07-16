import { engine, resolved, activeTheme } from "./engine";
import type { ClientConfig } from "@/types";

/**
 * @deprecated Backward-compatibility shim for the Phase 1 flat config.
 *
 * Every component still imports `{ client }` from here. Rather than edit
 * every one of those imports in the same pass that introduced the Engine
 * (config/engine.ts + business/social/theme/images/content/seo/features/
 * navigation), this file reconstructs the old flat shape from the new
 * modular sources so the UI keeps rendering byte-for-byte identically.
 *
 * Remove this file once every component reads from `config/engine`
 * directly (Engine migration Phase C).
 */
export const client: ClientConfig = {
  name: engine.business.name,
  tagline: engine.business.tagline,
  logo: engine.images.logo,
  heroImage: engine.images.heroImage,

  primaryColor: activeTheme.colors.primary,
  secondaryColor: activeTheme.colors.secondary,
  accentColor: activeTheme.colors.accent,

  categories: resolved.categories,
  featuredProducts: resolved.products,

  instagram: engine.social.instagram ?? "",
  whatsapp: engine.business.contact.whatsapp,
  phone: engine.business.contact.phone,
  email: engine.business.contact.email,
  address: engine.business.contact.address,
  googleMaps: engine.business.contact.googleMapsUrl,
  social: {
    instagram: engine.social.instagram,
    facebook: engine.social.facebook,
  },
  businessHours: engine.business.businessHours,

  about: engine.content.about,
  mission: engine.business.mission,
  vision: engine.business.vision,
  customerPromise: engine.business.customerPromise,
  gallery: engine.images.gallery,
  whyChooseUs: engine.content.whyChooseUs,
  testimonials: resolved.testimonials,
  instagramPosts: resolved.instagramPosts,

  seoTitle: engine.seo.title,
  seoDescription: engine.seo.description,
};
