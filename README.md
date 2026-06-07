# Apex Exterior Co. — Premium Pressure Washing

A bespoke, editorial marketing site for a high-end exterior cleaning company.
Built to feel like a custom design-studio build: cinematic hero, interactive
before/after sliders, sticky split layouts, and a concierge-style estimate flow.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for scroll reveals, parallax, and transitions
- Editorial type pairing: **Fraunces** (display serif) + **Inter** (sans)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Design system

Tokens live in `src/app/globals.css` (`@theme`):

- **Charcoal** `#14130f` / **Ink** `#0c0b09` — backgrounds
- **Cream** `#f4f0e7` / **Bone** `#e8e2d4` — text & surfaces
- **Gold** `#b6924f` / `#cdab6e` — accents only (never primary buttons)

## Sections

`src/app/page.tsx` composes: `Nav · Hero · Trust · Results · Services · WhyUs ·
Projects · Testimonials · Booking · FinalCta · Footer` (in `src/components/`).

## Swapping in real assets

- **Hero video** — drop a clip at `public/video/hero.mp4` (luxury homes,
  driveways, stone patios). It auto-plays; until then a cinematic still
  (slow Ken-Burns drift) is shown as the poster/fallback.
- **Photography** — imagery + all copy are centralized in `src/lib/content.ts`.
  Replace the Unsplash IDs in `PHOTOS` with your own hosted project photos.
- **Before/After** — the sliders render a CSS "grime" treatment as the *before*
  state from a single clean photo. To use genuine before/after pairs, extend
  `BeforeAfter` to accept separate `before`/`after` sources.
- **Contact details** — phone, email, and service area live in `Footer.tsx`,
  `FinalCta.tsx`, and `Booking.tsx`.

## Email notifications (Resend)

Every estimate request emails you instantly via [Resend](https://resend.com).

1. Sign up at [resend.com](https://resend.com) (free: 100 emails/day)
2. Copy `.env.example` → `.env.local` and fill in:
   - `RESEND_API_KEY` — from Resend dashboard → API Keys
   - `NOTIFY_EMAIL` — your email (where you get notified)
3. On **Vercel**, add the same two variables under Project → Settings → Environment Variables

Until keys are set, the form shows an error instead of a fake success.
After verifying your domain at Resend, set `RESEND_FROM_EMAIL` for branded send addresses.
