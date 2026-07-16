"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/types";
import { ANIMATION } from "@/utils/constants";

interface ProductCardProps {
  product: Product;
  index?: number;
}

/**
 * Featured product card: image, name, short description. Intentionally
 * has no price — pricing is a future e-commerce-phase concern
 * (see config/features.ts -> ecommerce).
 */
export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: ANIMATION.viewportOnce, margin: ANIMATION.viewportMargin }}
      transition={{ duration: ANIMATION.duration, delay: index * 0.06, ease: ANIMATION.ease }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl2 bg-ink/5 shadow-soft">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
        />
      </div>
      <h3 className="mt-4 font-serif text-lg text-ink">{product.name}</h3>
      <p className="mt-1 text-sm text-ink/60">{product.description}</p>
    </motion.div>
  );
}
