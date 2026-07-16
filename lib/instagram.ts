import { client } from "@/config/client";
import { features } from "@/config/features";
import type { InstagramPost } from "@/types";

/**
 * Instagram feed accessor.
 *
 * Today this simply returns the static placeholder posts defined in
 * `config/client.ts`. Once `features.instagramApi` is turned on, this is
 * the ONLY function that needs to change — swap the body for a call to
 * the Instagram Graph API (or a cached edge function) and every
 * component consuming `getInstagramPosts()` keeps working unmodified.
 */
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  if (features.instagramApi) {
    // Future: fetch(`https://graph.instagram.com/me/media?...`)
    // and map the response into InstagramPost[].
    return client.instagramPosts ?? [];
  }

  return client.instagramPosts ?? [];
}
