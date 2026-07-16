"use client";

import { useMemo } from "react";
import { client } from "@/config/client";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Returns a memoized WhatsApp deep link for the store's configured
 * number, optionally pre-filled with a message (e.g. from a contact form).
 */
export function useWhatsAppLink(message?: string): string {
  return useMemo(() => buildWhatsAppUrl(client.whatsapp, message), [message]);
}
