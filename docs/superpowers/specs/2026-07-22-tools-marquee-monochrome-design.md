# Tools Marquee Monochrome Design

**Date:** 2026-07-22  
**Status:** Approved  
**Scope:** `components/sections/tools.tsx` + brand mark assets for icons missing from `react-icons`

## Problem

The tools marquee assigns each brand a `color` and paints icon + label with `--tool-color` on hover. With many logos, the strip becomes a rainbow and fights the rest of the site.

## Goal

Expand the tools list and use one unified monochrome treatment so the marquee stays quiet and cohesive.

## Visual & interaction

- Remove `--tool-color` and the `color` field from every tool.
- Default: icon + label at muted gray (`text-muted/55`), matching current rest state.
- Hover: both lift to `text-foreground` (theme-aware black/white).
- Image marks (e.g. Klaviyo, and any PNG/SVG logos): opacity lift `55 → 100` only — no tint.
- Marquee speed, container, hero band, and section caption unchanged.

## Data model

```ts
type Tool = {
  name: string
  Icon?: IconType
  image?: string
  label?: string
  layout?: "stacked" | "inline"
}
```

## Brand list (22)

**Keep:** Mailchimp, Klaviyo, Meta, Shopify, Framer, Next.js, Vercel, React, Google Analytics, Google Ads, Figma  

**Add:** Webflow, Photoshop, Illustrator, Canva, Notion, Search Console, Semrush, Ahrefs, Mixpanel, TypeScript, Tailwind CSS

## Icons

- Prefer `react-icons/si` when available.
- Photoshop / Illustrator: Tabler brand icons (`TbBrandAdobePhotoshop`, `TbBrandAdobeIllustrator`) — no Simple Icons marks.
- Canva / Ahrefs: not in `react-icons`; use small monochrome assets under `/public/brand/logos/` (same pattern as Klaviyo).

## Out of scope

- i18n caption changes
- Marquee / `HeroToolsBand` behavior changes
- New e-comm, ads, or CRM brands beyond the locked list

## Success criteria

- Hover never introduces brand hues.
- All 22 tools render in the marquee with consistent monochrome hover.
- Layout and motion match the existing section.
