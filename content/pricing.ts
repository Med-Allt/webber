/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

import { routing, type Locale } from "@/i18n/routing"

export type Package = {
  name: string
  price: string
  summary: string
  highlights: string[]
  features: string[]
  featured?: boolean
}

const packages: Record<Locale, Package[]> = {
  is: [
    {
      name: "Vörumerkjaferð",
      price: "$6k",
      summary:
        "Heilstætt vörumerkjakerfi: aðstoð við nafngift, merki, letur, litir og notkunarleiðbeiningar.",
      highlights: ["2 vikur", "Vörumerkjakerfi", "Drög innan 72 klst."],
      features: [
        "Merkjakerfi",
        "Letur & litir",
        "Vörumerkjahandbók",
        "Sniðmát fyrir samfélagsmiðla & tölvupóst",
        "Afhending eigna",
      ],
    },
    {
      name: "Vefsíðuferð",
      price: "$9k",
      summary:
        "Margra síðna markaðsvefur hannaður og smíðaður til að skila árangri, allt að tíu síður.",
      highlights: ["3 vikur", "Allt að 10 síður", "Drög innan 72 klst."],
      features: [
        "Hönnun + Next.js smíði",
        "Sérsniðin grafík",
        "Hreyfimyndir",
        "CMS söfn",
        "Fyllilega svarhæft",
        "404 & lagalegar síður",
        "Favicon & OpenGraph",
      ],
      featured: true,
    },
    {
      name: "Vörumerki + Vefur",
      price: "frá $14k",
      summary:
        "Allur bogastíllinn — vörumerki og vefsíða byggð saman svo þau tali sama máli.",
      highlights: ["5 vikur", "Allt innifalið", "Drög innan 72 klst."],
      features: [
        "Allt í Vörumerkjaferð",
        "Allt í Vefsíðuferð",
        "Hönnunarkerfi",
        "Hreyfihönnun",
        "Stuðningur eftir útgáfu",
      ],
    },
  ],
  en: [
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
  ],
}

export function getPackages(locale: string): Package[] {
  return packages[locale as Locale] ?? packages[routing.defaultLocale]
}
