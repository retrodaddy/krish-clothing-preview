import type { BusinessProfile } from "@/types";

/**
 * Business identity + operational details for Krish Clothing Store.
 *
 * ⚠️ TEMPORARY DEMO VALUES — for the client presentation only.
 * contact.address and contact.email below are real, provided by Krish
 * for this presentation. contact.phone and contact.whatsapp are still
 * placeholder numbers (no real number provided yet) — the WhatsApp/Call/
 * Directions buttons stay functional for the demo, but these MUST be
 * replaced with Krish's real phone/WhatsApp number before production
 * deployment. googleMapsUrl/directionsUrl are a best-effort map search
 * built from the address above, not a verified pin — replace with the
 * real Google Maps link once available.
 */
export const business: BusinessProfile = {
  id: "krish-clothing-store",
  name: "Krish Clothing Store",
  tagline: "Timeless Fashion, Modern Elegance",
  industry: "fashion",

  mission:
    "To make premium, thoughtfully made fashion accessible to every woman, without cutting corners on quality or craftsmanship.",
  vision:
    "To become the most trusted boutique name in modern Indian fashion — where timeless design meets everyday wearability.",
  customerPromise:
    "Every piece we sell is quality-checked by hand. If it doesn't meet our standard, it doesn't reach your wardrobe.",

  contact: {
    // ⚠️ TEMPORARY — no real phone/WhatsApp number provided yet. Replace
    // before production deployment.
    phone: "+919876543210",
    whatsapp: "+919876543210",

    // Real, provided for the client presentation.
    email: "krishclothing@gmail.com",
    address: "123 Boutique Street, Tiruppur, Tamil Nadu, India",
    addressLine1: "123 Boutique Street",
    city: "Tiruppur",
    state: "Tamil Nadu",
    country: "India",

    // ⚠️ TEMPORARY — best-effort map search from the address above, not a
    // verified Google Maps pin. Replace with the real listing link.
    googleMapsUrl: "https://maps.google.com/?q=123+Boutique+Street+Tiruppur+Tamil+Nadu+India",
    directionsUrl: "https://maps.google.com/?q=123+Boutique+Street+Tiruppur+Tamil+Nadu+India",
  },
  businessHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 8:30 PM" },
    { days: "Sunday", hours: "11:00 AM – 6:00 PM" },
  ],
};
