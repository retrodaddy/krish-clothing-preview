import { Hero } from "@/components/sections/Hero";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

/**
 * Home page — pure composition of section components. No business copy
 * or data lives here; every section pulls from config/client.ts.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <FeaturedCollection />
      <WhyChooseUs />
      <InstagramSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
