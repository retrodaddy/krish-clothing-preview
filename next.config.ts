import type { NextConfig } from "next";

/**
 * Next.js configuration.
 *
 * Image domains are kept generic so this template can be re-pointed at any
 * client's image host (Unsplash/Picsum placeholders today, a real CDN or
 * headless CMS asset host tomorrow) by editing this single list.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "source.unsplash.com" },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
