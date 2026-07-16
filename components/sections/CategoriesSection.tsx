import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryCard } from "@/components/sections/CategoryCard";
import { getCategories } from "@/data/categories";

export function CategoriesSection() {
  const categories = getCategories();

  return (
    <section className="bg-cream py-24">
      <Container>
        <SectionTitle
          eyebrow="Shop By Category"
          title="Curated For Every Moment"
          description="From easy everyday kurtis to statement maxis and frocks — find the silhouette that fits your day."
        />
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
