/**
 * REAL CLIENT WORK.
 *
 * Project names, descriptions, and live URLs are real and verified against the
 * live sites. `testimonial` is intentionally absent on every entry: a quote
 * attributed to a real company must come from that company. Do not write one.
 *
 * `duration` is optional and omitted where the real figure is unknown — the
 * card drops the field rather than showing an invented number.
 *
 * Scope is "Brand + Web" (branding, web design, and development) on all three,
 * confirmed by the studio. Public display of these clients is confirmed too.
 */

export type Project = {
  slug: string
  title: string
  blurb: string
  meta: { scope: string; pages: string; duration?: string }
  liveUrl?: string
  testimonial?: { quote: string; author: string; role: string }
}

export const projects: Project[] = [
  {
    slug: "cgs-team",
    title: "CGS-team",
    blurb:
      "A custom software studio positioning itself as a technical co-founder. The site carries a broad service range — blockchain, mobile, cloud, AI — across case studies, careers, and regional landing pages without losing its through-line.",
    meta: { scope: "Brand + Web", pages: "Multi page" },
    liveUrl: "https://cgsteam.io/",
  },
  {
    slug: "hoverla-soft",
    title: "Hoverla Soft",
    blurb:
      "A product development company building market-ready web applications for startups and enterprises across healthcare, legal, logistics, and fintech. Structured to prove credibility fast: the team, the products shipped, and the way in.",
    meta: { scope: "Brand + Web", pages: "Multi page" },
    liveUrl: "https://hoverlasoft.com/",
  },
  {
    slug: "mlynivska-chaika",
    title: "Mlynivska Chaika",
    blurb:
      "A full-cycle Ukrainian agribusiness — farming, livestock, orchards, and meat processing across 3,500 hectares, supplying eight branded retail stores. A traditional industry given a clear, modern presence in Ukrainian.",
    meta: { scope: "Brand + Web", pages: "Multi page" },
    liveUrl: "https://www.mlynivska-chaika.com.ua/",
  },
]
