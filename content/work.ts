/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

export type Project = {
  slug: string
  title: string
  blurb: string
  meta: { scope: string; pages: string; duration: string }
  liveUrl?: string
  testimonial: { quote: string; author: string; role: string }
}

export const projects: Project[] = [
  {
    slug: "northwind",
    title: "Northwind",
    blurb:
      "A full identity and marketing site for a logistics platform that had outgrown its spreadsheet-era brand.",
    meta: { scope: "Brand + Web", pages: "Multi page", duration: "4 weeks" },
    testimonial: {
      quote:
        "We went from looking like a side project to looking like the category leader. Our demo requests doubled in the first month.",
      author: "Dana Whitfield",
      role: "Northwind, Head of Marketing",
    },
  },
  {
    slug: "cadence",
    title: "Cadence",
    blurb:
      "A single-page launch site for a scheduling tool, designed and shipped in a week ahead of a funding announcement.",
    meta: { scope: "Web Design", pages: "Single page", duration: "1 week" },
    testimonial: {
      quote:
        "Tight deadline, zero drama. The site was live two days before the announcement and it carried the whole launch.",
      author: "Marcus Iyer",
      role: "Cadence, Co-Founder",
    },
  },
  {
    slug: "halcyon",
    title: "Halcyon",
    blurb:
      "A CMS-backed site and design system for a climate research group publishing weekly.",
    meta: { scope: "Brand + Web", pages: "Multi page", duration: "5 weeks" },
    testimonial: {
      quote:
        "The handoff was the best part. Our team publishes without ever needing to ask us for help.",
      author: "Priya Raghunathan",
      role: "Halcyon, Communications Lead",
    },
  },
  {
    slug: "meridian",
    title: "Meridian",
    blurb:
      "A rebrand and site refresh for a fintech moving upmarket into enterprise sales.",
    meta: { scope: "Branding", pages: "Multi page", duration: "3 weeks" },
    testimonial: {
      quote:
        "Enterprise buyers take us seriously now. That shift is worth more than the project cost several times over.",
      author: "Tobias Lund",
      role: "Meridian, VP Revenue",
    },
  },
]
