import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { getTestimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const testimonials = getTestimonials();

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Customer Reviews"
          title="Loved By Our Customers"
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
