# FlowPilot — Flagship Website

A cinematic, dark, motion-rich flagship website for **FlowPilot** — professional
websites and digital tools for small businesses. The site is designed to be the
proof of the company's capability.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and
**Framer Motion**.

---

## Quick start

```bash
npm install     # first time only
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

---

## Project structure

```
app/
├─ layout.tsx            ← fonts, global metadata, Nav, Footer, providers
├─ globals.css           ← design system (tokens, components, utilities)
├─ page.tsx              ← Home (Hero → Problem → Packages → Process → …)
├─ pricing/page.tsx
├─ how-we-work/page.tsx
├─ about/page.tsx
├─ contact/page.tsx
├─ sitemap.ts · robots.ts
components/
├─ layout/   Nav, Footer
├─ effects/  Aircraft, ParticleField, CursorGlow, GridBackdrop
├─ ui/       Button (magnetic), Reveal, SectionHeading, PackageCard,
│            Accordion, PageHeader, FinalCTA
├─ home/     Hero, Problem, Packages, Process, WhyWeStarted, Principles, FAQ
├─ how/      Journey (scroll-animated timeline)
├─ pricing/  PricingBoard
├─ contact/  ContactForm
└─ Providers.tsx  ← Framer MotionConfig (honours reduced-motion)
lib/
├─ content.ts   ← ALL copy, packages, FAQs, pricing (edit here)
├─ motion.ts    ← shared easings & variants
└─ hooks.ts     ← usePrefersReducedMotion, useMagnetic, useIdle
public/favicon.svg
legacy-eleventy/          ← the previous Eleventy build, archived for reference
```

## Editing content

Almost everything lives in **`lib/content.ts`** — brand details, navigation, the
three packages, extras, the support plan, the comparison matrix, process steps,
principles and FAQs. Change it there and every page updates.

## Design & motion

- **Palette** — near-black (`#050505`) surfaces with chartreuse (`#B6FF00`) used
  sparingly as an accent. Tokens in `tailwind.config.ts`.
- **Type** — Space Grotesk (display) + Inter (body), loaded via `next/font`.
- **Signature motion** — cinematic hero load sequence (flight trail draws in),
  floating particle field, cursor-aware glow, magnetic buttons, scroll-reveals,
  and a flight-trail timeline where the aircraft flies down as you scroll.
- **Accessibility** — semantic HTML, skip link, visible focus rings, keyboard
  support, and full **reduced-motion** support (Framer `MotionConfig` +
  per-effect guards + CSS overrides). Heavy effects disable on touch devices.

## Before you go live — checklist

1. **Prices** in `lib/content.ts` are sensible placeholders — confirm real figures.
2. **Phone number** (`brand.phone` / `phoneDisplay`) — replace the placeholder.
3. **Contact form** — set your endpoint in `components/contact/ContactForm.tsx`
   (`ENDPOINT`). Pre-wired for [Formspree](https://formspree.io); until then it
   gracefully falls back to opening the visitor's email app.
4. **Domain** — update `brand.url` in `lib/content.ts` (canonical URLs, sitemap,
   social tags).

## Deploy

Any Next.js host works. **Vercel** is the simplest: push the repo and import it —
no configuration needed. `npm run build` also works for Node hosting.

## Performance

Fully static-prerendered pages, `next/font` (no layout shift), GPU-accelerated
transforms only, particle canvas pauses offscreen, and all heavy motion respects
reduced-motion. First-load JS ≈ 140–148 kB.
