import { business } from "./business";
import { social } from "./social";
import { theme, themePresets } from "./theme";
import { images } from "./images";
import { content } from "./content";
import { seo } from "./seo";
import { features } from "./features";
import { navigation } from "./navigation";
import type { WebsiteEngineConfig, Category, Product, Testimonial, InstagramPost } from "@/types";

/**
 * ============================================================================
 *  RETRO DADDY WEBSITE ENGINE — core configuration layer
 * ============================================================================
 *
 * This is the one file that assembles a runnable site out of eight
 * independent, industry-agnostic config modules: business, social, theme,
 * images, content, seo, features, navigation.
 *
 * It's also the ONLY place per-item content (categories, offerings,
 * testimonials, Instagram posts) gets joined with its image — images.ts
 * is the single source of truth for image URLs; content.ts never
 * contains one. Everything else in the app reads the already-resolved
 * `resolved.*` collections below, so no component needs to know that
 * content and images live in separate files.
 *
 * Every future template (restaurant, salon, gym, real estate, school,
 * hospital, construction, cafe, photography) plugs into this exact same
 * engine by supplying its own eight config modules — nothing in this
 * file is Fashion-specific.
 */

function resolveCategories(): Category[] {
  return content.categories.map((category) => ({
    ...category,
    image: images.categories[category.id] ?? images.heroImage,
  }));
}

function resolveProducts(): Product[] {
  return content.offerings.map((offering) => ({
    ...offering,
    image: images.products[offering.id] ?? images.heroImage,
  }));
}

function resolveTestimonials(): Testimonial[] {
  return content.testimonials.map((testimonial) => ({
    ...testimonial,
    avatar: images.testimonials?.[testimonial.id],
  }));
}

function resolveInstagramPosts(): InstagramPost[] {
  return content.instagramPosts.map((post) => ({
    ...post,
    image: images.instagram[post.id] ?? images.heroImage,
  }));
}

export const engine: WebsiteEngineConfig = {
  meta: {
    engineVersion: "1.0.0",
    templateId: "fashion-v1",
    industry: business.industry,
  },
  business,
  theme,
  social,
  images,
  content,
  seo,
  features,
  navigation,
};

/** Resolved, image-joined collections — this is what components consume. */
export const resolved = {
  categories: resolveCategories(),
  products: resolveProducts(),
  testimonials: resolveTestimonials(),
  instagramPosts: resolveInstagramPosts(),
};

/** Active theme's full token set, with any business-specific overrides applied. */
export const activeTheme = {
  ...themePresets[engine.theme.active],
  colors: { ...themePresets[engine.theme.active].colors, ...engine.theme.overrides },
};

export { themePresets };
