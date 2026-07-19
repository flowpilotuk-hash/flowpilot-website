# FlowPilot UK — Website

A premium, fast, accessible website for **FlowPilot UK** — professional websites and
digital tools for small businesses.

Built as a component-based static site with **Eleventy (11ty)** and **Tailwind CSS**.
It pre-renders to plain HTML for excellent performance, SEO and accessibility.

---

## Quick start

```bash
npm install        # install dependencies (first time only)
npm run dev        # local dev server with live reload → http://localhost:8080
npm run build      # production build into /_site
```

- `npm run dev` — builds the site + CSS and watches for changes.
- `npm run build` — clean production build (minified CSS, pre-rendered HTML).

The finished site is written to **`_site/`**. Upload the contents of that folder to any
static host (Netlify, Cloudflare Pages, Vercel, GitHub Pages, or normal web hosting).

---

## Project structure

```
src/
├─ _data/site.js            ← ALL content & settings (edit this first)
├─ _includes/
│  ├─ layouts/base.njk      ← page shell: <head>, SEO, header, footer
│  ├─ partials/             ← header, footer, contact form
│  └─ components/ui.njk     ← reusable UI (icons, buttons, package card, CTA)
├─ css/main.css             ← Tailwind entry + design system
├─ assets/
│  ├─ js/main.js            ← nav, FAQ accordion, scroll reveal, form
│  └─ favicon/              ← SVG favicon + web manifest
├─ index.njk                ← Home
├─ website-packages.njk     ← Website Packages
├─ how-we-work.njk          ← How We Work
├─ about.njk                ← About
├─ contact.njk              ← Contact
├─ sitemap.njk → sitemap.xml
└─ robots.txt
```

## Editing content

Almost everything lives in **`src/_data/site.js`**: brand name, email, phone, business
hours, navigation, the three packages, optional extras, the support plan, the comparison
matrix, process steps, principles and FAQs. Change it there and every page updates.

### Adding a new page

Create `src/your-page.njk` with this front matter and it's automatically added to the
navigation-ready site and sitemap:

```njk
---
layout: layouts/base.njk
title: Your Page Title
description: A concise meta description for search engines.
permalink: /your-page/
---
```

To show it in the header/footer, add an entry to the `nav` array in `site.js`.

## Before you go live — checklist

1. **Prices** in `src/_data/site.js` are sensible placeholders — confirm your real figures.
2. **Phone number** (`contact.phone` / `phoneDisplay`) — replace the placeholder.
3. **Contact form** — set a real endpoint in `src/_includes/partials/contact-form.njk`
   (`action="..."`). It's pre-wired for [Formspree](https://formspree.io) — paste your form
   ID. Until then, the form gracefully falls back to opening the visitor's email app.
4. **Domain** — update `url` in `site.js` (used for canonical URLs, sitemap and social tags).
5. Add real **photography** and an **Open Graph share image** when available.

## Design system

- **Colours:** Chartreuse (`#C6F135`) used strictly as an accent, with near-black,
  white and warm greys. Defined in `tailwind.config.js`.
- **Type:** Inter / Inter Tight, large calm headings, generous spacing.
- **Motion:** subtle fades and micro-interactions only; fully respects
  `prefers-reduced-motion`.
- **Accessibility:** semantic HTML, skip link, visible focus states, labelled form,
  ARIA on the menu and accordion, strong colour contrast.

## Tech

Eleventy · Tailwind CSS · vanilla JS (no framework, no runtime dependencies).
