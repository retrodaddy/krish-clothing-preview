import type { Metadata } from "next";
import { Target, Eye, ShieldCheck } from "lucide-react";
import { client } from "@/config/client";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/layout/PageBanner";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: `About | ${client.name}`,
  description: client.about,
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Story"
        title={`About ${client.name}`}
        description={client.tagline}
      />

      {/* Our Story */}
      <section className="bg-white py-24">
        <Container className="mx-auto max-w-3xl text-center">
          <SectionTitle eyebrow="Since Day One" title="Our Story" />
          <p className="mt-6 text-balance leading-relaxed text-ink/70">{client.about}</p>
        </Container>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="bg-cream py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl2 bg-white p-8 shadow-soft">
              <Target className="text-primary" size={28} />
              <h3 className="mt-4 font-serif text-xl text-ink">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{client.mission}</p>
            </div>
            <div className="rounded-xl2 bg-white p-8 shadow-soft">
              <Eye className="text-primary" size={28} />
              <h3 className="mt-4 font-serif text-xl text-ink">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{client.vision}</p>
            </div>
            <div className="rounded-xl2 bg-white p-8 shadow-soft">
              <ShieldCheck className="text-primary" size={28} />
              <h3 className="mt-4 font-serif text-xl text-ink">Customer Promise</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {client.customerPromise ?? "Quality you can trust, every single time."}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Our Collections */}
      <CategoriesSection />

      {/* Gallery */}
      <section className="bg-white py-24">
        <Container>
          <SectionTitle eyebrow="A Closer Look" title="Our Collections In Focus" />
          <div className="mt-14">
            <Gallery />
          </div>
        </Container>
      </section>
    </>
  );
}
