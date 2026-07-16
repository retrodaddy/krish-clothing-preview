import type { CategoryContent, OfferingContent, TestimonialContent, InstagramPostContent } from "./content";

/**
 * Resolved, render-ready shapes — content joined with its image from
 * images.ts. These are what components actually receive as props; the
 * join happens once, in config/engine.ts, so no component ever needs to
 * know that content and images live in separate files.
 */
export interface Category extends CategoryContent {
  image: string;
}

export interface Product extends OfferingContent {
  image: string;
}

export interface Testimonial extends TestimonialContent {
  avatar?: string;
}

export interface InstagramPost extends InstagramPostContent {
  image: string;
}
