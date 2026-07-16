import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProductCard } from "@/components/sections/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedCollection() {
  const products = getFeaturedProducts();

  return (
    <section id="featured-collection" className="scroll-mt-24 bg-white py-24">
      <Container>
        <SectionTitle
          eyebrow="Featured Collection"
          title="This Season's Edit"
          description="A hand-picked selection from our latest arrivals."
        />
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
