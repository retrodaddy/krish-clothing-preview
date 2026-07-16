/**
 * Industry-agnostic business identity + operational details.
 *
 * This is deliberately generic: nothing here assumes retail/fashion.
 * A restaurant, salon, gym, hospital, school, or real-estate template
 * fills in the exact same shape.
 */
export type BusinessType =
  | "fashion"
  | "restaurant"
  | "cafe"
  | "salon"
  | "gym"
  | "hospital"
  | "school"
  | "construction"
  | "real-estate"
  | "photography";

export interface BusinessHours {
  days: string;
  hours: string;
}

export interface BusinessContact {
  phone: string;
  whatsapp: string;
  email: string;
  /** Full formatted address for display. */
  address: string;
  /** Optional structured fields for future schema.org / maps precision. */
  addressLine1?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  googleMapsUrl: string;
  directionsUrl?: string;
}

export interface BusinessProfile {
  id: string;
  name: string;
  legalName?: string;
  tagline: string;
  ownerName?: string;
  industry: BusinessType;
  foundedYear?: number;
  mission: string;
  vision: string;
  customerPromise?: string;
  contact: BusinessContact;
  businessHours: BusinessHours[];
}
