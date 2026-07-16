/**
 * Pure social-network links/handles. Messaging/contact channels (phone,
 * WhatsApp, email) live on `BusinessProfile.contact` instead — those are
 * operational contact methods, not social platforms.
 */
export interface SocialLinks {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  pinterest?: string;
  tiktok?: string;
}
