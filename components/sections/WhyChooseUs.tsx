"use client";

import { motion } from "framer-motion";
import { Gem, Wallet, Sparkles, HeartHandshake, type LucideIcon } from "lucide-react";
import { client } from "@/config/client";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ANIMATION } from "@/utils/constants";

/**
 * Maps the string icon names stored in config/client.ts to actual
 * lucide-react components. Add to this map if a client's `whyChooseUs`
 * entries reference a new icon.
 */
const iconMap: Record<string, LucideIcon> = {
  Gem,
  Wallet,
  Sparkles,
  HeartHandshake,
};

export function WhyChooseUs() {
  const items = client.whyChooseUs ?? [];

  return (
    <section className="bg-ink py-24 text-cream">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="What Sets Us Apart"
          align="center"
          theme="light"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Gem;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: ANIMATION.viewportOnce, margin: ANIMATION.viewportMargin }}
                transition={{ duration: ANIMATION.duration, delay: i * 0.08, ease: ANIMATION.ease }}
                className="rounded-xl2 border border-cream/10 p-8 text-center transition-colors duration-300 hover:border-accent/50"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 font-serif text-xl">{item.title}</h3>
                <p className="mt-2 text-sm text-cream/70">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
