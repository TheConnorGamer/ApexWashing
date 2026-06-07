# Clean & Green Services — Demo Website

A polished demo site for **Clean & Green Services** — window cleaning and lawn care in Winnipeg, MB. Built to show prospective clients what's possible, then customize further if they want.

**Live business info:** Run by Idan & Tristin · 204-899-3566 · [@cleanandgreen.wpg](https://www.instagram.com/cleanandgreen.wpg)

## Stack

Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion · Resend (form notifications)

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Customize content

All business copy, services, stats, and photos live in `src/lib/content.ts`. Logo is at `public/logo.png`.

## Email notifications

Copy `.env.example` → `.env.local` and set `RESEND_API_KEY` + `NOTIFY_EMAIL`. See `.env.example` for details.

## Deploy

Push to GitHub → connect on [vercel.com](https://vercel.com) → add env vars → deploy.
