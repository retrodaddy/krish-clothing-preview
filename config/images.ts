import type { ImageConfig } from "@/types";

/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH FOR EVERY IMAGE ON THE SITE
 * ============================================================================
 *
 * No component, and no other config file, should ever contain an image
 * URL. Per-item images are keyed by the same `id` used for that item in
 * `content.ts` — config/engine.ts joins the two at read time.
 *
 * These are Krish Clothing Store's real photos, stored locally under
 * public/assets/ (see that folder for the raw files). With only ~11
 * source photos today, several sections intentionally reuse the same
 * shot — that's a real small-boutique asset library, not a bug. Add more
 * files to public/assets/<folder>/ and point these values at them as
 * Krish shoots more content.
 */
export const images: ImageConfig = {
  logo: "/assets/logo/logo.png",
  heroImage: "/assets/hero/hero.jpg",
  ogImage: "/assets/hero/hero.jpg",

  categories: {
    kurtis: "/assets/categories/kurtis.jpg",
    maxis: "/assets/categories/maxis.jpg",
    sarees: "/assets/categories/sarees.jpg",
  },

  products: {
    "prod-1": "/assets/products/prod-1.jpg",
    "prod-2": "/assets/products/prod-2.jpg",
    "prod-3": "/assets/products/prod-3.jpg",
    "prod-4": "/assets/products/prod-4.jpg",
    "prod-5": "/assets/products/prod-5.jpg",
    "prod-6": "/assets/products/prod-6.jpg",
  },

  testimonials: {},

  instagram: {
    ig1: "/assets/instagram/ig1.jpg",
    ig2: "/assets/instagram/ig2.jpg",
    ig3: "/assets/instagram/ig3.jpg",
    ig4: "/assets/instagram/ig4.jpg",
    ig5: "/assets/instagram/ig5.jpg",
    ig6: "/assets/instagram/ig6.jpg",
  },

  gallery: [
    "/assets/gallery/gallery-1.jpg",
    "/assets/gallery/gallery-2.jpg",
    "/assets/gallery/gallery-3.jpg",
    "/assets/gallery/gallery-4.jpg",
    "/assets/gallery/gallery-5.jpg",
    "/assets/gallery/gallery-6.jpg",
  ],

  team: {},
  about: [],
};
