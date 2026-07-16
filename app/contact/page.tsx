import type { Metadata } from "next";
import { client } from "@/config/client";
import { Container } from "@/components/layout/Container";
import { PageBanner } from "@/components/layout/PageBanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { StoreInfo } from "@/components/sections/StoreInfo";
import { MapEmbed } from "@/components/sections/MapEmbed";

export const metadata: Metadata = {
  title: `Contact | ${client.name}`,
  description: `Get in touch with ${client.name} — visit our store, call, or message us on WhatsApp.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get In Touch"
        title="Contact Us"
        description="Questions about a piece, sizing, or an order? We're one message away."
      />

      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="flex flex-col gap-8 lg:col-span-2">
              <StoreInfo />
              <MapEmbed />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
