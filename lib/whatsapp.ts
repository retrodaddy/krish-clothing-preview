/**
 * WhatsApp deep-link helpers.
 *
 * Centralizing this logic means every "WhatsApp Us" button across the
 * template (hero, CTA section, contact page, footer) builds its link the
 * same way, from the same config value.
 */

/** Strips everything except leading `+` and digits. */
function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
}

export function buildWhatsAppUrl(phone: string, message?: string): string {
  const cleanPhone = sanitizePhone(phone);
  const base = `https://wa.me/${cleanPhone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function buildCallUrl(phone: string): string {
  return `tel:${sanitizePhone(`+${phone.replace(/^\+/, "")}`)}`;
}
