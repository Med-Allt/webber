/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

import { routing, type Locale } from "@/i18n/routing"

export type Pillar = { label: string; title: string; body: string }

const servicesIntro: Record<Locale, string> = {
  is: "Við sameinum vefsíður, markaðssetningu og vörumerkjagerð í eina skýra heild.",
  en: "We handle the whole arc — identity, interface, and implementation — so nothing gets lost between the people who design it and the people who build it.",
}

const pillars: Record<Locale, Pillar[]> = {
  is: [
    {
      label: "01",
      title: "Vefsíður",
      body: "Við hönnum og smíðum vefsíður sem eru hraðar, notendavænar og byggðar með skýrt markmið. Við vinnum meðal annars með Framer, Shopify, WordPress og sérsniðnar lausnir í Next.js og React — allt eftir þörfum verkefnisins.",
    },
    {
      label: "02",
      title: "Markaðssetning",
      body: "Við hjálpum fyrirtækjum að ná til rétta fólksins með markvissri stafrænni markaðssetningu. Frá stefnumótun og efnisgerð yfir í auglýsingar, mælingar og áframhaldandi þróun.",
    },
    {
      label: "03",
      title: "Vörumerki",
      body: "Við mótum vörumerki sem eru skýr, samræmd og auðþekkjanleg. Frá stefnumótun og sjónrænni ásýnd til merkis, lita, leturs og annarra þátta sem styrkja ímynd fyrirtækisins.",
    },
  ],
  en: [
    {
      label: "01",
      title: "Branding",
      body: "Naming, logo systems, type and colour, and the guidelines that keep it coherent once we hand it over. We design identities that survive contact with a real product.",
    },
    {
      label: "02",
      title: "Web Design",
      body: "Structure, story, and interface. We design every breakpoint and every state, then prototype the motion so you approve the real thing rather than a static picture of it.",
    },
    {
      label: "03",
      title: "Development",
      body: "Production front-end builds in Next.js, fast by default and accessible by default. CMS wiring where you need to publish without us.",
    },
  ],
}

export function getServicesIntro(locale: string): string {
  return servicesIntro[locale as Locale] ?? servicesIntro[routing.defaultLocale]
}

export function getPillars(locale: string): Pillar[] {
  return pillars[locale as Locale] ?? pillars[routing.defaultLocale]
}
