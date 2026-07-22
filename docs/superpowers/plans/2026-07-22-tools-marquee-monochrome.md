# Tools Marquee Monochrome Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand the tools marquee to 22 brands and replace brand-colored hover with a unified monochrome treatment.

**Architecture:** Keep the existing `TOOLS` + `ToolItem` + `Marquee` structure in `components/sections/tools.tsx`. Drop `color` / `--tool-color`. Icons use theme `text-muted/55` → `text-foreground` on hover; image marks use opacity only. Add logo assets only where `react-icons` has no mark.

**Tech Stack:** Next.js, React, `react-icons` (si + tb), next/image, existing Marquee

## Global Constraints

- Unified monochrome hover only — no brand hues
- Locked brand list of 22 from the design spec
- Touch only `tools.tsx` + `/public/brand/logos/` assets
- Do not change i18n caption, Marquee speed, or HeroToolsBand

---

## File map

| File | Responsibility |
|------|----------------|
| `components/sections/tools.tsx` | Tool data, monochrome ToolMark/ToolItem, section render |
| `public/brand/logos/canva.svg` | Canva mark (missing from react-icons) |
| `public/brand/logos/ahrefs.svg` | Ahrefs mark (missing from react-icons) |
| `public/brand/logos/klaviyo.png` | Existing — unchanged |

---

### Task 1: Add missing brand mark assets

**Files:**
- Create: `public/brand/logos/canva.svg`
- Create: `public/brand/logos/ahrefs.svg`

- [x] Step 1: Add monochrome Canva SVG under `/public/brand/logos/canva.svg`
- [x] Step 2: Add monochrome Ahrefs SVG under `/public/brand/logos/ahrefs.svg`
- [x] Step 3: Confirm both files load at `/brand/logos/canva.svg` and `/brand/logos/ahrefs.svg`

---

### Task 2: Monochrome treatment + expanded TOOLS list

**Files:**
- Modify: `components/sections/tools.tsx`

- [x] Step 1: Remove `color` from `Tool` type and delete `--tool-color` / brand hover classes
- [x] Step 2: Update `ICON_CLASS` to hover `text-foreground` instead of `text-(--tool-color)`
- [x] Step 3: Update label hover to `group-hover:text-foreground`
- [x] Step 4: Import new icons (`SiWebflow`, `SiNotion`, `SiGooglesearchconsole`, `SiSemrush`, `SiMixpanel`, `SiTypescript`, `SiTailwindcss`, `TbBrandAdobePhotoshop`, `TbBrandAdobeIllustrator`)
- [x] Step 5: Expand `TOOLS` to the locked 22-brand list; Canva/Ahrefs use `image` paths; keep Klaviyo image pattern
- [x] Step 6: Ensure image `ToolMark` still uses opacity lift only; support SVG via `Image` or `<img>` consistently with Klaviyo styling
- [x] Step 7: Run `pnpm typecheck` (or project equivalent) and fix any type errors
- [ ] Step 8: Visually verify marquee in browser — muted rest, monochrome hover, no brand colors

---

### Task 3: Spec/plan already written — no commit unless asked

- [ ] Step 1: Leave git commit to the user (do not commit unless requested)
