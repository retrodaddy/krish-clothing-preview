/**
 * Single source of truth for every image used on the site.
 *
 * No other config file, and no component, should ever contain an image
 * URL or path. Per-item images (categories, offerings/products,
 * testimonials, Instagram posts) are keyed by the same `id` used in
 * `content.ts`; `config/engine.ts` joins the two at read time.
 */
export interface ImageConfig {
  logo: string;
  heroImage: string;
  /** Falls back to heroImage if omitted. */
  ogImage?: string;
  categories: Record<string, string>;
  products: Record<string, string>;
  /** Optional avatars, keyed by testimonial id. */
  testimonials?: Record<string, string>;
  instagram: Record<string, string>;
  gallery: string[];
  /** Reserved for a future "team" section. */
  team?: Record<string, string>;
  /** Reserved for future About-page banner imagery beyond the gallery. */
  about?: string[];
}
