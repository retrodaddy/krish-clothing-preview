# Retro Daddy Website Engine v1

The Retro Daddy Website Engine — a config-driven, industry-agnostic website
architecture. This repo runs its first instance: the **Fashion Template**,
demoed with **Krish Clothing Store**. Every future template (restaurant,
cafe, salon, gym, hospital, school, construction, real estate, photography)
plugs into this same engine — only the config values change, never the
architecture.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion ·
lucide-react.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
npm run typecheck                # tsc --noEmit
npm run lint                     # next lint
```

## The Engine: eight config modules, one composer

Every business fact — identity, contact details, theme, images, editorial
copy, SEO, feature toggles, navigation — lives in one of eight independent,
industry-agnostic modules under `config/`:

```
config/
  business.ts     Identity + operational details: name, tagline, owner,
                   industry, mission/vision/promise, contact info,
                   business hours
  social.ts        Social network links only (Instagram, Facebook, ...)
  theme.ts         Named theme presets (Luxury, Minimal, Dark, Elegant,
                   Modern, Classic) + which one is active
  images.ts        SINGLE SOURCE OF TRUTH for every image on the site —
                   no other file or component ever contains an image URL
  content.ts        Editorial copy + per-item collections (categories,
                   offerings, testimonials, Instagram posts, section
                   headings) — no images, joined with images.ts by id
  seo.ts           Title, description, keywords, OG image, canonical URL,
                   schema.org type
  features.ts      Feature flags — enable/disable sections, plus
                   architecture placeholders for unbuilt phases
  navigation.ts    Nav + footer links
  engine.ts         Composes all eight into one `engine` object and joins
                   content + images into render-ready collections
```

`config/engine.ts` is the core of the system: it imports the eight modules,
joins each content item (a category, an offering, a testimonial, an
Instagram post) with its image from `images.ts` by matching `id`, and
exports the result as `engine` (raw config) and `resolved` (image-joined
collections). Nothing else in the codebase should ever import from an
individual config module directly — everything reads `config/engine`.

Turning this into a different business — a different industry entirely —
means writing new values into these eight files. No component changes.

### Migration note (temporary)

`config/client.ts` and `config/site.ts` are backward-compatible shims that
reconstruct the old Phase 1 flat shape from the new engine, so every
existing component keeps working unmodified while the migration completes.
They're marked `@deprecated` and will be removed once components are
rewired to read `config/engine` directly (next migration phase) — nothing
about the deliverable today depends on you touching them.

## Theme Engine

`config/theme.ts` defines six named presets (Luxury, Elegant, Classic,
Minimal, Modern, Dark), each a full token set: colors, a heading/body font
pairing, corner radius, and shadow style. `theme.active` picks one;
`theme.overrides` can layer business-specific color tweaks on top. Krish
Clothing Store's exact palette today **is** the Luxury preset — switching
this on changed nothing visually. Wiring `theme.active` to actually swap
fonts/radius at render time (rather than just resolving colors, which
already works via `ThemeProvider`) is the next migration step.

## Feature flags

`config/features.ts` has two tiers. The `enable*` flags (`enableProducts`,
`enableTestimonials`, `enableInstagram`, `enableGallery`, `enableMap`,
`enableContactForm`, `enableWhatsApp`, `enableCall`, `enableDirections`)
are meant to gate real sections — wiring `app/page.tsx` and friends to
actually check them is the next migration step. Everything below that
(`ecommerce`, `cms`, `blog`, `instagramApi`, `multiLanguage`, ...) is an
architecture placeholder for a capability not built yet.

## Pages

- `/` — Home (Hero, Categories, Featured Collection, Why Choose Us,
  Instagram, Testimonials, Visit Our Store CTA)
- `/about` — Our Story, Mission/Vision/Promise, Our Collections, Gallery
- `/contact` — Contact form, WhatsApp/Call/Directions, store info, map
  placeholder

## Full architecture

```
app/            Routes (Home, About, Contact) + root layout
components/
  layout/       Navbar, Footer, Container, PageBanner
  ui/           SectionTitle, Button
  sections/     Hero, CategoryCard, ProductCard, TestimonialCard,
                InstagramSection, ContactForm, CTASection, Gallery, etc.
config/         business, social, theme, images, content, seo, features,
                navigation, engine (+ deprecated client.ts/site.ts shims)
data/           Thin accessors (currently reading through the client.ts shim)
hooks/          useWhatsAppLink
lib/            utils (cn), whatsapp link builder, instagram fetch stub, theme
types/          Modular interfaces mirroring config/ (business, theme,
                images, content, seo, features, navigation, engine),
                plus display.ts (render-ready shapes) and legacy.ts
                (deprecated, shim-only)
utils/          Generic constants/formatters (not business-specific)
public/         Static assets (images are remote URLs by default)
```

## Future-ready, not future-built

Beyond the feature flags above, this architecture is prepared — but does
not implement — Instagram API, Google Reviews, a CMS, an admin dashboard,
Cloudinary/Supabase Storage, analytics, e-commerce, and AI-generated
content. Two seams already exist:

- `lib/instagram.ts` — swap the placeholder feed for a real Instagram Graph
  API call without touching `InstagramSection.tsx`.
- `components/sections/ContactForm.tsx` — wire `handleSubmit` to a real API
  route / CRM / email service without changing the form's fields or markup.

## Notes

- Images use remote Unsplash URLs by default (configured in
  `next.config.ts` → `images.remotePatterns`). Point `config/images.ts`
  fields at a real CDN/DAM or a local `public/assets/<folder>/` file
  whenever ready — no component change needed.
- No pricing is shown on offering cards by design. `Product` has an
  optional `price` field reserved for the e-commerce phase.

## Current content status (Krish Clothing presentation build)

Real assets now in place: logo, hero image, all category/product/gallery/
Instagram photos (`public/assets/`), and the confirmed Instagram handle
(`@_krishclothing_`) in `config/social.ts`. Categories were relabeled from
the original demo taxonomy (Kurtis/Maxis/Frocks) to **Kurtis/Maxis/Sarees**
to match Krish's actual product photography.

Still placeholder, clearly marked with a warning comment at the top of
each file — replace before this goes fully live:

- `config/business.ts` — phone, WhatsApp number, email, address, business
  hours (structurally valid so the WhatsApp/Call/Directions buttons work
  for a preview, but not Krish's real details yet).
- `config/seo.ts` — `canonicalUrl` (currently a guessed domain; point it
  at the real domain or the Vercel preview URL once assigned).
- `config/content.ts` — the three customer testimonials are still the
  same fictional placeholder quotes from the architecture demo (Ananya R.,
  Priya M., Sanya K.) — swap for real reviews (or a live Google Reviews
  feed later) before presenting these as genuine customer feedback.

With only ~11 source photos today, a few sections intentionally reuse the
same shot across categories/products/gallery/Instagram — normal for a
small boutique's current asset library, not a bug. Add more files to
`public/assets/<folder>/` as Krish shoots more content.

## Deploying a live Vercel preview

```bash
npx vercel          # first deploy, follow the prompts
npx vercel --prod   # promote to production once approved
```

No environment variables are required for the preview to work. If a real
domain is attached later, set `NEXT_PUBLIC_SITE_URL` in the Vercel project
settings so Open Graph/canonical URLs resolve correctly instead of falling
back to the Vercel-assigned preview URL.
