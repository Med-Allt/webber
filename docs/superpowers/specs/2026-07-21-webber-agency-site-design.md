# Webber — Agency Site Design Spec

**Date:** 2026-07-21
**Status:** Approved for planning

## 1. Purpose

Build a single-page marketing site for **Webber**, a web agency offering branding, web
design, and development. The site must read as high-end and intentional — the visual
quality of the site is itself the primary sales argument.

**Success criteria:**

- A visitor understands what Webber sells within one screen.
- Every block from the reference structure is present and populated.
- Motion feels deliberate, never decorative; reduced-motion users get a clean static site.
- Placeholder content is swappable by editing data files only — never component code.

## 2. Design direction

The visual target is the reference site `easy-papaya-832265.framer.app` ("Deliver"): a
light, near-white, ultra-minimal aesthetic driven by very large display typography and
generous whitespace, which inverts to dark for two feature zones.

The dark/video/`#5ed29c` hero from the user's example prompt is **explicitly not** the
visual target. That prompt was supplied as an example of specification *format*. The Mux
HLS video, liquid-glass card, and green accent are out of scope.

### 2.1 Palette

| Token | Value | Use |
| --- | --- | --- |
| `--color-ground` | `#FAFAF9` | Page background (light zones) |
| `--color-ink` | `#0A0A0A` | Primary text, pill CTAs, dark zones |
| `--color-muted` | `#6B6B6B` | Secondary text, captions |
| `--color-hairline` | `rgba(10,10,10,0.08)` | Dividers, card borders |
| `--color-accent` | `#C4512A` | Micro-details only: bracket labels, active states |
| `--color-ground-dark` | `#0A0A0A` | Background in inverted zones |
| `--color-ink-dark` | `#FAFAF9` | Text in inverted zones |

Accent is deliberately rationed. It appears on bracket labels and active/hover states
only, never on large surfaces.

### 2.2 Typography

Display type is the load-bearing element of the design.

Single family throughout: **General Sans** (Fontshare), a neo-grotesque with tight
apertures and a true Variable axis. It carries the same confident, slightly condensed
character as the reference site's display face. Loaded self-hosted via `next/font/local`
so there is no render-blocking third-party request; system `ui-sans-serif` is the
fallback stack.

- **Display:** General Sans Semibold at `clamp(2.5rem, 7vw, 6.5rem)`,
  `tracking-[-0.03em]`, `leading-[0.95]`.
- **Body:** General Sans Regular, `1rem`–`1.125rem`, `leading-relaxed`, `--color-muted`.
- **Section labels:** `< bracketed lowercase >` form, `0.75rem`, `tracking-[0.1em]`,
  uppercase, `--color-accent`.

### 2.3 Layout

- Max content width `1280px`, gutters `1.5rem` mobile / `3rem` desktop.
- Vertical rhythm: sections separated by `clamp(6rem, 12vh, 10rem)`.
- Breakpoints follow Tailwind defaults. Every section is designed mobile-first.

## 3. Architecture

```
app/
  layout.tsx          fonts, metadata, theme baseline
  page.tsx            composes the nine sections in order
  globals.css         Tailwind v4 @theme token definitions
components/
  sections/
    nav.tsx  hero.tsx  trust.tsx  work.tsx  services.tsx
    process.tsx  pricing.tsx  faq.tsx  cta.tsx
  motion/
    reveal.tsx  sticky-stack.tsx  marquee.tsx
    magnetic-button.tsx  theme-scroll-zone.tsx
  ui/                 shadcn (Base UI): accordion, button, badge
content/
  site.ts  work.ts  services.ts  process.ts  pricing.ts  faq.ts
lib/
  utils.ts            cn() helper
```

### 3.1 Separation of concerns

Each section component is a pure function of exactly one content module. Sections hold
layout and composition; they hold no copy and no animation math.

- **What it does:** renders one page block.
- **How you use it:** `<Work />` — no props; it imports its own content module.
- **What it depends on:** its content module, and motion primitives.

Motion primitives hold all animation logic and are the only components that touch
`motion/react`. This keeps animation behaviour changeable in one place and keeps section
components readable.

Content modules export typed constants. Replacing placeholder copy with real copy is a
data edit in `content/`, never a component edit. This boundary is the main reason the
project is structured this way.

### 3.2 Data shapes

```ts
// content/work.ts
export type Project = {
  slug: string
  title: string
  blurb: string
  meta: { scope: string; pages: string; duration: string }
  liveUrl?: string
  testimonial: { quote: string; author: string; role: string }
}

// content/services.ts
export type Pillar = { label: string; title: string; body: string }

// content/process.ts
export type Phase = { name: string; steps: { title: string; body: string }[] }

// content/pricing.ts
export type Package = {
  name: string
  price: string
  summary: string
  highlights: string[]
  features: string[]
  featured?: boolean
}

// content/faq.ts
export type FaqItem = { question: string; answer: string }
```

## 4. Sections

Rendered in this order on a single page. Nav links are in-page anchors.

| # | Block | Anchor | Content |
| --- | --- | --- | --- |
| 1 | Sticky nav | — | Wordmark; `Work / Services / Process / FAQ`; black pill "Book a call" |
| 2 | Hero | — | Floating dark logo chip, display headline, sub-paragraph, pill CTA, avatar trust cluster |
| 3 | Trust bar | — | Client logo marquee under "Trusted by industry leaders" |
| 4 | Latest work | `#work` | Sticky-stacking project cards, each paired with a client testimonial |
| 5 | What we do | `#services` | Positioning statement plus three pillars: Branding, Web Design, Development |
| 6 | The Process | `#process` | Kickoff → Execution → Handoff, three steps each |
| 7 | Services/packages | `#pricing` | Three packages: Brand Sprint, Website Sprint, Brand + Web |
| 8 | FAQ | `#faq` | Accordion, six questions |
| 9 | CTA footer | — | "Ready to jam?", email, socials, © Webber 2026 |

Sections 4 and 9 render inverted (dark) via `ThemeScrollZone`.

### 4.1 Nav behaviour

Fixed to viewport. Transparent over the hero; on scroll past hero it gains a background
blur and hairline bottom border. Below `md`, links collapse into a full-screen overlay
menu toggled by a hamburger; the overlay traps focus and closes on `Escape` and on
anchor selection.

### 4.2 Work section behaviour

Project cards stack: each card sticks to the viewport top as the next scrolls over it,
with a slight scale-down on the outgoing card. Below `md`, stacking is disabled and cards
render as a plain vertical list.

## 5. Motion

Library: `motion/react`.

| Primitive | Responsibility |
| --- | --- |
| `Reveal` | Fade + rise on viewport entry, `once: true`, configurable delay |
| `StickyStack` | Sticky-scroll card stacking with scale falloff |
| `Marquee` | Seamless infinite horizontal scroll, pauses on hover |
| `MagneticButton` | Cursor-follow translate within a radius, springs back on leave |
| `ThemeScrollZone` | Swaps the token set for its subtree, cross-fading on entry |

**Reduced motion is a hard requirement.** A single `useReducedMotion` check gates every
primitive; when set, each renders its children statically with no transform, no
transition, and no scroll listener. `Marquee` renders a static truncated row.

## 6. Accessibility

- All interactive elements reachable and operable by keyboard; visible focus rings.
- Mobile menu traps focus and restores it to the trigger on close.
- FAQ accordion uses shadcn/Base UI, inheriting correct ARIA semantics.
- Text contrast meets WCAG AA in both light and inverted zones — `--color-muted` on
  `--color-ground` must be verified, and darkened if it fails.
- Marquee and stacking are presentational; content order in the DOM remains logical.
- Every image has meaningful `alt`; decorative shapes are `aria-hidden`.

## 7. Content policy

All launch content is **fabricated placeholder copy**, including project case studies,
client names, company names, testimonials, and prices.

Each content module carries a header comment marking its contents as placeholder. The
testimonials in `content/work.ts` are invented and must not be presented publicly as
genuine client endorsements; they exist to validate layout only and are to be replaced
with real, attributable quotes before the site goes live.

## 8. Testing

- **Typecheck and lint** pass with zero errors.
- **Build** (`next build`) succeeds.
- **Content contract:** a unit test asserts each content module is non-empty and
  conforms to its exported type, so a malformed content edit fails loudly rather than
  rendering a broken section.
- **Reduced motion:** a test renders the page with `prefers-reduced-motion: reduce` and
  asserts no motion transforms are applied.
- **Manual pass:** verify at 375px, 768px, and 1440px, and keyboard-navigate the full
  page including the mobile menu and accordion.

## 9. Out of scope

- CMS integration. Content lives in typed files; the shape is CMS-liftable later.
- Individual `/work/[slug]` case study pages.
- Contact form and backend. The CTA is a `mailto:` link plus a booking URL.
- Analytics, cookie consent, i18n.
- The Mux HLS background video, liquid-glass card, and `#5ed29c` accent from the example
  prompt.

## 10. Stack

- Next.js (latest), App Router, TypeScript strict mode
- Tailwind CSS v4, tokens defined via `@theme`
- shadcn/ui scaffolded with the **Base UI** component library (`@base-ui/react`)
- `motion/react` for animation
- `lucide-react` for icons
