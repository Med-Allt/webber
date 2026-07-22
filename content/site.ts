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
    brand: "Með Allt",
    email: "hey@webber.studio",
    bookingUrl: "https://cal.com/webber/intro",
    navLinks: [
      { label: "Heim", href: "#top" },
      { label: "Um Okkur", href: "#process" },
      { label: "Þjónusta", href: "#services" },
      { label: "Verkefnin Okkar", href: "#work" },
    ],
    socials,
    hero: {
      headline: "Allt sem fyrirtækið þitt þarf á netinu",
      sub: "Vertu með allt á hreinu.",
      cta: "Bóka Fund",
      trust: "Treyst af teymum sem klára verkefni",
    },
    clients,
  },
  en: {
    brand: "Með Allt",
    email: "hey@webber.studio",
    bookingUrl: "https://cal.com/webber/intro",
    navLinks: [
      { label: "Home", href: "#top" },
      { label: "About Us", href: "#process" },
      { label: "Services", href: "#services" },
      { label: "Our Work", href: "#work" },
    ],
    socials,
    hero: {
      headline: "Everything your business needs online",
      sub: "Vertu með allt á hreinu.",
      cta: "Book a Call",
      trust: "Trusted by teams who ship",
    },
    clients,
  },
}

export function getSite(locale: string): SiteContent {
  return site[locale as Locale] ?? site[routing.defaultLocale]
}
