/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

import { routing, type Locale } from "@/i18n/routing"

export type NavLink = { label: string; href: string }
export type Social = { label: string; href: string }

export type SiteContent = {
  brand: string
  email: string
  bookingUrl: string
  navLinks: NavLink[]
  socials: Social[]
  hero: { headline: string; sub: string; cta: string; trust: string }
  clients: string[]
}

const socials: Social[] = [
  { label: "X", href: "https://x.com/webberstudio" },
  { label: "LinkedIn", href: "https://linkedin.com/company/webberstudio" },
]

const clients = ["CGS-team", "Hoverla Soft", "Mlynivska Chaika"]

const site: Record<Locale, SiteContent> = {
  is: {
    brand: "Webber",
    email: "hey@webber.studio",
    bookingUrl: "https://cal.com/webber/intro",
    navLinks: [
      { label: "Vinna", href: "#work" },
      { label: "Þjónusta", href: "#services" },
      { label: "Ferli", href: "#process" },
      { label: "Spurningar", href: "#faq" },
    ],
    socials,
    hero: {
      headline: "Við byggjum vörumerki sem sýna að þeim er alvara",
      sub: "Webber er hönnunar- og þróunarstofa. Við mótum vörumerki, hönnum vefsíður og skilum þeim tilbúnum — svo sprotafyrirtæki hætta að líta út eins og sprotafyrirtæki.",
      cta: "Bóka kynningarsamtal",
      trust: "Treyst af teymum sem klára verkefni",
    },
    clients,
  },
  en: {
    brand: "Webber",
    email: "hey@webber.studio",
    bookingUrl: "https://cal.com/webber/intro",
    navLinks: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
    socials,
    hero: {
      headline: "We build brands that look like they mean it",
      sub: "Webber is a design and development studio. We shape identities, design websites, and ship them — so early-stage teams stop looking early-stage.",
      cta: "Book an intro call",
      trust: "Trusted by teams who ship",
    },
    clients,
  },
}

export function getSite(locale: string): SiteContent {
  return site[locale as Locale] ?? site[routing.defaultLocale]
}
