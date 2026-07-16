"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle } from "lucide-react";
import { client } from "@/config/client";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ANIMATION } from "@/utils/constants";

/**
 * Home page hero. Headline/subheadline/image are illustrative copy —
 * swap `client.tagline` / `client.heroImage` in config to rebrand.
 */
export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    client.whatsapp,
    `Hi ${client.name}, I'd love to know more about your collection.`
  );

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <Image
        src={client.heroImage}
        alt={client.name}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />

      <Container className="relative z-10 flex flex-col items-center pt-20 text-center text-cream">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration, ease: ANIMATION.ease }}
          className="mb-6 text-xs uppercase tracking-wide2 text-accent"
        >
          {client.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration, delay: 0.1, ease: ANIMATION.ease }}
          className="max-w-3xl font-serif text-5xl leading-[1.1] sm:text-6xl lg:text-7xl"
        >
          {client.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration, delay: 0.2, ease: ANIMATION.ease }}
          className="mt-6 max-w-xl text-balance text-base text-cream/80 sm:text-lg"
        >
          Discover kurtis, maxis, and frocks crafted for women who value quality as much as style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION.duration, delay: 0.3, ease: ANIMATION.ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#featured-collection" variant="accent" icon={<ShoppingBag size={16} />}>
            View Collection
          </Button>
          <Button href={whatsappUrl} external variant="outline" className="border-cream/40 text-cream hover:border-accent hover:text-accent" icon={<MessageCircle size={16} />}>
            WhatsApp Us
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
