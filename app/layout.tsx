import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { client } from "@/config/client";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Site metadata is generated from config/client.ts — rebranding the site
 * automatically rebrands its SEO title/description too.
 *
 * metadataBase falls back to the Vercel-provided preview URL
 * automatically (VERCEL_URL is set by Vercel at build time); set
 * NEXT_PUBLIC_SITE_URL once a real domain exists to override it.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: client.seoTitle ?? client.name,
  description: client.seoDescription ?? client.tagline,
  openGraph: {
    title: client.seoTitle ?? client.name,
    description: client.seoDescription ?? client.tagline,
    images: [client.heroImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <head>
        <ThemeProvider />
      </head>
      <body className="bg-cream font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
