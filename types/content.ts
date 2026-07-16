/**
 * Editorial copy + per-item collections. Industry-agnostic: "categories"
 * and "offerings" work equally for kurtis/maxis/frocks (fashion), starters/
 * mains (restaurant), or haircuts/color (salon) — the words shown on the
 * page come from `sections` copy below, not from a type name.
 *
 * Items here intentionally carry NO image field — images live only in
 * `images.ts`, matched by `id`.
 */
export interface SectionCopy {
  eyebrow?: string;
  title: string;
  description?: string;
}

export interface CategoryContent {
  id: string;
  name: string;
  description?: string;
  href?: string;
}

export interface OfferingContent {
  id: string;
  name: string;
  description: string;
  categoryId?: string;
  /** Reserved for a future e-commerce phase. Not rendered today. */
  price?: number;
}

export interface TestimonialContent {
  id: string;
  name: string;
  location?: string;
  rating?: number;
  quote: string;
}

export interface InstagramPostContent {
  id: string;
  caption?: string;
  href?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  /** lucide-react icon name, resolved at render time. */
  icon: string;
}

export interface ContentSections {
  categories: SectionCopy;
  offerings: SectionCopy;
  whyChooseUs: SectionCopy;
  instagram: SectionCopy;
  testimonials: SectionCopy;
  cta: SectionCopy;
  gallery: SectionCopy;
}

export interface ContentConfig {
  about: string;
  sections: ContentSections;
  categories: CategoryContent[];
  offerings: OfferingContent[];
  whyChooseUs: WhyChooseUsItem[];
  testimonials: TestimonialContent[];
  instagramPosts: InstagramPostContent[];
}
