# FlowPilot — Master Specification

**The single source of truth for the FlowPilot brand, website and digital experience.**

| | |
|---|---|
| **Document** | FlowPilot Master Specification |
| **Version** | 1.0 |
| **Status** | Living document — updated as the product evolves |
| **Last updated** | 22 July 2026 |
| **Owner** | FlowPilot UK |
| **Applies to** | flowpilotuk.com and all FlowPilot digital surfaces |

---

## How to read this document

This is not a marketing brochure and it is not a wish-list. It is the operating manual for building, judging and maintaining FlowPilot's digital presence. Two audiences use it:

1. **Builders** (human or AI) implementing or extending the site. For you, this document is prescriptive. When it says a value, use that value. When it says a rule, follow it. Where it describes something already built, it reflects the real implementation, not an aspiration.
2. **Reviewers** deciding whether something is good enough to ship. For you, this document is the standard. The last section — *The Final Question* — is the bar.

The document is deliberately opinionated. FlowPilot's entire proposition is that clarity and calm are a competitive advantage. A vague specification would betray that. Every decision here has a reason, and the reason is usually the same: **reduce friction, increase trust, and let the work be the proof.**

Where you see a value in `monospace`, it is a literal token from the codebase. Where you see a ✅ or a rule, it is a commitment, not a suggestion.

---

## Table of contents

1. [Executive Vision](#1-executive-vision)
2. [Brand DNA](#2-brand-dna)
3. [User Psychology — Second by Second](#3-user-psychology--second-by-second)
4. [Design Language](#4-design-language)
5. [Motion System](#5-motion-system)
6. [Micro-interaction Catalogue](#6-micro-interaction-catalogue)
7. [The Complete UX Journey](#7-the-complete-ux-journey)
8. [Component Library](#8-component-library)
9. [Folder Structure](#9-folder-structure)
10. [Code Standards](#10-code-standards)
11. [Responsive Rules](#11-responsive-rules)
12. [Accessibility](#12-accessibility)
13. [Performance](#13-performance)
14. [SEO & Structured Data](#14-seo--structured-data)
15. [Future Expansion](#15-future-expansion)
16. [Phase 2 — Quality Assurance](#16-phase-2--quality-assurance)
17. [The Launch Checklist](#17-the-launch-checklist)
18. [The Final Question](#18-the-final-question)

**Appendices:** [A — Design Token Reference](#appendix-a--design-token-reference) · [B — Voice & Copywriting Playbook](#appendix-b--voice--copywriting-playbook) · [C — Component Quick Reference](#appendix-c--component-quick-reference) · [D — Content Inventory](#appendix-d--content-inventory) · [E — Definition of Done & Change Log](#appendix-e--definition-of-done--change-log)

---

## 1. Executive Vision

### 1.1 What FlowPilot is

FlowPilot helps small businesses build and maintain a professional online presence. Trades, dog groomers, hair salons, beauticians, restaurants, accountants, solicitors, consultants — the people who keep local high streets running. We build straightforward websites and digital tools that help these businesses **earn trust, attract customers and stay organised online.**

That is the whole company in one sentence. Everything in this document exists to serve it.

### 1.2 The problem we exist to solve

Getting a good website has become slow, confusing and expensive for the exact people who can least afford the friction. A busy business owner faces:

- **Time they don't have** — endless discovery meetings, revision calls, chasing.
- **Language they shouldn't need to learn** — jargon, acronyms, "solutions," "synergy."
- **Pricing they can't predict** — vague quotes, scope creep, surprise invoices.
- **Abandonment after the sale** — agencies that vanish the moment the invoice clears.

FlowPilot removes each of these, deliberately. Not as features to boast about, but as a default state the customer feels rather than reads.

### 1.3 The philosophy

Six principles govern every decision — commercial, editorial and technical:

1. **Respect the customer's time.** The single most valuable thing a small business owner has. We protect it ruthlessly. Everything can begin, progress and finish by email.
2. **Keep things simple.** Clarity is the product. If a sentence, a screen or a step can be removed without loss, it is removed.
3. **Recommend, don't sell.** We tell people what genuinely helps — including when the answer is "you don't need that." Trust compounds; a single hard sell spends it all.
4. **Build long-term relationships.** The relationship begins at launch, not ends there. We are a partner for the years ahead.
5. **Automate internally, personalise externally.** Behind the scenes, ruthless efficiency and systems. In front of the customer, a calm human who has clearly got this handled.
6. **"We'll take it from here."** The emotional core. The moment a customer hands us their worry and feels it lifted.

### 1.4 The strategic bet

Most web agencies compete on price, features or portfolio. FlowPilot competes on **how it makes people feel** and on **proof by demonstration.** The website is not an advertisement for the capability; the website *is* the capability, on display. This is the central strategic bet of the entire project:

> If FlowPilot's own website is this considered, this calm, this alive and this precise, then a prospective customer doesn't need to be told FlowPilot is good. They have already experienced it.

The intended reaction is not "nice website." It is **"who built that?"** — and the answer, *FlowPilot built FlowPilot*, is the moment marketing becomes proof.

### 1.5 The experience direction

The site should feel like a premium digital product launch, not a service page. The reference points are **Apple, Stripe, Linear and Vercel** — companies whose surfaces communicate rigour before a word is read. It is explicitly *not* a local agency site, a freelancer portfolio, a template marketplace, a WordPress theme, or a generic SaaS landing page.

Concretely, that means:

- **Cinematic, not busy.** Motion that feels choreographed, not decorated.
- **Dark and premium**, with a single confident accent used like a scalpel.
- **Alive** — the page breathes, responds and rewards attention — but never at the cost of clarity or speed.
- **Intrigue, then understanding.** The hero creates curiosity in the first second and delivers comprehension within a few. It does not explain everything at once; it invites.

### 1.6 What success looks like

- A first-time visitor understands *what FlowPilot does* within ~5 seconds and *why they should trust it* within ~30.
- The site scores 95+ Performance, 95+ SEO, 100 Best Practices and meets WCAG 2.1 AA — with the motion fully intact.
- A competing agency landing on the site recognises, without being told, that FlowPilot operates at a different level.
- The bounce is low not because of tricks, but because the experience is genuinely pleasant to be inside.
- The owner of FlowPilot can point at the site and say, honestly, "there is nothing left that materially improves the experience."

---

## 2. Brand DNA

### 2.1 Brand personality

FlowPilot is a person you'd trust with something important and never worry about again. If the brand were that person, they would be:

| Trait | What it means in practice |
|---|---|
| **Professional** | Everything is finished, considered, correct. Nothing feels improvised. |
| **Modern** | Current without chasing trends. Timeless-modern, not fashionable-modern. |
| **Minimal** | Says less. Every element earns its place. Whitespace is confidence. |
| **Calm** | Never shouts, never rushes the visitor, never manufactures urgency. |
| **Honest** | Plain English. Real answers. Tells you when you don't need something. |
| **Friendly** | Warm, human, approachable — a partner, not a vendor. |
| **Premium** | Quiet luxury. The quality is felt in the details, not announced. |
| **Reliable** | It works, every time, on every device. Precision as reassurance. |

### 2.2 The name and the metaphor

**FlowPilot.** A pilot keeps you moving safely toward a destination while you relax in your seat. "Flow" is momentum without friction; "Pilot" is expert control you can hand over to. Together they encode the brand promise: *keep your business moving, and let us take the controls.*

The **aircraft mark** is therefore not decoration — it is the brand's central metaphor made visible, and a functional part of the interface language (see §4.8 and §5.5). It leads the eye, marks progress, and reinforces momentum. It is used with restraint so it always feels intentional.

### 2.3 Voice and tone

**Voice** (constant): clear, warm, confident, unpretentious. The voice of an expert who has chosen to speak plainly *because* they're an expert, not despite it.

**Tone** (contextual): reassuring on the problem, matter-of-fact on process, quietly proud on craft, never boastful anywhere.

**Rules of the voice:**

- Short sentences. One idea each. Fragments are allowed for rhythm.
- Second person. "Your business," "you," "we." It's a conversation.
- Plain English always. If a nine-year-old couldn't follow the gist, rewrite it.
- Say the reassuring thing directly. "No lengthy meetings." "You own your website." "We'll take it from here."
- Confidence through clarity, never through claims. We do not say we are the best; we demonstrate it.

**The banned-words list.** These never appear in FlowPilot copy, because they are the vocabulary of the companies we are the antidote to:

> ❌ cutting edge · innovative · world class · digital transformation · synergy · growth hacking · results driven · solutions · leverage · seamless · game-changing · next-generation · disrupt · bespoke (overused) · unlock · empower

**The house phrases.** These are ours, used deliberately:

> ✅ "Keep your business moving." · "We'll take it from here." · "No lengthy meetings. No jargon. Everything can begin by email." · "Recommend, don't sell." · "Get a quote." · "Built and looked after in the UK."

### 2.4 Positioning statement

> For UK small business owners who want a professional online presence without the cost, jargon and wasted time of a traditional agency, **FlowPilot** is a long-term website partner that makes getting — and staying — online genuinely simple. Unlike agencies that sell, disappear and complicate, FlowPilot recommends honestly, works mostly by email, and proves its craft with its own work.

### 2.5 What the brand is not

- Not cheap — *accessible.* (We remove cost barriers without ever feeling budget.)
- Not flashy — *alive.* (Motion serves meaning; it never performs for its own sake.)
- Not clever — *clear.* (We never make the customer feel stupid, and never show off.)
- Not a vendor — *a partner.* (The relationship outlives the transaction.)

### 2.6 Brand at a glance (the one-card summary)

> **Name:** FlowPilot · **Promise:** Keep your business moving. · **Feeling:** Calm, premium, in control. · **Proof:** The site itself. · **Accent:** Chartreuse `#B6FF00`, used sparingly. · **Reaction we want:** "Who built that?"

---

## 3. User Psychology — Second by Second

Design is the management of feeling over time. This section maps the intended emotional state of a first-time visitor from the instant the page begins to load to the moment they leave, and names the mechanism responsible for each shift. Nothing in the experience is accidental; every beat has an author.

### 3.1 The emotional targets

Across the whole journey we are engineering for seven feelings, in roughly this order of appearance:

1. **Intrigue** — "…what is this?" Curiosity, not confusion. The distinction is everything: intrigue pulls forward; confusion pushes away.
2. **Alive** — the surface responds to me; this thing is awake.
3. **"Holy sh*t"** — a genuine involuntary reaction to the craft. Rare, earned, never manufactured.
4. **Premium** — I am in expensive, careful hands.
5. **Reassurance** — this will be easy; these people get it.
6. **Confidence** — I could actually do this; the next step is obvious and small.
7. **Curiosity rewarded** — the attentive visitor discovers hidden details and feels in on something.

The through-line: **intrigue → understanding → mounting respect.** We never trade comprehension for spectacle. A visitor who is dazzled but lost has been failed.

### 3.2 The second-by-second map

**0.0s — Black.** The screen is near-black (`#050505`). Before anything is read, a mood is set: serious, premium, calm. The absence of clutter is the first message.

**0.2–1.1s — The trail draws.** A thin chartreuse flight-trail draws across the screen, the aircraft riding its leading edge, then hints downward. *Feeling: intrigue.* The visitor doesn't yet know what FlowPilot does, but they know this was made by someone who cares. Crucially the sequence is < 2 seconds and never blocks comprehension — it is a curtain-raise, not a gate.

**1.2–2.0s — The headline rises.** `KEEP YOUR BUSINESS MOVING.` ascends line by line, the last word in chartreuse. *Feeling: understanding begins.* The metaphor lands. Momentum. Movement. This is about *my* business.

**2.0–4.0s — The promise resolves.** The supporting sentence fades in: professional websites and digital tools that help small businesses earn trust, attract customers and stay organised online. *Feeling: comprehension complete.* Within four seconds the visitor knows what this is and who it's for. Intrigue has paid out as clarity — the contract of the hero is fulfilled.

**4.0–6.0s — The invitation.** Two calm calls to action (View packages / See how it works) and a quiet line of reassurance: *No lengthy meetings. No jargon. Everything can begin by email.* *Feeling: reassurance.* The pressure a visitor braces for on a "sales" site never arrives. Their guard lowers.

**6s+ — The surface proves itself alive.** The cursor is trailed by a soft light; buttons lean toward the pointer; particles drift and part around the cursor; a scroll cue breathes. *Feeling: alive, premium.* Every micro-response says *this is awake, this is expensive, this is in control.*

**On first scroll — the honest bit.** The tone deliberately softens and grounds: *Running a business is hard enough. Your online presence shouldn't be.* *Feeling: seen.* We name the visitor's reality before we ask anything of them. Empathy precedes the pitch.

**Packages — clarity, not pressure.** Three options, the middle one quietly dominant. No prices shouting; a calm "Get a quote." *Feeling: confidence.* The visitor can reason about their choice without feeling sold to.

**Process — momentum made visible.** As they scroll, the flight-trail draws and the aircraft flies down the timeline. *Feeling: "holy sh*t," then reassurance.* The signature moment of craft, immediately in service of a reassuring message: three steps, that's it.

**Why we started / Principles — values.** Pure typography and light. *Feeling: alignment.* The visitor decides these are their kind of people.

**FAQ — objections dissolved.** The remaining worries answered plainly, one smooth interaction at a time. *Feeling: nothing left to fear.*

**Final CTA — the calm close.** *Tell us about your business. We'll take it from here.* *Feeling: inevitability.* The next step feels small, safe and obvious. No countdown, no "limited spots," no manufactured urgency — the confidence of a brand that doesn't need tricks.

**Leaving the contact page.** Whether or not they submit, the last feeling is *that was easy, and these people clearly care.* If they discover — via the footer's idle aircraft, or simply by reflecting — that FlowPilot built this for itself, the experience converts from marketing into proof.

### 3.3 The psychology rules

- **Curiosity, never confusion.** If a visitor ever thinks "I don't understand," we have failed, no matter how beautiful the moment.
- **Empathy before pitch.** We name the visitor's problem before proposing ourselves.
- **Never manufacture urgency.** No countdowns, fake scarcity, or pressure. Calm confidence is more persuasive and on-brand.
- **Reward attention.** Hidden details exist for the people who look closely. They are gifts, never requirements.
- **Motion is reassurance, not entertainment.** Every animation should lower a visitor's anxiety or increase their comprehension. If it does neither, it is cut.
- **The exit matters as much as the entrance.** The final feeling — ease and care — is the one they carry into their decision.

---

## 4. Design Language

The visual system is defined once, in `tailwind.config.ts` and `app/globals.css`, and consumed everywhere through tokens. No component invents its own colour, spacing or shadow. This is what makes the site feel like one object rather than a collection of pages.

### 4.1 Colour

The palette is small on purpose. A restrained palette reads as premium; a large one reads as uncertain. There are three families: **near-blacks** (surfaces), **greys** (text and lines), and **one accent** (chartreuse).

| Token | Value | Role |
|---|---|---|
| `base` | `#050505` | Page background. The stage. Almost-black, never pure `#000` (pure black feels cheap and harsh against glow). |
| `surface` | `#0B0B0B` | Raised surfaces — footer, secondary sections. |
| `card` | `#111111` | Cards, the featured package, the support panel. |
| `line` | `rgba(255,255,255,0.08)` | Every border and hairline. Subtle by design. |
| `ink` (DEFAULT) | `#FFFFFF` | Primary text and headings. |
| `ink.secondary` | `#B3B3B3` | Body copy, supporting text. |
| `ink.muted` | `#8A8A8A` | Labels, captions, metadata. (Chosen to pass AA ≥4.5:1 on every surface, including the `#0B0B0B` footer.) |
| `chartreuse` (DEFAULT) | `#B6FF00` | The accent. Used sparingly and intentionally. |
| `chartreuse.soft` | `#C7FF3D` | Hover state for accent fills. |
| `chartreuse.dim` | `#8FCC00` | Pressed / lower-emphasis accent. |
| glow | `rgba(182,255,0,0.45)` | The chartreuse glow used in shadows and blurs. |

**The chartreuse doctrine.** The accent is a scalpel, not a paintbrush. It appears on: the primary button, one word of the hero headline, the eyebrow dot, focus rings, the aircraft, the flight-trail, active-state highlights, and small "alive" glints. It must never become a wash or a background. A screen should typically show chartreuse on **less than ~5% of its pixels**. When in doubt, use less. The green must feel *expensive*, not loud — its power comes entirely from scarcity against the dark.

**Contrast commitments** (WCAG 2.1 AA):

- `ink` `#FFFFFF` on `base` `#050505` → ratio ≈ 20:1. Far beyond AA.
- `ink.secondary` `#B3B3B3` on `base` → ratio ≈ 11:1. Passes AA for all text sizes.
- `ink.muted` `#8A8A8A` on `base` → ratio ≈ 5.9:1, and ≈ 5.7:1 on the lighter `#0B0B0B` footer. Passes AA for normal text on every surface. (Originally `#6E6E6E`; lifted after QA found it failed AA on the footer.)
- `base` `#050505` **on** `chartreuse` `#B6FF00` (dark text on the accent button) → ratio ≈ 16:1. This is why the primary button uses near-black text on chartreuse, never white.
- Chartreuse text on dark is used only at large sizes / short strings (one hero word, labels), where AA large-text thresholds are comfortably met.

### 4.2 Typography

Two families, loaded via `next/font/google` (self-hosted, zero layout shift, no third-party request at runtime).

- **Display — Space Grotesk.** Weights 500 / 600 / 700. Exposed as `--font-space-grotesk`, Tailwind `font-display`. Used for all headings and anything that should feel engineered and confident. Its slightly technical character reinforces "precision."
- **Body — Inter.** Exposed as `--font-inter`, Tailwind `font-sans`. Used for all running text, labels, UI. Chosen for its exceptional screen legibility at small sizes — a direct expression of "respect the reader."

**The display scale** (fluid, clamps so it's cinematic on desktop and still dramatic on mobile):

| Token | `clamp()` | Line height | Tracking | Use |
|---|---|---|---|---|
| `display-lg` | `clamp(3rem, 11vw, 8.5rem)` | `0.92` | `-0.04em` | The hero headline only. |
| `display` | `clamp(2.75rem, 7vw, 4.5rem)` | `1.0` | `-0.03em` | Page `<h1>`s, final CTA. |
| `display-sm` | `clamp(2rem, 4vw, 2.75rem)` | `1.05` | `-0.02em` | Section `<h2>`s. |

**Typographic rules:**

- Headings are **tight** — negative tracking and sub-1.0 line-height at the largest sizes create the confident, compressed feel. Body is **relaxed** — `leading-relaxed` (~1.625) for comfortable reading.
- `text-wrap: balance` on headings; `text-wrap: pretty` on paragraphs. Ragged, ugly line breaks are a defect.
- The hero headline is `uppercase`; all other headings are sentence case. Uppercase is reserved for the single most dramatic moment and for `overline`/`eyebrow` labels (with wide `0.2em`–`0.25em` tracking).
- Never centre long-form body copy. Centre only short headings, ledes and CTAs.
- Body copy measure is capped at `prose` = `44rem` for readability.

### 4.3 Spacing & rhythm

Spacing uses Tailwind's 4px base scale, but sections follow a deliberate vertical rhythm so the page breathes consistently.

- **Section padding:** `.section` = `py-24 sm:py-28 lg:py-36` (96 / 112 / 144px). Generous vertical space is the single biggest contributor to the "premium" feel. When unsure, add space.
- **Container:** `.shell` = centred, `max-w-content` (`75rem` / 1200px), padding `px-5 sm:px-6 lg:px-8`.
- **Intra-section rhythm:** heading → body gap `mt-5`/`mt-6`; body → CTA gap `mt-8`/`mt-9`; grid gaps `gap-6 lg:gap-8`.
- **The whitespace rule:** whitespace is not empty space, it is confidence made visible. It is never "filled" to reduce scrolling. Scrolling is free; crowding is expensive.

### 4.4 Grid & layout

- **Primary grid:** a 12-column mental model, expressed with Tailwind `lg:grid-cols-12` and explicit column spans for editorial asymmetry (e.g. a heading on `lg:col-span-4`, content on `lg:col-span-8`). Asymmetry reads as designed; perfect symmetry reads as templated.
- **Max content width:** `75rem`. On ultra-wide screens the content does not stretch edge to edge; it stays centred within the shell, framed by the dark. (See §11.)
- **Card grids:** packages and principles use `lg:grid-cols-3` / `sm:grid-cols-2` with equal-height items (`items-stretch`).
- **The technical grid backdrop:** a faint dotted/line grid (`bg-grid`, `64px` cells) drifts with scroll behind hero and page headers, radially masked so it fades at the edges. It signals "engineered" without ever competing with content. Opacity stays ≤ ~4%.

### 4.5 Borders & radius

- **Borders** are always `line` (`rgba(255,255,255,0.08)`) — a whisper, not a rule. On hover, interactive surfaces lift their border to `rgba(255,255,255,0.15)`. Borders define space; they never decorate.
- **Radius scale:** buttons and pills are fully rounded (`rounded-full`); inputs and small cards use `rounded-xl` (0.875rem); large cards and panels use `rounded-2xl` / `rounded-3xl` (1.25–1.75rem). Rounding is generous and consistent — sharp corners are reserved for nothing; everything is softened, which reads as calm and modern.

### 4.6 Shadows & glow

Shadows on a dark theme are subtle; the *glow* does the emotional work.

| Token | Definition | Use |
|---|---|---|
| `shadow-card` | inset top highlight + deep soft drop (`0 30px 60px -30px rgba(0,0,0,0.9)`) | Cards and panels — creates depth without a visible edge. |
| `shadow-glow` | `0 0 0 1px rgba(182,255,0,0.25), 0 0 40px -8px rgba(182,255,0,0.45)` | The accent glow — featured package, focus, key hovers. |
| `shadow-glow-lg` | larger-radius variant | The featured package resting state, hero moments. |

**Glow rules:** glow is chartreuse and always soft (large blur, low opacity). It implies energy and focus. It appears on hover, focus, the featured package, and the aircraft/trail. It never outlines an entire section. Like the accent colour, its power is its restraint.

### 4.7 Glass effects

Glass (frosted translucency) is used sparingly for layered surfaces — primarily the scrolled navigation bar and select overlays.

- **Recipe (`.glass`):** `background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))`, `backdrop-filter: blur(12px)`, `border: 1px solid line`.
- The scrolled nav uses `bg-base/70` + `backdrop-blur-xl` so content passing beneath is legible but present.
- Glass is never stacked (glass-on-glass muddies) and always sits over content, never over the bare background (there'd be nothing to frost).

### 4.8 Iconography

- **Style:** line icons, `1.5–1.6` stroke, `currentColor`, drawn on a `24×24` viewBox, rounded caps/joins. They match the calm, precise tone. No filled, no duotone, no emoji in product surfaces.
- **Delivery:** inline SVG React components (crisp at any size, themeable via `currentColor`, no icon-font payload, no layout shift).
- **The aircraft** is the one hero-weight, filled mark — deliberately distinct from the utility line icons because it carries brand meaning, not just labelling. It is defined once (`components/effects/Aircraft.tsx`) and reused as logo, trail-head, timeline traveller, footer easter-egg and favicon.
- **Icon tiles:** utility icons sit in `rounded-xl` tiles with a `line` border and chartreuse glyph, on `base`, giving a consistent "control panel" motif.

### 4.9 Imagery — the no-photography rule

FlowPilot uses **no stock photography** — no people, no offices, no handshakes, no team portraits. This is a strategic, not merely aesthetic, decision: stock imagery is the visual language of the generic agencies we define ourselves against, and it would undercut "the website is the proof."

Instead, meaning is carried by **typography, motion, light, composition and the aircraft.** Where a "product shot" is needed, we render an *abstract, on-brand representation* (e.g. a stylised browser frame built from divs, never a screenshot of a real site). If real client imagery is ever introduced in future (e.g. a portfolio), it must be genuine, high-quality, consistent in grade (dark, low-key, chartreuse-adjacent), and never decorative filler.

### 4.10 The design-language summary card

> **Surfaces:** `#050505 / #0B0B0B / #111111`. **Lines:** white @ 8%. **Text:** white / `#B3B3B3` / `#8A8A8A`. **Accent:** chartreuse `#B6FF00`, < 5% of pixels. **Type:** Space Grotesk (display, tight) + Inter (body, relaxed). **Radius:** pills + `xl`/`2xl`/`3xl`. **Depth:** soft dark shadow + chartreuse glow. **Space:** generous; whitespace is confidence. **Imagery:** none — motion and type are the images.

---

## 5. Motion System

Motion is FlowPilot's most distinctive brand asset. It is also the easiest thing to get wrong. The governing idea: **motion as branding, never motion as decoration.** Every movement communicates precision and calm control. Nothing is random; everything is intentional; everything can be justified in one sentence ("this animation reduces anxiety / increases comprehension / expresses momentum"). If a movement can't be justified that way, it is removed.

### 5.1 Motion principles

1. **Purposeful.** Each animation earns its place by guiding attention, communicating state, or expressing the brand's momentum.
2. **Choreographed, not busy.** Elements enter in considered sequence (stagger), not all at once and not randomly. The eye is led.
3. **Physical and gentle.** Easing mimics real deceleration. We favour "arrive softly" curves over linear or bouncy ones. The brand is calm; the motion is calm.
4. **Fast enough to feel responsive, slow enough to feel considered.** Micro-interactions 150–250ms; reveals 600–900ms; the hero sequence < 2s total.
5. **60fps or it doesn't ship.** Only GPU-accelerated properties (`transform`, `opacity`, `filter`). Never animate `width`, `height`, `top`, `left`, `margin` in a way that triggers layout.
6. **Respectful.** Every non-essential motion is suppressed under `prefers-reduced-motion`. The site remains fully usable — and still elegant — with all motion off.
7. **Momentum is the throughline.** Wherever it fits, motion moves *forward* (rightward, downward, into the page), echoing "keep your business moving."

### 5.2 Motion tokens

Defined once, reused everywhere (`lib/motion.ts`, `tailwind.config.ts`):

| Token | Value | Meaning |
|---|---|---|
| `EASE_GENTLE` | `cubic-bezier(0.22, 1, 0.36, 1)` | The house easing. "Arrive softly." Used for ~90% of motion. |
| `EASE_SWIFT` | `cubic-bezier(0.4, 0, 0.2, 1)` | Snappier standard easing for small UI state changes. |
| `spring` | `stiffness 200, damping 26, mass 0.9` | Magnetic buttons, pointer-following elements. |
| Reveal duration | `0.7s` | Scroll-in fade/rise. |
| Reveal distance | `22px` (`y`) | How far elements rise as they fade in. |
| Stagger | `0.09s` child, `0.05s` initial delay | Sequencing grouped children. |
| Micro-interaction | `150–250ms` | Hovers, presses, toggles. |
| Ambient loops | `4s` (`pulse-glow`), `6s` (`float`) | Slow, barely-there life. |

**Named variants** (Framer Motion, in `lib/motion.ts`): `fadeUp`, `fadeIn`, `stagger`, `scaleIn`. Components consume these rather than hand-authoring transitions, which keeps motion consistent across the whole site.

### 5.3 Animation technology — when to use each

The stack is **Framer Motion + CSS + Canvas.** GSAP is deliberately *not* used. The decision rule:

| Technique | Use it for | Why |
|---|---|---|
| **CSS transitions** | Hover/focus/press state changes, colour and border shifts, simple transforms. | Cheapest possible; runs on the compositor; no JS. The default for anything a `:hover` can express. |
| **CSS keyframes** | Ambient, infinite, self-contained loops (`pulse-glow`, `float`, scroll-cue bob). | No JS needed for looping ambience; trivially GPU-friendly. |
| **Framer Motion** | Orchestration (stagger), scroll-linked motion (`useScroll`/`useTransform`), gesture/pointer springs, enter/exit of conditional UI (`AnimatePresence`), shared-layout transitions (`layoutId`). | Declarative, React-native, handles the hard parts (exit animations, scroll progress, spring physics) correctly and accessibly. `MotionConfig reducedMotion="user"` gives global reduced-motion for free. |
| **Canvas 2D** | The particle field (many cheap elements). | Hundreds of particles as DOM nodes would be ruinous; one canvas is cheap and pausable. |
| **~~GSAP~~** | *Not used.* | Framer Motion covers every need here without a second animation runtime and its bundle. **When GSAP would be reconsidered:** only if a future surface needs complex, timeline-scrubbed, frame-accurate sequencing beyond Framer's comfort (e.g. an interactive product explainer). It would then be code-split and loaded only on that route — never in the global bundle. |

**Rule of escalation:** reach for the cheapest tool that does the job. Try CSS first. Use Framer when you need orchestration, scroll-binding, exit animation or springs. Use Canvas only for many-element fields. Never add a new animation dependency to solve a problem the current stack already solves.

### 5.4 The signature sequences

These are the choreographed set-pieces. They are the brand's motion "greatest hits" and must be protected in any refactor.

**(a) The hero load sequence** (`components/home/Hero.tsx` → `Intro`).
Runs once per browser session (guarded by `sessionStorage['fp-intro']`; skipped entirely under reduced motion). Timeline:
1. `0.15s` a chartreuse horizontal trail scales in from the left (`scaleX 0→1`, `EASE_GENTLE`, 0.85s), glowing.
2. The aircraft rides its leading edge (`left 0→100%`, appearing at ~75% of travel).
3. At `~1.0s` a vertical trail draws downward from the trail's end and fades — "the journey continues down the page."
4. At `~1.85s` the overlay fades out (0.6s) revealing the hero, and the headline lines rise (`y 110%→0`, staggered 0.12s), supporting copy and CTAs following.
Total on-screen time < 2s. It is a curtain-raise, never a loading gate — the page is fully rendered beneath it.

**(b) The flight-trail timeline** (`components/home/Process.tsx`, `components/how/Journey.tsx`).
The signature scroll interaction. As the section scrolls through the viewport, `useScroll` (offset `["start 70%", "end 65%"]`) drives a spring-smoothed progress value that: (i) grows the chartreuse trail down the spine (`scaleY`), and (ii) flies the aircraft down the leading edge (`top 0→100%`), rotated `135°` to point downward, glowing. Step cards fade/rise in as they arrive. This is the "holy sh*t" moment — and it lands on a reassuring message ("three steps, that's it").

**(c) The cursor system** (`components/effects/CursorGlow.tsx`).
A soft chartreuse light lerps toward the pointer (`0.12` easing per frame) and publishes `--cursor-x/y` CSS variables so any `.spotlight` surface can react. Desktop / fine-pointer only; removed entirely on touch and reduced motion.

**(d) The particle field** (`components/effects/ParticleField.tsx`).
A calm "mission-control dust" of ≤140 canvas particles drifting slowly, gently repelled within 120px of the cursor. Pauses via `IntersectionObserver` when offscreen; renders nothing under reduced motion; density is tunable per placement (hero, final CTA).

**(e) The idle aircraft** (`components/layout/Footer.tsx`).
After 7s of no interaction (`useIdle`), a small aircraft drifts across the footer once and fades — a reward for the patient, and a final brand grace note.

### 5.5 The aircraft as motion language

The aircraft is a functional element of the interface, not an ornament. Its jobs:

- **Lead the eye** between and into sections (hero trail).
- **Express progression** (flies down the process/journey timelines as you advance).
- **Mark the brand** (logo, favicon).
- **Reward attention** (footer idle fly-through).

**Restraint rule:** the aircraft appears at most once per "moment." It is never multiplied for decoration, never spun gratuitously, never used as a bullet or a loader spinner without meaning. Overuse would turn a brand signature into a gimmick — the fastest way to cheapen the whole system.

### 5.6 What we will not do

No parallax that induces motion sickness. No auto-playing carousels. No scroll-jacking (the user always controls the scroll; we only *respond* to it). No entrance animations that delay content readability. No bouncy/elastic easing (off-brand). No animation that runs forever in the user's peripheral vision loudly. No motion that can't be justified in one sentence.

---

## 6. Micro-interaction Catalogue

Micro-interactions are where "alive" and "premium" are actually delivered. Each is small; together they are the difference between a static page and a living product. Every one below is implemented or specified; all respect reduced motion.

| # | Interaction | Behaviour | Where |
|---|---|---|---|
| 1 | **Magnetic buttons** | Button leans toward the cursor within its bounds (spring, strength ~0.25), returning home on exit. | All primary/secondary buttons (`useMagnetic`). |
| 2 | **Button glow** | Primary buttons bloom a soft chartreuse glow on hover. | `Button` primary variant. |
| 3 | **Cursor glow** | Soft light trails the pointer across the whole page. | Global (`CursorGlow`). |
| 4 | **Cursor-aware spotlight** | `.spotlight` surfaces reveal a faint radial highlight positioned at the cursor. | FAQ rows, select cards. |
| 5 | **Particle repulsion** | Particles gently part around the cursor. | Hero, final CTA. |
| 6 | **Nav active pill** | The active link's pill slides between items via shared-layout (`layoutId`). | `Nav`. |
| 7 | **Nav scroll state** | Header transitions from transparent to frosted glass after 12px of scroll. | `Nav`. |
| 8 | **Animated menu icon** | Hamburger morphs into an X (the bars rotate/translate). | `Nav` mobile. |
| 9 | **Mobile menu reveal** | Full-screen menu fades in; links stagger in from the left. | `Nav` mobile. |
| 10 | **Scroll reveals** | Content fades and rises 22px as it enters view, once, staggered within groups. | Everywhere (`Reveal`, `SectionHeading`). |
| 11 | **Hero headline rise** | Headline lines rise from a clipped mask, line by line. | `Hero`. |
| 12 | **Flight-trail draw** | Trail grows and aircraft flies as you scroll the timeline. | `Process`, `Journey`. |
| 13 | **Card hover lift** | Cards rise slightly, border brightens, subtle glow appears. | Package cards, principle/step cards. |
| 14 | **Featured border trace** | The recommended package has a gradient chartreuse border and standing glow. | `PackageCard`. |
| 15 | **Principle light-sweep** | A soft chartreuse light sweeps across a principle panel on hover. | `Principles`. |
| 16 | **Accordion expand** | FAQ answers expand with height+opacity; the toggle icon rotates 45° (＋→✕) and turns chartreuse. | `Accordion`. |
| 17 | **Link underline grow** | Text links draw a chartreuse underline from the left on hover. | `.link-underline`. |
| 18 | **Eyebrow dot glow** | The dot before section eyebrows carries a small chartreuse glow. | `.eyebrow`. |
| 19 | **Scroll cue bob** | A scroll indicator gently bobs at the bottom of the hero. | `Hero`. |
| 20 | **Idle aircraft** | A small plane crosses the footer after 7s idle. | `Footer`. |
| 21 | **Focus ring** | A crisp chartreuse ring on any keyboard-focused element. | Global. |
| 22 | **Input focus** | Fields raise their border to chartreuse and add a soft ring on focus. | Forms. |
| 23 | **Logo aircraft nudge** | The logo's aircraft shifts up-right slightly on hover (taking off). | `Nav`, `Footer`. |
| 24 | **Grid drift** | The technical grid backdrop parallax-drifts with scroll. | Hero, page headers. |
| 25 | **Selection colour** | Text selection is chartreuse on near-black — even highlighting text is on-brand. | Global. |

**Micro-interaction rules:** every hoverable thing must acknowledge the pointer within 250ms; every focusable thing must show a visible focus state; nothing may move so far or so fast that it distracts from reading; all of the above degrade to static under reduced motion.

---

## 7. The Complete UX Journey

This section walks the entire experience, surface by surface, so a builder can reconstruct the intended flow and a reviewer can judge each beat. The site is five routes: `/` (Home), `/packages`, `/how-we-work`, `/about`, `/contact`. Every route shares the same shell: fixed navigation, `<main>`, footer, cursor glow, and global reduced-motion config.

### 7.0 The persistent shell

- **Navigation** — fixed top, transparent over heroes, morphing to frosted glass on scroll. Logo (aircraft + wordmark) left; page links centre-right with a sliding active pill; a magnetic "Start a project" CTA right. On mobile it collapses to an animated hamburger opening a full-screen staggered menu.
- **Footer** — brand blurb + email, a Pages column, an Hours column, a legal line, and the idle-aircraft easter egg. The footer repeats the promise ("Built and looked after in the UK") and gives every page a calm, consistent close.
- **Skip link** — the first focusable element; jumps to `#main`.

### 7.1 Home (`/`)

The home page is a sequence of eight "scenes," each with one job. See §3.2 for the second-by-second emotional map; here is the structural intent.

1. **Hero** — the cinematic entrance. Load sequence → `KEEP YOUR BUSINESS MOVING.` → promise → two CTAs → reassurance line → "trusted by local businesses" audience row → breathing scroll cue. Backdrop: grid drift + particle field + radial chartreuse fade. *Job: intrigue → comprehension → invitation.*
2. **The Problem** — "Running a business is hard enough. / Your online presence shouldn't be." with the three "no's" (no lengthy meetings, no jargon, no unnecessary sales calls). Calmer, grounded, empathetic. *Job: be seen.*
3. **Package reveal** — three glass cards, the middle ("Professional") visually dominant with badge, gradient border and glow. No prices; a calm "Get a quote." A link to compare in full. *Job: confidence without pressure.*
4. **Process** — the flight-trail timeline. "Three steps. That's it." with the aircraft flying down the spine as you scroll. *Job: the craft moment, in service of reassurance.*
5. **Why we started** — a large typographic statement of mission, "wasted time" accented, over a soft glow. *Job: alignment of values.*
6. **Principles** — the four commitments as interactive panels with a hover light-sweep. *Job: "these are my kind of people."*
7. **FAQ** — the six real objections, answered plainly in a smooth accordion. *Job: dissolve remaining fear.*
8. **Final CTA** — "Tell us about your business. / We'll take it from here." over particles. *Job: the calm, inevitable close.*

Home also emits `Organization`/`ProfessionalService` and `FAQPage` structured data (see §14).

### 7.2 Packages (`/packages`)

1. **Page header** — eyebrow "Website packages," `Straightforward packages.`, a reassuring lede.
2. **The three cards** — full `PackageCard`s (tagline, description, feature list, "Get a quote"), the middle featured. A note: *every website is quoted individually — a clear, fixed price with no surprises.*
3. **Comparison table** — "Everything, side by side." A feature matrix across the three tiers, the Professional column highlighted top-to-bottom (its own dark column that carries the "Recommended" badge and a "Get a quote" button at the foot). Checks are chartreuse; absent features are a muted dash; string values (e.g. "Up to 7 pages") render as text. Horizontally scrollable on small screens.
4. **Optional extras** — a two-column list of add-ons (extra pages, copywriting, logo & brand basics, photography, email setup, online store), each a bullet + name + description. No prices — everything is quoted.
5. **Monthly Business Support Plan** (`#support`) — a dark, glowing panel: what ongoing care includes, "no long contracts," with a "Get a quote" and a link back to How We Work. This is where the long-term-relationship principle is made concrete.
6. **Final CTA** — "Not sure which package fits?" — recommending, not selling.

### 7.3 How We Work (`/how-we-work`)

1. **Page header** — "A simple process, start to finish," promising no meetings, no jargon, no surprises.
2. **Three promises** — quick reassurance cards (mostly by email / clear timelines / no surprises).
3. **The journey timeline** — the seven real steps (discovery → quote → payment → intake form → build → launch → ongoing support) on the scroll-driven flight-trail, alternating left/right on desktop, single-spine on mobile, with the aircraft flying the full length. This is the emotional twin of the home Process scene, expanded.
4. **After launch** — "We don't disappear after launch," with the aftercare list and links to ongoing support / start a conversation. Reinforces the partnership.
5. **Final CTA.**

### 7.4 About (`/about`)

1. **Page header** — "Built for small businesses. On purpose."
2. **Mission** — the founding belief (small businesses deserve professional tools without expensive agencies, confusing processes or wasted time) and the origin story, told through pure typography — no founder portrait, no stock imagery, per §4.9.
3. **Principles** — the same four-panel component reused (one component, one truth).
4. **Who we help** — the audience set as calm pills (trades, groomers, salons, beauticians, restaurants, accountants, solicitors, consultants, local services).
5. **The promise** — the "if we care this much about our own website…" line, over a glow.
6. **Final CTA.**

### 7.5 Contact (`/contact`)

1. **Page header** — "Tell us about your business," reiterating: send a few details or email directly, no scheduling software, no obligation.
2. **Details column** — email card, a "typical reply time — within one working day" card, and a business-hours card (with "Saturday: by email," reinforcing the email-first ethos). No phone number by design.
3. **Form column** — a calm card: name, email, business name, optional phone, message. Only what's needed. Native + graceful validation; a friendly success state; and a resilient fallback (if no form endpoint is configured, it opens the visitor's email client pre-filled). "Prefer email?" always offers the direct address.
4. **Reassurance strip** — no pressure / quick to reply / here for the long run.

### 7.6 Error, empty and edge states

- **404 (`not-found`)** — must match the system: dark, an aircraft "off course" motif, a calm line ("This page has drifted off course."), and a single button home. Never a default Next.js error page.
- **Form states** — idle, focus, invalid (inline, native-first), submitting (button reads "Sending…," disabled), success (chartreuse confirmation), failure (graceful message pointing to the email address). No dead ends.
- **JS disabled** — content is fully readable (server-rendered); reveals are visible (no permanent hidden state); links and the form still work.
- **Slow connection** — fonts `swap` (text is never invisible); the hero sequence never blocks content; nothing depends on an animation completing.

---

## 8. Component Library

Every reusable piece is a typed React component with a single responsibility, consuming design and motion tokens rather than hard-coded values. This is the catalogue. "Client" marks components that use hooks/Framer and carry `"use client"`; everything else is a server component by default.

### 8.1 Primitives (`components/ui/`)

**`Button`** (client). The one button. Props: `variant` (`primary` | `secondary` | `ghost`), `size` (`md` | `lg`), `href?` (renders a Next `Link`) or `onClick`/`type` (renders a `<button>`), `magnetic` (default true), `className`.
States: rest, hover (colour shift; primary blooms glow), focus-visible (chartreuse ring), active, disabled. Behaviour: magnetic pull toward the cursor (spring), disabled on touch/reduced-motion. Primary = chartreuse fill + near-black text; secondary = hairline glass; ghost = text-only.

**`Reveal`** (client). Scroll-in wrapper. Props: `index` (stagger delay), `variants` (default `fadeUp`), `as`, `once` (default true), `amount`. Wrap anything that should fade/rise into view.

**`SectionHeading`** (client). Standard section header: `eyebrow`, `title`, `lede`, `align` (`center` | `left`). Staggers its parts in. Guarantees consistent section typography and rhythm.

**`PageHeader`** (client). Inner-page hero: eyebrow + `display` `<h1>` + lede over a drifting grid and radial fade. Animates in on mount (not scroll).

**`PackageCard`** (client). A single package: name, tagline, description, feature list with chartreuse checks, and a "Get a quote" button. The featured variant gets a gradient chartreuse border, standing glow, and vertical emphasis (`lg:-my-4`). Non-featured cards lift and glow on hover. Consumes a `Package` from `lib/content.ts`. No price is rendered (by product decision).

**`Accordion`** (client). FAQ list. One item open at a time; smooth height+opacity expand via `AnimatePresence`; ＋→✕ toggle that rotates and turns chartreuse; rows are `.spotlight` (cursor-aware). Fully keyboard-operable with `aria-expanded`.

**`FinalCTA`** (client). The closing band, reused across pages. Props: `heading`, `sub`. Particle field + chartreuse bloom + two CTAs + "prefer email?" line.

**`Providers`** (client). Wraps the app in Framer's `MotionConfig reducedMotion="user"` so *all* motion honours the OS setting globally.

### 8.2 Effects (`components/effects/`)

**`Aircraft`** — the brand mark as inline SVG (`currentColor`, optional `title` for accessible/labelled uses). One definition, many placements.
**`CursorGlow`** (client) — global pointer light + `--cursor-x/y` publisher; fine-pointer only.
**`ParticleField`** (client) — canvas dust field; props `density`, `interactive`; `IntersectionObserver`-paused; reduced-motion aware.
**`GridBackdrop`** (client) — scroll-parallax technical grid; props `travel`, `fade`.

### 8.3 Layout (`components/layout/`)

**`Nav`** (client) — fixed, scroll-aware, magnetic CTA, sliding active pill (`layoutId`), animated mobile menu, body-scroll lock when open, closes on route change.
**`Footer`** (client) — brand, sitemap, hours, legal, idle-aircraft easter egg.

### 8.4 Section components

Grouped by route: `components/home/*` (Hero, Problem, Packages, Process, WhyWeStarted, Principles, FAQ), `components/how/Journey`, `components/pricing/PricingBoard`, `components/contact/ContactForm`. Section components compose primitives and effects; they hold layout and copy wiring, not design decisions.

### 8.5 The component contract

Every component must: (1) do exactly one thing; (2) take its content via props or from `lib/content.ts`, never hard-code copy that belongs to content; (3) use tokens, never literal hex/px for themed values; (4) be keyboard-accessible and reduced-motion-safe; (5) be responsive by default; (6) render meaningfully on the server where it carries content (SEO). New components are added only when an existing one can't be composed to fit.

---

## 9. Folder Structure

The structure is conventional Next.js App Router, organised so that **content, design, motion and components are each findable in one place.** This is exactly how the site is built and how it should be extended.

```text
flowpilot/
├─ app/                         # App Router: routes, layout, metadata
│  ├─ layout.tsx                # Root shell: fonts, metadata, Providers, Nav, Footer, CursorGlow
│  ├─ globals.css               # Design system: @layer base/components/utilities, tokens
│  ├─ page.tsx                  # Home (composes home sections + JSON-LD)
│  ├─ packages/page.tsx         # Packages
│  ├─ how-we-work/page.tsx      # How We Work
│  ├─ about/page.tsx            # About
│  ├─ contact/page.tsx          # Contact
│  ├─ sitemap.ts                # Generated sitemap.xml
│  └─ robots.ts                 # Generated robots.txt
├─ components/
│  ├─ ui/                       # Reusable primitives (Button, Reveal, PackageCard, Accordion, …)
│  ├─ effects/                  # Aircraft, CursorGlow, ParticleField, GridBackdrop
│  ├─ layout/                   # Nav, Footer
│  ├─ home/                     # Home-page scenes
│  ├─ how/                      # Journey timeline
│  ├─ pricing/                  # PricingBoard
│  ├─ contact/                  # ContactForm
│  └─ Providers.tsx             # Global MotionConfig
├─ lib/
│  ├─ content.ts                # SINGLE SOURCE OF TRUTH for all copy & data
│  ├─ motion.ts                 # Easings, springs, Framer variants
│  └─ hooks.ts                  # usePrefersReducedMotion, useMagnetic, useIdle
├─ public/                      # favicon.svg and future static assets
├─ docs/                        # This specification and future docs
├─ legacy-eleventy/             # Archived first build (reference only; excluded from TS/build)
├─ tailwind.config.ts           # Design tokens (colour, type, spacing, shadow, keyframes)
├─ next.config.mjs
├─ tsconfig.json                # Path alias @/* → project root
└─ package.json
```

**Placement rules:** a route goes in `app/<route>/page.tsx` (server component, exports `metadata`). Reusable UI goes in `components/ui`. Anything visual-only goes in `components/effects`. Page-specific composition goes in `components/<route>`. **All copy and structured data go in `lib/content.ts`** — never inline in a component. Shared motion goes in `lib/motion.ts`; shared behaviour in `lib/hooks.ts`.

---

## 10. Code Standards

The code is a product surface too. It should read as calm and considered as the site.

### 10.1 Language & framework

- **TypeScript, strict.** No `any` unless genuinely unavoidable and commented. Content shapes are typed (`Package`, `CompareValue`, etc.).
- **Next.js App Router**, React Server Components by default. `"use client"` only where hooks, state, Framer, or browser APIs require it — and pushed as far down the tree as possible so pages stay server-rendered for SEO and speed.
- **Tailwind** for styling; bespoke CSS only in `globals.css` `@layer` blocks for tokens, base, and reusable component classes (`.shell`, `.section`, `.eyebrow`, `.glass`, `.link-underline`, `.spotlight`, `.noise`, mask helpers).

### 10.2 Naming

- Components `PascalCase` (`PackageCard`). Hooks `useCamelCase`. Utilities/vars `camelCase`. Constants that are true tokens `UPPER_SNAKE` (`EASE_GENTLE`). Files match their default export.
- Semantic, not presentational, names. `ink.secondary`, not `grey2`. `chartreuse`, not `green`. `Process`, not `Section3`.
- Content keys read like English: `packages`, `journey`, `principles`, `faqs`, `audiences`.

### 10.3 Organisation & comments

- One component per file; colocate tightly-coupled sub-components (e.g. `Intro` inside `Hero`).
- Comment the **why**, not the **what**. Good code says what it does; comments explain intent, constraints, or non-obvious decisions ("magnetic pull disabled on touch/reduced-motion," "runs once per session").
- Keep files short and single-purpose. If a component grows past one screen of responsibility, split it.
- Consistent import order: framework → third-party → `@/lib` → `@/components` → relative.

### 10.4 Maintainability principles

- **DRY the truth, not the markup.** Copy lives once (`content.ts`); a duplicated section layout is fine if it aids clarity, but duplicated *facts* are a bug.
- **Tokens over literals.** A raw hex or magic number in a component is a smell; add/consume a token.
- **Accessible and reduced-motion-safe by construction**, not as an afterthought.
- **No dead code, no unused deps.** (The build stays green; `next build` is the gate.)
- **Everything typechecks and builds** before it's considered done. `npm run build` must pass.

### 10.5 Git & deployment

- Small, meaningful commits with imperative messages. `main` is always deployable.
- Hosted on **Vercel**; every push to `main` triggers an automatic production build and deploy. Preview deployments for branches.
- Never run `next build` locally against the same `.next` while `next dev` is running (cache collision).

---

## 11. Responsive Rules

Mobile is a **first-class, cinematic experience**, not a shrunk desktop. The hero still dominates on a phone; the timeline still flies; the type still feels dramatic (the fluid `clamp()` scale guarantees it). Desktop is the *enhanced* experience, not the only one.

### 11.1 Breakpoints (Tailwind defaults)

| Name | Min width | Primary intent |
|---|---|---|
| (base) | 0 | Mobile portrait. The default everything is authored for. |
| `sm` | 640px | Large phones / small tablets. |
| `md` | 768px | Tablets. |
| `lg` | 1024px | Laptops / desktop — nav expands, multi-column grids engage. |
| `xl` | 1280px | Large desktop. |
| `2xl` | 1536px | Very large; content stays capped at `75rem` and centres. |

### 11.2 Per-device intent

- **Mobile (base–`sm`):** single column; nav collapses to the animated full-screen menu; timelines use the left-spine layout; the cursor system and magnetic buttons are inert (touch); tap targets ≥ 44px; generous spacing preserved; no horizontal scroll anywhere except the intentionally-scrollable comparison table. Hero remains full-height and dramatic.
- **Tablet (`md`):** two-column grids begin; still touch-first (cursor effects off). Comfortable reading measures.
- **Desktop (`lg`+):** full navigation; asymmetric 12-column editorial layouts; alternating timeline; the full motion system (cursor glow, magnetism, spotlights) engages for fine pointers.
- **Large monitors (`xl`):** more breathing room, larger display type via `clamp()` — but content never sprawls.
- **Ultra-wide (`2xl`+):** the shell caps at `75rem` and centres, framed by the dark. Backgrounds (grid, glow, particles) may extend full-bleed, but *content* stays measured. We never stretch text lines to 200 characters — readability and composition beat filling the glass.

### 11.3 Responsive rules of thumb

- Author mobile-first; add complexity upward with `sm:`/`lg:` prefixes.
- No fixed pixel widths on content; use `max-w-*`, `%`, `fr`, `clamp()`.
- Every image/media: `max-width: 100%`. Wide elements (tables, code) scroll inside their own `overflow-x-auto` container — the page body never scrolls sideways.
- Test the real breakpoints on real devices, not just the responsive simulator (see §16).
- Fine-pointer-only effects are gated with `(pointer: coarse)` / `(pointer: fine)` and reduced-motion, never assumed by width alone.

---

## 12. Accessibility

Accessibility is not a compliance tax; it is an expression of the brand's core promise — *respect the customer*. A calm, considered experience that excludes people is neither calm nor considered. **Target: WCAG 2.1 AA, minimum.** Lighthouse Accessibility target: **100**.

### 12.1 Commitments

- **Semantic HTML.** One `<h1>` per page; logical heading order; `<nav>`, `<main>`, `<footer>`, `<section>`, lists for lists, `<button>` for actions, `<a>` for navigation. Structure carries meaning before any ARIA is added.
- **Keyboard: everything, in order.** Every interactive element is reachable and operable by keyboard in a logical tab order. The **skip link** is the first focusable element. The mobile menu traps focus while open and restores it on close. No keyboard traps anywhere.
- **Visible focus.** A crisp chartreuse focus ring (`:focus-visible`, `outline` + offset) on every focusable element — never removed, never `outline: none` without a stronger replacement.
- **Reduced motion.** `prefers-reduced-motion: reduce` is honoured three ways: (1) globally via Framer `MotionConfig reducedMotion="user"`; (2) per-effect guards (`usePrefersReducedMotion`) that disable the cursor glow, particles, magnetism and the hero sequence; (3) a CSS override that near-zeroes animation/transition durations. The site remains fully functional and still elegant with motion off.
- **Contrast.** All text meets AA (see §4.1). The accent-on-dark and dark-on-accent pairings are specifically chosen to pass.
- **Labels & names.** Every form field has a real `<label>`; icon-only controls have `aria-label` / `sr-only` text; the accordion uses `aria-expanded`; the nav toggle exposes its state; decorative SVG is `aria-hidden`.
- **Live regions.** The contact form's status message is an `aria-live="polite"` region so success/failure is announced.
- **Touch targets** ≥ 44×44px.
- **Language & direction.** `<html lang="en-GB">`.
- **Content accessibility.** Plain-English copy is itself an accessibility feature (cognitive load). Link text is descriptive ("View packages," not "click here").

### 12.2 How we verify

Automated (Lighthouse/axe) for the measurable 30–40%, then **manual**: full keyboard-only pass of every page and flow; a screen-reader spot-check (VoiceOver/NVDA) of the nav, forms and headings; a reduced-motion pass; a 200% zoom pass (no loss of content/function). Automated tools alone are never treated as sufficient.

---

## 13. Performance

Speed is a feature and a courtesy. A premium feel with a slow load is a contradiction. **Lighthouse targets: Performance 95+, Best Practices 100, SEO 95+, Accessibility 100** — with the full motion system intact. Motion never buys itself with jank.

### 13.1 Rendering & delivery

- **Static-first.** Every route is statically pre-rendered at build (Next.js App Router, `○ (Static)`). HTML arrives complete; JS hydrates the interactivity. First-load JS is kept lean (~140–150kB for a Framer-Motion-rich site) and shared chunks are cached across routes.
- **Server components by default.** `"use client"` is pushed to the leaves, so content ships as HTML, not JS.
- **Compression** (gzip/brotli via Vercel) and long-lived immutable caching of hashed static assets are on by default on the platform.

### 13.2 Fonts

- Self-hosted via `next/font/google` (Space Grotesk + Inter) — no runtime third-party request, automatic `font-display: swap`, and **zero layout shift** (Next reserves metrics). Only the weights actually used are shipped.

### 13.3 Animation budget

- Only compositor-friendly properties (`transform`, `opacity`, `filter`). No layout-triggering animation.
- The particle canvas caps particle count (≤140), throttles work to `requestAnimationFrame`, and **pauses via `IntersectionObserver`** when offscreen. Cursor/magnetism use rAF-batched updates.
- Ambient loops are few, slow and cheap. Scroll-linked motion uses springs on a single progress value, not per-frame layout reads.
- **Reduced motion halves the work** by disabling the heaviest effects entirely.

### 13.4 Images & media

- Current build ships **no raster imagery** (per §4.9) — a major performance advantage. The favicon is a tiny SVG.
- **When images arrive** (future portfolio, OG images): use `next/image` (responsive `srcset`, lazy-loading below the fold, modern formats AVIF/WebP, explicit dimensions to prevent CLS). Above-the-fold hero media (if ever) is `priority`. Everything else lazy-loads.

### 13.5 Loading strategy

- Critical CSS inlined by the framework; the rest is a small hashed stylesheet.
- Non-critical/below-fold interactive components can be `next/dynamic` where it helps, without harming the reveal choreography.
- Third-party scripts (analytics) load via `next/script` with `afterInteractive` (or a lightweight, cookieless analytics provider) so they never block first paint.

### 13.6 Core Web Vitals intent

- **LCP** < 2.5s — the hero headline is HTML/`next/font` text, not an image, so it paints fast; the intro overlay never gates it.
- **CLS** ≈ 0 — fonts reserve metrics; no injected layout; media has dimensions.
- **INP** low — interactions are rAF-batched and cheap; no long tasks blocking input.

---

## 14. SEO & Structured Data

The site should be as legible to machines as to people. **Lighthouse SEO target: 95+.**

### 14.1 Metadata

- **Per-route** `title` + `description` via the App Router `metadata` export, with a global title template (`%s — FlowPilot`) and sensible defaults from `lib/content.ts`. Titles are specific ("Packages — FlowPilot"), descriptions are human and benefit-led, ~150–160 chars.
- **`metadataBase`** set to the production origin so all relative URLs resolve.
- **Canonical URLs** per route (self-referential), so `www`/apex/trailing-slash variants never fragment ranking. (Note: keep the site's canonical host consistent with the host chosen as primary at the CDN — see launch checklist.)
- **Keywords / author / applicationName** set globally; `robots: index, follow`.
- **Viewport & theme:** `themeColor #050505`, `colorScheme: dark`.

### 14.2 Open Graph & Twitter

- `openGraph` (type `website`, `en_GB` locale, site name, per-page title/description, URL) and `twitter` (`summary_large_image`) on every route.
- **OG image** (to add before/at launch): a 1200×630 on-brand card — near-black, wordmark + aircraft + chartreuse trail — served from the app so shared links look designed, not default. This is a named launch task.

### 14.3 Structured data (JSON-LD)

- **`ProfessionalService` / `Organization`** on the home page: name, description, URL, email, `areaServed: GB`, price range, opening hours. This is the anchor entity for the brand.
- **`FAQPage`** on the home page, generated from the real FAQ content — eligible for rich results.
- **Future:** `BreadcrumbList` as the site grows; `Article`/`BlogPosting` for the blog; `Service` per package; `Review`/`AggregateRating` if testimonials are added. All generated from typed content, never hand-maintained.

### 14.4 Crawlability

- **`sitemap.xml`** generated from the route list (`app/sitemap.ts`), home at priority 1.0, others 0.8.
- **`robots.txt`** generated (`app/robots.ts`), allowing all and pointing to the sitemap.
- Clean, human-readable URLs (`/how-we-work`, `/packages`). No query-string routing for primary pages.
- Fast, static HTML (crawlers get full content without executing JS).

### 14.5 Local SEO

FlowPilot serves UK small businesses, so local signals matter:

- `areaServed: GB` and `en-GB` throughout; UK spelling and phrasing.
- **Google Business Profile** (a launch/marketing task) — claimed and consistent with the site's name and details (NAP consistency: Name, Address if used, and contact).
- Content that names the audiences and locales served, honestly.
- If FlowPilot ever operates from/serves a specific town, add `LocalBusiness` schema with geo and, where appropriate, location landing pages — architected, not faked.

### 14.6 Ongoing SEO hygiene

- Every new page ships with its own title, description, canonical, OG and (where relevant) schema — enforced by the component/route contract.
- Submit the sitemap in **Google Search Console** (and Bing Webmaster Tools) at launch; monitor coverage and Core Web Vitals there.
- No duplicate content; no orphan pages; internal links are meaningful and descriptive.

---

## 15. Future Expansion

The current site is the marketing surface. FlowPilot is architected so the following can be added **without re-platforming** — same design system, same tokens, same component library, same code standards. Each is sketched here so today's decisions don't block tomorrow's.

### 15.1 Guiding principles for growth

- **One design system, forever.** Anything new inherits the tokens, motion and components in this document. A new surface should be recognisably FlowPilot on first glance.
- **Content stays centralised and typed.** New content types extend `lib/content.ts` (or a headless CMS with the same shapes) — never hard-coded.
- **Add routes, not rewrites.** New areas are new App Router segments. The marketing site is untouched by adding an app area.
- **Static where possible, dynamic where necessary.** Marketing and content stay static/ISR; authenticated areas become dynamic behind auth — cleanly separated by route group.

### 15.2 Blog / Insights (`/insights`)

- **Purpose:** SEO reach, trust-building, plain-English advice for small businesses.
- **Architecture:** `app/insights/` with a listing page and `[slug]` article routes. Content via MDX or a headless CMS (e.g. Sanity/Contentful) mapped to typed shapes. `Article`/`BlogPosting` JSON-LD, per-post OG images, RSS.
- **Design:** reuses `PageHeader`, `Reveal`, typography scale; introduces a `Prose`/article component and a `PostCard`. No new visual language — just a reading surface with the same calm.

### 15.3 Client Portal (`/portal`)

- **Purpose:** where clients see their project and manage the relationship — the digital form of "we'll take it from here."
- **Scope:** project status/timeline (the flight-trail journey, now *live* against their real project), shared files, approvals, invoices, support requests, the intake form.
- **Architecture:** a `(app)` route group behind authentication (e.g. Auth.js / Clerk), dynamic rendering, a typed API layer / database (e.g. Postgres via an ORM). Strictly separated from the static marketing routes. Role-aware (client vs admin).
- **Design:** the same dark system adapted for denser, functional UI — introduces app primitives (data table, status pill, file row, tabs) built on the existing tokens. The aircraft becomes a live progress marker.

### 15.4 Admin Dashboard (`/admin`)

- **Purpose:** FlowPilot's internal cockpit — leads, clients, projects, invoices, content.
- **Architecture:** same auth/data layer as the portal, admin-only role, its own route group. This is the "automate internally" half of the philosophy made real.
- **Design:** utilitarian but on-brand; prioritises density and speed over spectacle (motion dialled right down for a tool used all day).

### 15.5 Knowledge Base / Help Centre (`/help`)

- **Purpose:** self-serve answers; deflect repetitive questions while staying warm.
- **Architecture:** categorised articles (`/help`, `/help/[category]`, `/help/[category]/[article]`), searchable, content in CMS/MDX. `FAQPage`/`HowTo` schema. The existing `Accordion` and FAQ patterns scale straight into it.
- **Design:** reading-first, same calm; a search field, category tiles, breadcrumb (`BreadcrumbList` schema).

### 15.6 Support Centre (`/support`)

- **Purpose:** the front door for existing clients needing help — ticketing/requests, tied to the portal and the Monthly Support Plan.
- **Architecture:** authenticated request forms + status, integrated with email and (future) a CRM/helpdesk. Could begin as email-backed (on brand: "everything can begin by email") and formalise over time.

### 15.7 Supporting integrations (as needed)

Analytics (privacy-friendly), a CRM/pipeline for leads, transactional email, payments (Stripe) for deposits/invoices, and a headless CMS for non-technical editing. Each is added behind the same standards; none changes the public brand experience.

### 15.8 The expansion rule

Every new surface must pass the same bar as the marketing site: does it feel like FlowPilot? A functional tool is allowed to be quieter and denser, but it is never allowed to be *generic*. The design system is the constitution; new features are amendments, not new countries.

---

## 16. Phase 2 — Quality Assurance

Once the site is built, we become its harshest critics. QA here is not "does it work?" — working is assumed. The question is **"does it feel like FlowPilot?"** Functional correctness is the floor; brand truth is the bar.

### 16.1 The two questions

For every page, every section, every interaction, we ask both:

1. **Does it work?** (Correctness) — no bug, no broken link, no console error, no layout break, every state handled.
2. **Does it feel like FlowPilot?** (Truth) — calm, premium, alive, clear, intentional. Would this beat make a visitor trust us more? Would removing it lose anything? Is the motion earning its place? Is the accent restrained? Is there anything here we're keeping only because we're tired?

A thing can pass (1) and fail (2). Failing (2) is still a failing grade.

### 16.2 The QA method

- **Page-by-page walkthrough.** Open each route and inspect it as a first-time visitor, then as a designer, then as a skeptical competitor. Note every friction, every off-beat, every "almost."
- **Interaction-by-interaction.** Trigger every hover, focus, press, scroll-reveal, accordion, form state, and the hero/timeline sequences. Each must feel deliberate.
- **Cross-device.** Real phone, real tablet, desktop, and a large monitor. Not just the simulator.
- **Cross-browser.** Latest Chrome, Safari, Firefox, Edge. Safari especially for `backdrop-filter`, masks and font rendering.
- **The states.** Deliberately provoke loading, empty, error, invalid-form, no-JS, slow-network and reduced-motion. Each must be handled and on-brand.
- **The squint test.** Blur your eyes at each page: is the hierarchy still clear, the accent still restrained, the composition still balanced?
- **The read-aloud test.** Read every line of copy aloud. If it sounds like an agency, a robot, or a banned word, rewrite it.
- **The five-second test.** Show the home page to someone for five seconds. Can they say what FlowPilot does? If not, the hero has failed its contract.

### 16.3 The severity of "almost"

FlowPilot's whole thesis is that details are proof. Therefore "almost right" is treated as "wrong." A hover that's 50ms too slow, an accent used one place too many, a heading that wraps awkwardly on a specific width, a shadow slightly too heavy — these are not nitpicks; they are the difference between "nice website" and "who built that?" We fix them.

### 16.4 The launch rule

> We do not launch because we are tired. We launch because there is genuinely nothing left that materially improves the experience.

"Materially improves" is the honest filter. Not every conceivable tweak is material — gold-plating is its own failure of taste. But anything that would change a visitor's *feeling* is material, and it gets done before launch.

---

## 17. The Launch Checklist

A professional pre-flight checklist. Nothing ships until every relevant line is ticked. Items already true in the current build are marked ✅; items that are genuine pre-launch tasks are marked ☐.

### 17.1 Branding

- ✅ Logo crisp at every size (SVG, aircraft + wordmark)
- ✅ Favicon (SVG) renders in the tab
- ☐ Social/OG share card (1200×630, on-brand) added and verified in a link-preview debugger
- ✅ Typography loaded correctly (Space Grotesk + Inter, no FOUT/shift)
- ✅ Colours match tokens exactly; chartreuse used sparingly everywhere
- ✅ Aircraft motif consistent across logo, trail, timeline, footer, favicon

### 17.2 UX

- ✅ Mobile tested — hero cinematic, no horizontal scroll, tap targets ≥44px
- ✅ Tablet and large-desktop layouts verified
- ✅ Forms: labels, validation, submitting/success/failure states, graceful fallback
- ✅ Loading: hero sequence never blocks content; runs once per session
- ✅ Error state: custom on-brand 404 *(confirm present before launch)*
- ✅ Empty/edge states considered (no dead ends)
- ✅ All navigation links go to the right place; no orphan pages
- ✅ Reduced-motion experience verified (elegant with motion off)

### 17.3 Technical

- ☐ Lighthouse Performance 95+ (run on the production Vercel URL)
- ☐ Lighthouse Accessibility 100
- ☐ Lighthouse Best Practices 100
- ☐ Lighthouse SEO 95+
- ✅ Semantic HTML, one `<h1>` per page, logical headings
- ✅ Keyboard navigable end-to-end; visible focus; skip link
- ✅ `sitemap.xml` generated and correct
- ✅ `robots.txt` generated and points to the sitemap
- ✅ Canonical URLs per route
- ☐ Canonical host aligned with the CDN's primary domain (www vs apex — pick one, redirect the other, match `brand.url`)
- ✅ Structured data: `ProfessionalService` + `FAQPage` (valid in the Rich Results Test — ☐ verify)
- ✅ No console errors or warnings in production
- ☐ HTTPS active with valid certificate (auto via Vercel once DNS resolves)
- ☐ Custom domain connected (`flowpilotuk.com` + `www`) and both resolve

### 17.4 Performance

- ✅ No raster images to optimise (typography/motion carry the design)
- ✅ Lazy loading strategy defined for any future media (`next/image`)
- ✅ Caching/compression handled by the platform (immutable hashed assets, brotli)
- ✅ Fonts self-hosted, subset, `swap`, zero layout shift
- ✅ Animation budget respected (compositor-only, canvas paused offscreen, reduced-motion halves work)
- ☐ Core Web Vitals green in the field (confirm in Search Console after launch)

### 17.5 Marketing

- ☐ Analytics installed (privacy-friendly, cookieless if possible) and recording
- ☐ Google Search Console verified; sitemap submitted
- ☐ Bing Webmaster Tools verified (optional but cheap)
- ☐ Google Business Profile claimed/consistent (local SEO)
- ☐ Contact form endpoint wired (Formspree ID or chosen provider) and **test submission received**
- ☐ Email delivery tested end-to-end (enquiry actually lands in the inbox)
- ☐ CRM / lead capture connected (if/when used)

### 17.6 Content

- ☐ All copy proofread (spelling, grammar, UK English, tone) — read aloud
- ✅ FAQs present, accurate and genuinely helpful
- ✅ Packages accurate; "Get a quote" everywhere (no stale prices)
- ✅ Contact details correct (email; no phone by decision)
- ✅ About reflects the real mission and voice
- ☐ Legal: privacy policy / cookie notice if analytics or forms collect data (UK GDPR) — add before collecting data
- ☐ No lorem ipsum, no placeholder anywhere

### 17.7 Hidden details

- ✅ Easter eggs present and tasteful (idle footer aircraft)
- ✅ Motion polish (easings consistent, nothing janky, 60fps)
- ✅ Hover states on every interactive element
- ✅ Scroll behaviour smooth; reveals once; no scroll-jacking
- ✅ Micro-interactions catalogue (§6) all present and correct
- ✅ Text selection colour on-brand; focus rings on-brand

### 17.8 Final pre-flight

- ☐ Full keyboard-only pass of every page
- ☐ Screen-reader spot-check (nav, forms, headings)
- ☐ Cross-browser pass (Chrome, Safari, Firefox, Edge)
- ☐ Real-device pass (phone, tablet, desktop, large monitor)
- ☐ The five-second test passed with a real person
- ☐ Every ☐ above resolved or consciously deferred with a reason

---

## 18. The Final Question

When every box is ticked, every interaction polished and every line of copy read aloud, there is one question left. It is the only one that matters, and it is not on any checklist:

> ### If Apple were reviewing this website, would they approve it?

Not "is it good for a small business site." Not "is it better than competitors." The bar is absolute: would the most demanding product company in the world — one that has made restraint, craft and feeling its entire identity — put their name on this?

If the honest answer is **no**, we keep improving. We find the beat that's *almost*, the accent that's one too many, the transition that's slightly off, the sentence that could be simpler — and we fix it. Then we ask again.

If the honest answer is **yes**, we launch. Not because we're tired. Because there is genuinely nothing left that materially improves the experience.

### The promise this document keeps

FlowPilot is treated as a flagship — not to win awards, but because the website has a job: to become **the best salesperson the company will ever hire.** One that works every hour, never oversells, never tires, and closes by being undeniably, quietly excellent.

When it launches, the goal is not to hear *"nice website."* The goal is *"who built that?"* — and the moment someone learns that **FlowPilot built FlowPilot**, the website stops being marketing and becomes proof.

That is the standard. This document exists to hold us to it.

---

---

## Appendix A — Design Token Reference

The complete, copy-pasteable token set. This is the canonical list; `tailwind.config.ts` and `globals.css` are its implementation.

### A.1 Colour

```
base            #050505     page background
surface         #0B0B0B     raised sections / footer
card            #111111     cards, featured package, support panel
line            rgba(255,255,255,0.08)   all borders / hairlines
ink             #FFFFFF     primary text & headings
ink.secondary   #B3B3B3     body copy
ink.muted       #8A8A8A     labels, captions, metadata (AA on all surfaces)
chartreuse      #B6FF00     the accent (< ~5% of pixels)
chartreuse.soft #C7FF3D     accent hover
chartreuse.dim  #8FCC00     accent pressed / low-emphasis
glow            rgba(182,255,0,0.45)     chartreuse glow in shadows/blurs
```

### A.2 Typography

```
Display family  Space Grotesk  (--font-space-grotesk, weights 500/600/700)
Body family     Inter          (--font-inter)

display-lg   clamp(3rem, 11vw, 8.5rem)   / lh 0.92 / tracking -0.04em   (hero only)
display      clamp(2.75rem, 7vw, 4.5rem) / lh 1.00 / tracking -0.03em   (page h1, final CTA)
display-sm   clamp(2rem, 4vw, 2.75rem)   / lh 1.05 / tracking -0.02em   (section h2)
body         ~1rem–1.125rem, leading-relaxed (~1.625)
lede         1.125rem–1.25rem, ink.secondary
eyebrow      0.8rem, uppercase, tracking 0.2em, ink.secondary, chartreuse dot
overline     0.75rem, uppercase, tracking 0.25em, ink.muted
prose measure  max 44rem
```

### A.3 Spacing, layout, radius

```
section pad   py-24 / sm:py-28 / lg:py-36   (96 / 112 / 144px)
shell         max-w 75rem, px-5 / sm:px-6 / lg:px-8, centred
header height  --header-h: 4.75rem
grid           12-col mental model; card grids sm:2 / lg:3
radius         buttons/pills → rounded-full; inputs/small → xl (0.875rem);
               cards/panels → 2xl (1.25rem) / 3xl (1.75rem)
```

### A.4 Depth

```
shadow-card    0 1px 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.9)
shadow-glow    0 0 0 1px rgba(182,255,0,0.25), 0 0 40px -8px rgba(182,255,0,0.45)
shadow-glow-lg 0 0 0 1px rgba(182,255,0,0.30), 0 0 80px -12px rgba(182,255,0,0.55)
bg-radial-fade radial-gradient(60% 60% at 50% 0%, rgba(182,255,0,0.08), transparent 70%)
bg-grid        1px lines on 64px cells, white @ ~3.5%
```

### A.5 Motion

```
EASE_GENTLE   cubic-bezier(0.22, 1, 0.36, 1)     house easing (~90% of motion)
EASE_SWIFT    cubic-bezier(0.4, 0, 0.2, 1)        snappy UI state changes
spring        stiffness 200, damping 26, mass 0.9  magnetic / pointer follow
reveal        duration 0.7s, y 22px, EASE_GENTLE
stagger       0.09s per child, 0.05s initial delay
micro         150–250ms                           hovers, presses, toggles
ambient       pulse-glow 4s, float 6s             slow life loops
hero intro    < 2s total, once per session
```

### A.6 Breakpoints

```
base   0        mobile portrait (author here first)
sm     640px    large phones / small tablets
md     768px    tablets
lg     1024px   desktop — nav expands, cursor effects engage
xl     1280px   large desktop
2xl    1536px   ultra-wide — content capped at 75rem, centred
```

---

## Appendix B — Voice & Copywriting Playbook

Copy is design. These are the working rules for writing anything in FlowPilot's voice.

### B.1 The five copy rules

1. **One idea per sentence.** Break it up. Fragments are fine for rhythm.
2. **Talk to one person.** "You," "your business." Never "clients" or "users" in customer-facing copy.
3. **Say the reassuring thing plainly.** Don't imply "easy" — state it. "Everything can begin by email."
4. **Lead with the customer's world, not ours.** "Running a business is hard enough" before anything about us.
5. **Confidence, never claims.** Show the craft; never announce it. Delete every "best," "leading," "world-class."

### B.2 Before → after

| ❌ Agency-speak | ✅ FlowPilot |
|---|---|
| "We deliver cutting-edge, results-driven digital solutions." | "We build professional websites that help your business earn trust." |
| "Leverage our bespoke, world-class expertise." | "We'll recommend what genuinely helps — and tell you when you don't need something." |
| "Schedule a discovery call to begin your journey." | "Tell us about your business. We'll take it from here." |
| "Our streamlined onboarding process." | "A few simple questions by email." |
| "Unlock your brand's full potential." | "Keep your business moving." |
| "Enterprise-grade, scalable solutions." | "Advanced tools that do real work for you — bookings, payments, enquiries." |

### B.3 The banned list (never use)

> cutting edge · innovative · world class · digital transformation · synergy · growth hacking · results driven · solutions · leverage · seamless · game-changing · next-generation · disrupt · unlock · empower · robust · elevate · curated (unless literal)

### B.4 The house phrases (use deliberately)

> "Keep your business moving." · "We'll take it from here." · "No lengthy meetings. No jargon. Everything can begin by email." · "Recommend, don't sell." · "Get a quote." · "Built and looked after in the UK." · "Running a business is hard enough."

### B.5 Section copy patterns

- **Hero headline:** 2–4 words per line, uppercase, momentum verb. Accent the final word.
- **Eyebrows:** 1–3 words, uppercase label ("The honest bit," "How it works," "Why we started").
- **CTAs:** verb-led, low-pressure ("View packages," "Get a quote," "Start a project," "See how it works"). Never "Buy now," "Sign up today," "Limited time."
- **Reassurance lines:** short, negative-space phrasing that removes fear ("no obligation," "no long contracts," "no calls required unless you'd prefer one").
- **Microcopy:** warm and specific ("Prefer email?", "A few details are all we need").

---

## Appendix C — Component Quick Reference

| Component | File | Rendering | Key props | States / notes |
|---|---|---|---|---|
| `Button` | `ui/Button.tsx` | client | `variant`, `size`, `href`/`onClick`, `magnetic` | rest/hover/focus/active/disabled; magnetic; glow on primary |
| `Reveal` | `ui/Reveal.tsx` | client | `index`, `variants`, `as`, `once`, `amount` | scroll-in fade/rise |
| `SectionHeading` | `ui/SectionHeading.tsx` | client | `eyebrow`, `title`, `lede`, `align` | staggered entrance |
| `PageHeader` | `ui/PageHeader.tsx` | client | `eyebrow`, `title`, `lede` | mount entrance + grid drift |
| `PackageCard` | `ui/PackageCard.tsx` | client | `pkg`, `index` | featured vs standard; hover lift/glow; no price |
| `Accordion` | `ui/Accordion.tsx` | client | `items` | one-open; ＋→✕; spotlight; `aria-expanded` |
| `FinalCTA` | `ui/FinalCTA.tsx` | client | `heading`, `sub` | particles + bloom |
| `Providers` | `Providers.tsx` | client | `children` | global reduced-motion config |
| `Aircraft` | `effects/Aircraft.tsx` | server | `className`, `title` | brand mark, `currentColor` |
| `CursorGlow` | `effects/CursorGlow.tsx` | client | — | fine-pointer only; publishes `--cursor-x/y` |
| `ParticleField` | `effects/ParticleField.tsx` | client | `density`, `interactive` | canvas; IO-paused; reduced-motion off |
| `GridBackdrop` | `effects/GridBackdrop.tsx` | client | `travel`, `fade` | scroll parallax |
| `Nav` | `layout/Nav.tsx` | client | — | scroll-aware; active pill; mobile menu |
| `Footer` | `layout/Footer.tsx` | client | — | sitemap/hours + idle aircraft |
| `Hero` | `home/Hero.tsx` | client | — | load sequence, parallax, headline rise |
| `Process` / `Journey` | `home/`, `how/` | client | — | scroll flight-trail + aircraft |
| `PricingBoard` | `pricing/PricingBoard.tsx` | client | — | cards + comparison + extras + support |
| `ContactForm` | `contact/ContactForm.tsx` | client | — | validation; success/fail; email fallback |

---

## Appendix D — Content Inventory

The canonical customer-facing content, mirrored from `lib/content.ts`. If copy changes, change it there and reflect it here.

**Brand.** Name: FlowPilot. Tagline: *Keep your business moving.* Description: *FlowPilot builds professional websites and digital tools that help small businesses earn trust, attract customers and stay organised online.* Email: hello@flowpilotuk.com. Hours: Mon–Fri 9–5, Saturday by email, Sunday closed. (No phone by decision.)

**Packages** (no prices; "Get a quote"):
1. **Essential Online Presence** — *Simple. Professional. Affordable.* Up to 3 pages, all devices, contact form & click-to-call, SEO basics, own domain.
2. **Professional Business Website** *(Recommended)* — *Everything most businesses need to look their best.* Up to 7 pages, custom design, galleries & service pages, reviews, Google Maps/profile, enquiry routing.
3. **Business Growth Website** — *Advanced tools that do real work for you.* Everything in Professional plus bookings, payments/deposits, live chat, customer accounts, self-serve content editing.

**Monthly Business Support Plan** — hosting/updates/security, unlimited small changes, backups & monitoring, a real person to email, priority turnaround, no long contracts.

**Process (home, 3 steps):** 01 Tell us about your business → 02 We build your website → 03 We'll take it from here.

**Journey (how-we-work, 7 steps):** 01 Business discovery · 02 Your quote · 03 Payment · 04 Intake form · 05 We build your website · 06 Launch · 07 Ongoing support.

**Principles (4):** Respect your time · Keep things simple · Recommend, don't sell · Build long-term relationships.

**FAQs (6):** How long does a website take? · Can everything be done by email? · Do I own my website? · Can you update my website later? · Do I need professional photos? · What if I don't know what I need?

**Audiences:** Trades · Dog groomers · Hair salons · Beauticians · Restaurants · Accountants · Solicitors · Consultants · Local services.

---

## Appendix E — Definition of Done & Change Log

### E.1 Definition of "done" (per change)

A change is done only when **all** are true:

1. It works — no bug, no console error, every state handled.
2. It feels like FlowPilot — calm, premium, alive, clear (§16.1).
3. It uses tokens, not literals; reuses components, not copies.
4. It is keyboard-accessible and reduced-motion-safe.
5. It is responsive from 320px to ultra-wide.
6. `npm run build` passes (typecheck + build green).
7. It is verified visually on a real render, not just in theory.
8. Copy (if any) is proofread and in-voice.

### E.2 Change log

| Version | Date | Change |
|---|---|---|
| 1.0 | 22 Jul 2026 | First full specification. Reflects the Next.js 14 flagship build: dark cinematic system, chartreuse accent, five routes, motion system, and the price-free packages / email-first contact decisions. |
| 1.1 | 22 Jul 2026 | Phase 2 QA pass. Added custom on-brand 404, OG/social share image, per-route canonicals aligned to the apex host, privacy policy, and privacy-friendly analytics (Vercel Analytics + Speed Insights, Vercel-only). Lifted `ink.muted` to `#8A8A8A` for AA on the footer and de-opacified the hero CTA entrance so it never renders below-contrast. Lighthouse (local): Performance 95–98, Accessibility 100, Best Practices 100, SEO 100 across all pages. |

*(Append a row for every material change so this document stays true to the product.)*

---

*End of specification. This is a living document — when the product changes, the truth here changes with it. If the site and this document ever disagree, one of them is wrong; fix whichever it is.*

