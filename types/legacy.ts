import type { Category, Product, Testimonial, InstagramPost } from "./display";
import type { WhyChooseUsItem } from "./content";
import type { SocialLinks } from "./social";
import type { BusinessHours } from "./business";

/**
 * @deprecated Shape of the original Phase 1 flat config (config/client.ts).
 * Kept only to type the `config/client.ts` backward-compatibility shim
 * during the Engine migration. New code should read from `config/engine`
 * (typed as `WebsiteEngineConfig`) instead. Remove once every component
 * has been rewired (Engine migration Phase C) and delete this file.
 */
export interface ClientConfig {
  name: string;
  tagline: string;
  logo: string;
  heroImage: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  categories: Category[];
  featuredProducts: Product[];
  instagram: string;
  whatsapp: string;
  phone: string;
  email: string;
  address: string;
  googleMaps: string;
  social?: SocialLinks;
  businessHours?: BusinessHours[];
  about: string;
  mission: string;
  vision: string;
  customerPromise?: string;
  gallery?: string[];
  whyChooseUs?: WhyChooseUsItem[];
  testimonials: Testimonial[];
  instagramPosts?: InstagramPost[];
  seoTitle?: string;
  seoDescription?: string;
}
