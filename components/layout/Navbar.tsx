"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { client } from "@/config/client";
import { navLinks } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

/**
 * Sticky, translucent-on-scroll navigation bar. Store name and logo come
 * entirely from config/client.ts.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-premium",
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-accent/40">
            <Image src={client.logo} alt={client.name} fill sizes="40px" className="object-cover" />
          </span>
          <span className="font-serif text-xl tracking-wide text-ink">{client.name}</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm uppercase tracking-wide2 text-ink/70 transition-colors hover:text-primary",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-transform duration-300 ease-premium hover:scale-[1.03] md:inline-flex"
        >
          Visit Us
        </Link>

        <button
          aria-label="Toggle menu"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-base text-ink/80 hover:bg-ink/5",
                  pathname === link.href && "text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
