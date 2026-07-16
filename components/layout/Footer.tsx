import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { client } from "@/config/client";
import { navLinks } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * Site footer. Every contact detail, social handle, and address line is
 * pulled from config/client.ts — nothing here is store-specific.
 */
export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(client.whatsapp, `Hi ${client.name}, I have a question.`);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl">{client.name}</h3>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">{client.tagline}</p>
          <div className="mt-6 flex items-center gap-4">
            {client.social?.instagram && (
              <a
                href={client.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-cream/20 p-2.5 transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram size={18} />
              </a>
            )}
            {client.social?.facebook && (
              <a
                href={client.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-cream/20 p-2.5 transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook size={18} />
              </a>
            )}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full border border-cream/20 p-2.5 transition-colors hover:border-accent hover:text-accent"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wide2 text-cream/50">Explore</h4>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wide2 text-cream/50">Visit</h4>
          <div className="mt-4 flex items-start gap-2 text-sm text-cream/80">
            <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
            <span>{client.address}</span>
          </div>
          <a href={`mailto:${client.email}`} className="mt-3 block text-sm text-cream/80 hover:text-accent">
            {client.email}
          </a>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-cream/50 sm:flex-row">
          <span>
            © {year} {client.name}. All rights reserved.
          </span>
          {/*
            Client-presentation disclaimer text, requested verbatim.
            Remove/replace once this moves past the concept-preview stage.
          */}
          <div className="flex flex-col items-center gap-0.5 text-center sm:items-end sm:text-right">
            <span>Fashion Template V1</span>
            <span>Designed by Retro Daddy Empire</span>
            <span>Website Concept Preview</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
