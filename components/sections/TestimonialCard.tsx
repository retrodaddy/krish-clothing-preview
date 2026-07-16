"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { ANIMATION } from "@/utils/constants";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: ANIMATION.viewportOnce, margin: ANIMATION.viewportMargin }}
      transition={{ duration: ANIMATION.duration, delay: index * 0.08, ease: ANIMATION.ease }}
      className="flex h-full flex-col rounded-xl2 bg-white p-8 shadow-soft"
    >
      <Quote className="text-accent" size={28} />
      <p className="mt-4 flex-1 text-ink/80">&ldquo;{testimonial.quote}&rdquo;</p>

      <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
        <div>
          <p className="font-serif text-lg text-ink">{testimonial.name}</p>
          {testimonial.location && (
            <p className="text-sm text-ink/50">{testimonial.location}</p>
          )}
        </div>
        {testimonial.rating && (
          <div className="flex gap-0.5 text-accent">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
