/**
 * REAL CLIENT WORK.
 *
 * Project names, descriptions, live URLs, and screenshots are real and verified
 * against the live sites. `testimonial` is intentionally absent on every entry:
 * a quote attributed to a real company must come from that company. Do not
 * write one.
 *
 * `duration` is optional and omitted where the real figure is unknown — the
 * card drops the field rather than showing an invented number.
 *
 * Scope is "Brand + Web" (branding, web design, and development) on all three,
 * confirmed by the studio. Public display of these clients is confirmed too.
 *
 * Screenshots were captured at 1440x900 @2x and encoded to AVIF at 1600px wide.
 * To refresh one, recapture and re-encode at the same dimensions so the
 * declared width/height stay accurate.
 */

export type Project = {
  slug: string
  title: string
  blurb: string
  meta: { scope: string; pages: string; duration?: string }
  liveUrl?: string
  image: { src: string; alt: string; width: number; height: number }
  testimonial?: { quote: string; author: string; role: string }
}

export const projects: Project[] = [
  {
    slug: "cgs-team",
    title: "CGS-team",
    blurb:
      "A custom software studio positioning itself as a technical co-founder. The site carries a broad service range — blockchain, mobile, cloud, AI — across case studies, careers, and regional landing pages without losing its through-line.",
    meta: { scope: "Brand + Web", pages: "Multi page" },
    image: {
      src: "/work/cgs-team.avif",
      alt: "The CGS-team home page: a light layout headlined “Software solutions for startups and growing businesses”, set beside an illustration of devices and blockchain motifs.",
      width: 1600,
      height: 1000,
    },
    liveUrl: "https://cgsteam.io/",
  },
  {
    slug: "hoverla-soft",
    title: "Hoverla Soft",
    blurb:
      "A product development company building market-ready web applications for startups and enterprises across healthcare, legal, logistics, and fintech. Structured to prove credibility fast: the team, the products shipped, and the way in.",
    meta: { scope: "Brand + Web", pages: "Multi page" },
    image: {
      src: "/work/hoverla-soft.avif",
      alt: "The Hoverla Soft home page: a dark hero over sculptural black fabric, headlined “Your path to successful product renovation starts here” in white and lime.",
      width: 1600,
      height: 1000,
    },
    liveUrl: "https://hoverlasoft.com/",
  },
  {
    slug: "mlynivska-chaika",
    title: "Mlynivska Chaika",
    blurb:
      "A full-cycle Ukrainian agribusiness — farming, livestock, orchards, and meat processing across 3,500 hectares, supplying eight branded retail stores. A traditional industry given a clear, modern presence in Ukrainian.",
    meta: { scope: "Brand + Web", pages: "Multi page" },
    image: {
      src: "/work/mlynivska-chaika.avif",
      alt: "The Mlynivska Chaika home page: a full-bleed photograph of cured sausage in a smokehouse behind the Ukrainian headline “Натуральна продукція” and an amber call to action.",
      width: 1600,
      height: 1000,
    },
    liveUrl: "https://www.mlynivska-chaika.com.ua/",
  },
]
