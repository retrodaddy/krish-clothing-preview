import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream">
      <Container className="flex flex-col items-center text-center">
        <span className="font-serif text-7xl text-primary">404</span>
        <h1 className="mt-4 font-serif text-2xl text-ink">Page Not Found</h1>
        <p className="mt-2 text-ink/60">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="mt-8">
          <Button href="/">Back to Home</Button>
        </div>
      </Container>
    </section>
  );
}
