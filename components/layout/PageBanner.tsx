import { Container } from "@/components/layout/Container";

interface PageBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/**
 * Reusable hero banner for interior pages (About, Contact). Keeps every
 * non-home page visually consistent without duplicating markup.
 */
export function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="bg-ink py-24 text-cream sm:py-28">
      <Container className="text-center">
        {eyebrow && (
          <p className="mb-4 text-xs uppercase tracking-wide2 text-accent">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-balance text-cream/70">{description}</p>
        )}
      </Container>
    </section>
  );
}
