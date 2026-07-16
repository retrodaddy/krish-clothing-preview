import type { ContentConfig } from "@/types";

/**
 * Editorial copy + per-item collections for Krish Clothing Store.
 *
 * Categories were updated from the original demo taxonomy
 * (Kurtis/Maxis/Frocks) to Kurtis/Maxis/Sarees to match what Krish
 * actually carries per their real product photos — a content decision,
 * not an architecture one; the 3-category grid layout is unchanged.
 *
 * Items below carry no image — see images.ts, joined by id in engine.ts.
 */
export const content: ContentConfig = {
  about:
    "Krish Clothing Store is a boutique label built around everyday elegance — kurtis, maxis, and sarees designed to feel as good as they look. Every piece is chosen and finished with care, so getting dressed never feels like a compromise between comfort and style.",

  sections: {
    categories: {
      eyebrow: "Shop By Category",
      title: "Curated For Every Moment",
      description:
        "From easy everyday kurtis to flowing maxis and statement sarees — find the silhouette that fits your day.",
    },
    offerings: {
      eyebrow: "Featured Collection",
      title: "This Season's Edit",
      description: "A hand-picked selection from our latest arrivals.",
    },
    whyChooseUs: {
      eyebrow: "Why Choose Us",
      title: "What Sets Us Apart",
    },
    instagram: {
      eyebrow: "Follow Along",
      title: "Us On Instagram",
      description: "Real looks, styling ideas, and new arrivals.",
    },
    testimonials: {
      eyebrow: "Customer Reviews",
      title: "Loved By Our Customers",
    },
    cta: {
      title: "Come Visit Us In Store",
      description: "Try before you buy — our team is ready to help you find your fit.",
    },
    gallery: {
      eyebrow: "A Closer Look",
      title: "Our Collections In Focus",
    },
  },

  categories: [
    { id: "kurtis", name: "Kurtis", description: "Effortless everyday elegance" },
    { id: "maxis", name: "Maxis", description: "Flowing silhouettes for every occasion" },
    { id: "sarees", name: "Sarees", description: "Timeless drapes for life's big moments" },
  ],

  offerings: [
    {
      id: "prod-1",
      name: "Azure Bloom Kurti",
      description: "A breezy cotton kurti in blue floral print, cut for effortless everyday wear.",
      categoryId: "kurtis",
    },
    {
      id: "prod-2",
      name: "Meadow Check Kurti",
      description: "Green checked cotton with a botanical print sleeve — casual, breathable, versatile.",
      categoryId: "kurtis",
    },
    {
      id: "prod-3",
      name: "Lilac Hibiscus Maxi",
      description: "A soft lavender maxi with a hand-drawn hibiscus print and puff sleeves.",
      categoryId: "maxis",
    },
    {
      id: "prod-4",
      name: "Strawberry Fields Maxi",
      description: "A playful tiered maxi in strawberry print cotton, finished with a ruffled hem.",
      categoryId: "maxis",
    },
    {
      id: "prod-5",
      name: "Watercolor Blossom Dress",
      description: "A flowing midi dress in a watercolor floral wash of purple and green.",
      categoryId: "maxis",
    },
    {
      id: "prod-6",
      name: "Midnight Silk Saree",
      description: "A navy silk saree with a sheer organza pallu, for evenings that call for elegance.",
      categoryId: "sarees",
    },
  ],

  whyChooseUs: [
    {
      id: "quality",
      title: "Premium Quality",
      description: "Every garment is hand-finished and quality-checked before it reaches you.",
      icon: "Gem",
    },
    {
      id: "value",
      title: "Affordable Prices",
      description: "Boutique craftsmanship, priced so everyday elegance stays within reach.",
      icon: "Wallet",
    },
    {
      id: "trends",
      title: "Latest Trends",
      description: "Fresh collections designed around what's moving in fashion right now.",
      icon: "Sparkles",
    },
    {
      id: "service",
      title: "Friendly Service",
      description: "A team that treats every visit — in-store or online — like it matters.",
      icon: "HeartHandshake",
    },
  ],

  testimonials: [
    {
      id: "t1",
      name: "Ananya R.",
      location: "Bengaluru",
      rating: 5,
      quote:
        "The fabric quality is unlike anything I've bought off the rack elsewhere. Krish has become my go-to for festive wear.",
    },
    {
      id: "t2",
      name: "Priya M.",
      location: "Chennai",
      rating: 5,
      quote:
        "Beautiful stitching, true-to-size fits, and the staff genuinely helped me pick what suited me. Highly recommend.",
    },
    {
      id: "t3",
      name: "Sanya K.",
      location: "Hyderabad",
      rating: 5,
      quote:
        "I ordered a saree for a wedding and it looked even better in person. Will be back for every occasion now.",
    },
  ],

  instagramPosts: [
    { id: "ig1" },
    { id: "ig2" },
    { id: "ig3" },
    { id: "ig4" },
    { id: "ig5" },
    { id: "ig6" },
  ],
};
