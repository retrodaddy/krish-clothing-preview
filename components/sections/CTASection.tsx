import { MessageCircle, Phone, MapPin } from "lucide-react";
import { client } from "@/config/client";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl, buildCallUrl } from "@/lib/whatsapp";

interface CTASectionProps {
  title?: string;
  description?: string;
}

/**
 * Large "Visit Our Store" call-to-action. Reused as-is on the home page;
 * the Contact page composes its own layout around the same three actions.
 */
export function CTASection({
  title = "Come Visit Us In Store",
  description = "Try before you buy — our team is ready to help you find your fit.",
}: CTASectionProps) {
  const whatsappUrl = buildWhatsAppUrl(client.whatsapp, `Hi ${client.name}, I'd like to visit your store.`);
  const callUrl = buildCallUrl(client.phone);

  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <Container className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-lg text-primary-foreground/80">{description}</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={whatsappUrl} external variant="accent" icon={<MessageCircle size={16} />}>
            WhatsApp
          </Button>
          <Button
            href={callUrl}
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground hover:border-accent hover:text-accent"
            icon={<Phone size={16} />}
          >
            Call
          </Button>
          <Button
            href={client.googleMaps}
            external
            variant="outline"
            className="border-primary-foreground/40 text-primary-foreground hover:border-accent hover:text-accent"
            icon={<MapPin size={16} />}
          >
            Directions
          </Button>
        </div>
      </Container>
    </section>
  );
}
