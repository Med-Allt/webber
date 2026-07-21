/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

import { routing, type Locale } from "@/i18n/routing"

export type Pillar = { label: string; title: string; body: string }

const servicesIntro: Record<Locale, string> = {
  is: "Við sjáum um allan bogann — vörumerki, viðmót og útfærslu — svo ekkert týnist á milli þeirra sem hanna og þeirra sem smíða.",
  en: "We handle the whole arc — identity, interface, and implementation — so nothing gets lost between the people who design it and the people who build it.",
}

const pillars: Record<Locale, Pillar[]> = {
  is: [
    {
      label: "01",
      title: "Vörumerki",
      body: "Nafngift, merkjakerfi, letur og litir, og leiðbeiningar sem halda öllu samræmdu eftir að við skilum af okkur. Við hönnum vörumerki sem lifa af raunverulega notkun.",
    },
    {
      label: "02",
      title: "Vefhönnun",
      body: "Uppbygging, frásögn og viðmót. Við hönnum hvert brotamark og hvert ástand, og frumgerðum hreyfinguna svo þið samþykkið það raunverulega frekar en kyrra mynd af því.",
    },
    {
      label: "03",
      title: "Þróun",
      body: "Framleiðslutilbúin framendasmíði í Next.js, hröð sjálfgefið og aðgengileg sjálfgefið. CMS tengingar þar sem þið þurfið að birta án okkar.",
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
