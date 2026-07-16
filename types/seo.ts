export interface SEOConfig {
  businessName: string;
  title: string;
  description: string;
  keywords: string[];
  /** Falls back to images.ogImage / images.heroImage if omitted. */
  ogImage?: string;
  canonicalUrl?: string;
  /** schema.org type, e.g. "ClothingStore", "Restaurant", "BeautySalon". */
  schemaType: string;
}
