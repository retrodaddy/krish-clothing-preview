"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import { client } from "@/config/client";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface FormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", phone: "", email: "", message: "" };

/**
 * Contact form with Name/Phone/Email/Message fields.
 *
 * No backend is wired up yet — submitting shows an inline confirmation.
 * This is the seam where a future API route / CMS / email service call
 * would go (e.g. POST to /api/contact) without changing the form's shape.
 */
export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Future: send `values` to an API route / CRM / email service here.
    setSubmitted(true);
  }

  const whatsappMessage = `Hi ${client.name}, my name is ${values.name || "___"}.\n${values.message || "I'd like to know more."}`;
  const whatsappUrl = buildWhatsAppUrl(client.whatsapp, whatsappMessage);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-xl2 bg-white p-10 text-center shadow-soft"
      >
        <CheckCircle2 className="text-primary" size={40} />
        <h3 className="mt-4 font-serif text-2xl text-ink">Thank You</h3>
        <p className="mt-2 max-w-sm text-ink/60">
          We&apos;ve received your message and will get back to you shortly. For a faster
          response, message us directly on WhatsApp.
        </p>
        <div className="mt-6">
          <Button href={whatsappUrl} external variant="primary" icon={<MessageCircle size={16} />}>
            WhatsApp Us
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white p-8 shadow-soft sm:p-10">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className="mb-2 block text-xs uppercase tracking-wide text-ink/60" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            required
            value={values.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full rounded-lg border border-ink/15 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors focus:border-primary"
            placeholder="Your full name"
          />
        </div>
        <div className="sm:col-span-1">
          <label className="mb-2 block text-xs uppercase tracking-wide text-ink/60" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={values.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full rounded-lg border border-ink/15 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors focus:border-primary"
            placeholder="+91 98765 43210"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-wide text-ink/60" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full rounded-lg border border-ink/15 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors focus:border-primary"
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-2 block text-xs uppercase tracking-wide text-ink/60" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={values.message}
            onChange={(e) => handleChange("message", e.target.value)}
            className="w-full resize-none rounded-lg border border-ink/15 bg-cream/40 px-4 py-3 text-ink outline-none transition-colors focus:border-primary"
            placeholder="Tell us what you're looking for..."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row">
        <Button type="submit" variant="primary" icon={<Send size={16} />}>
          Submit
        </Button>
        <Button href={whatsappUrl} external variant="outline" icon={<MessageCircle size={16} />}>
          WhatsApp Instead
        </Button>
      </div>
    </form>
  );
}
