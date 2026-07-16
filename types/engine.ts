import type { BusinessType, BusinessProfile } from "./business";
import type { SocialLinks } from "./social";
import type { ThemeConfig } from "./theme";
import type { ImageConfig } from "./images";
import type { ContentConfig } from "./content";
import type { SEOConfig } from "./seo";
import type { FeatureFlags } from "./features";
import type { NavigationConfig } from "./navigation";

export interface EngineMeta {
  engineVersion: string;
  /** Which template this business is running, e.g. "fashion-v1". */
  templateId: string;
  industry: BusinessType;
}

/**
 * The full shape of one business's configuration for the Retro Daddy
 * Website Engine. Every future template (restaurant, salon, gym, real
 * estate, school, hospital, ...) supplies this same shape — only the
 * values differ, never the architecture.
 */
export interface WebsiteEngineConfig {
  meta: EngineMeta;
  business: BusinessProfile;
  theme: ThemeConfig;
  social: SocialLinks;
  images: ImageConfig;
  content: ContentConfig;
  seo: SEOConfig;
  features: FeatureFlags;
  navigation: NavigationConfig;
}
