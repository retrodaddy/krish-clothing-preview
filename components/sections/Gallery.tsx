"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { client } from "@/config/client";
import { ANIMATION } from "@/utils/constants";

/**
 * Elegant image gallery for the About page. Reads image URLs from
 * `client.gallery` — add/remove images there, this component just lays
 * out whatever it's given.
 */
export function Gallery() {
  const images = client.gallery ?? [];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: ANIMATION.viewportOnce, margin: ANIMATION.viewportMargin }}
          transition={{ duration: ANIMATION.duration, delay: i * 0.06, ease: ANIMATION.ease }}
          className={`relative overflow-hidden rounded-xl2 shadow-soft ${
            i % 5 === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
          }`}
        >
          <Image
            src={src}
            alt={`${client.name} gallery image ${i + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="object-cover transition-transform duration-700 ease-premium hover:scale-105"
          />
        </motion.div>
      ))}
    </div>
  );
}
