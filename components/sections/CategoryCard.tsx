"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Category } from "@/types";
import { ANIMATION } from "@/utils/constants";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

/**
 * Editorial-style image card for a product category. Purely presentational
 * — content comes from `category`, which flows from config/client.ts.
 */
export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: ANIMATION.viewportOnce, margin: ANIMATION.viewportMargin }}
      transition={{ duration: ANIMATION.duration, delay: index * 0.08, ease: ANIMATION.ease }}
      className="group relative aspect-[3/4] overflow-hidden rounded-xl2 shadow-soft"
    >
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
        <h3 className="font-serif text-2xl">{category.name}</h3>
        {category.description && (
          <p className="mt-1 text-sm text-cream/80">{category.description}</p>
        )}
      </div>
    </motion.div>
  );
}
