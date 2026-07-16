import { MapPin, ExternalLink } from "lucide-react";
import { client } from "@/config/client";

/**
 * Google Maps placeholder. Swap this for a real embedded <iframe src=...>
 * once the client provides an embeddable map URL — the surrounding layout
 * (Contact page) doesn't need to change either way.
 */
export function MapEmbed() {
  return (
    <a
      href={client.googleMaps}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl2 bg-ink/5 shadow-soft transition-colors hover:bg-ink/10 sm:aspect-video"
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <MapPin className="relative z-10 text-primary" size={36} />
      <p className="relative z-10 max-w-xs text-center text-sm text-ink/60">{client.address}</p>
      <span className="relative z-10 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-primary">
        Open in Google Maps <ExternalLink size={12} />
      </span>
    </a>
  );
}
