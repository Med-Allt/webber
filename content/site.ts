/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

export type NavLink = { label: string; href: string }
export type Social = { label: string; href: string }

export const site: {
  brand: string
  email: string
  bookingUrl: string
  navLinks: NavLink[]
  socials: Social[]
  hero: { headline: string; sub: string; cta: string; trust: string }
  clients: string[]
} = {
  brand: "Webber",
  email: "hey@webber.studio",
  bookingUrl: "https://cal.com/webber/intro",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
  ],
  socials: [
    { label: "X", href: "https://x.com/webberstudio" },
    { label: "LinkedIn", href: "https://linkedin.com/company/webberstudio" },
  ],
  hero: {
    headline: "We build brands that look like they mean it",
    sub: "Webber is a design and development studio. We shape identities, design websites, and ship them — so early-stage teams stop looking early-stage.",
    cta: "Book an intro call",
    trust: "Trusted by teams who ship",
  },
  clients: ["CGS-team", "Hoverla Soft", "Mlynivska Chaika"],
}
