/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

export type Package = {
  name: string
  price: string
  summary: string
  highlights: string[]
  features: string[]
  featured?: boolean
}

export const packages: Package[] = [
  {
    name: "Brand Sprint",
    price: "$6k",
    summary:
      "A complete identity system: naming support, logo, type, colour, and usage guidelines.",
    highlights: ["2 weeks", "Identity system", "Draft in 72h"],
    features: [
      "Logo system",
      "Type & colour",
      "Brand guidelines",
      "Social & email templates",
      "Asset handoff",
    ],
  },
  {
    name: "Website Sprint",
    price: "$9k",
    summary:
      "A multi-page marketing site designed and built to convert, up to ten pages.",
    highlights: ["3 weeks", "Up to 10 pages", "Draft in 72h"],
    features: [
      "Design + Next.js build",
      "Custom graphics",
      "Animations",
      "CMS collections",
      "Responsive",
      "404 & legal pages",
      "Favicon & OpenGraph",
    ],
    featured: true,
  },
  {
    name: "Brand + Web",
    price: "from $14k",
    summary:
      "The full arc — identity and site built together so they actually agree with each other.",
    highlights: ["5 weeks", "Everything included", "Draft in 72h"],
    features: [
      "Everything in Brand Sprint",
      "Everything in Website Sprint",
      "Design system",
      "Motion design",
      "Post-launch support",
    ],
  },
]
