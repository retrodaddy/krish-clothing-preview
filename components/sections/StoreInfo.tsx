import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { client } from "@/config/client";
import { formatPhoneDisplay } from "@/utils/format";

/**
 * Sidebar-style summary of store information: address, phone, email,
 * and business hours. Used on the Contact page next to the form.
 */
export function StoreInfo() {
  return (
    <div className="rounded-xl2 bg-ink p-8 text-cream shadow-soft sm:p-10">
      <h3 className="font-serif text-2xl">Store Information</h3>

      <ul className="mt-6 space-y-5">
        <li className="flex items-start gap-3 text-sm text-cream/80">
          <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
          <span>{client.address}</span>
        </li>
        <li className="flex items-start gap-3 text-sm text-cream/80">
          <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
          <a href={`tel:${client.phone}`} className="hover:text-accent">
            {formatPhoneDisplay(client.phone)}
          </a>
        </li>
        <li className="flex items-start gap-3 text-sm text-cream/80">
          <Mail size={18} className="mt-0.5 shrink-0 text-accent" />
          <a href={`mailto:${client.email}`} className="hover:text-accent">
            {client.email}
          </a>
        </li>
      </ul>

      {client.businessHours && client.businessHours.length > 0 && (
        <div className="mt-8 border-t border-cream/10 pt-6">
          <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wide2 text-cream/50">
            <Clock size={14} />
            Business Hours
          </div>
          <ul className="space-y-2">
            {client.businessHours.map((slot) => (
              <li key={slot.days} className="flex items-center justify-between text-sm">
                <span className="text-cream/70">{slot.days}</span>
                <span className="text-cream">{slot.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
