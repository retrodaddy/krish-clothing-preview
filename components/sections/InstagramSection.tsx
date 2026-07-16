import Image from "next/image";
import { Instagram } from "lucide-react";
import { client } from "@/config/client";
import { Container } from "@/components/layout/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { getInstagramPosts } from "@/lib/instagram";

/**
 * Instagram promo grid. Currently reads static placeholder posts from
 * config via `getInstagramPosts()`. Once the Instagram Graph API is
 * wired up (config/features.ts -> instagramApi), only `lib/instagram.ts`
 * needs to change — this component keeps working unmodified.
 */
export async function InstagramSection() {
  const posts = await getInstagramPosts();

  return (
    <section className="bg-cream py-24">
      <Container>
        <SectionTitle
          eyebrow="Follow Along"
          title="Us On Instagram"
          description={`Real looks, styling ideas, and new arrivals — @${client.instagram.split("/").pop()}`}
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={client.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl2"
            >
              <Image
                src={post.image}
                alt={post.caption ?? "Instagram post"}
                fill
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 text-cream opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <Instagram size={22} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={client.instagram} external variant="outline" icon={<Instagram size={16} />}>
            @{client.instagram.split("/").pop()}
          </Button>
        </div>
      </Container>
    </section>
  );
}
