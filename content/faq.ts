/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

import { routing, type Locale } from "@/i18n/routing"

export type FaqItem = { question: string; answer: string }

const faqItems: Record<Locale, FaqItem[]> = {
  is: [
    {
      question: "Hversu langan tíma tekur verkefni?",
      answer:
        "Tímalengdin fer eftir umfangi verkefnisins. Flestar vefsíður taka á bilinu 2–6 vikur, en stærri verkefni geta tekið lengri tíma. Við setjum alltaf skýran tímaramma áður en verkefnið hefst.",
    },
    {
      question: "Hvað kostar að láta gera vefsíðu?",
      answer:
        "Verðið fer eftir umfangi, markmiðum og þeim lausnum sem henta verkefninu best. Eftir kynningarsamtal færð þú skýra tillögu með verði og umfangi áður en vinnan hefst.",
    },
    {
      question: "Bjóðið þið upp á markaðssetningu og auglýsingar?",
      answer:
        "Já. Við sjáum um stafræna markaðssetningu, þar á meðal auglýsingar á Meta (Facebook & Instagram) og Google, ásamt stefnumótun, efnisgerð og áframhaldandi þróun þegar þess er þörf.",
    },
    {
      question: "Hvaða kerfi og lausnir vinnið þið með?",
      answer:
        "Við vinnum meðal annars með Framer, Shopify, WordPress og sérsniðnar lausnir í Next.js og React. Við veljum alltaf þá lausn sem hentar fyrirtækinu og markmiðunum best.",
    },
    {
      question: "Bjóðið þið upp á umsjón og uppfærslur á vefsíðunni eftir afhendingu?",
      answer:
        "Já. Við sjáum um áframhaldandi umsjón, uppfærslur og breytingar eftir þörfum, hvort sem um er að ræða nýtt efni, bloggfærslur, vörur í netverslun eða aðrar viðbætur.",
    },
    {
      question: "Hvernig hefst samstarfið?",
      answer:
        "Samstarfið hefst á stuttu og óskuldbindandi kynningarsamtali þar sem við förum yfir fyrirtækið, markmiðin og þarfirnar. Að því loknu leggjum við fram tillögu að verkefninu og getum hafið vinnu þegar þú ert tilbúin(n).",
    },
  ],
  en: [
    {
      question: "How long does a project take?",
      answer:
        "A single-page site takes about a week, a full multi-page site about three, and a combined brand and web engagement about five. You get a first draft within 72 hours of kickoff in every case.",
    },
    {
      question: "What do you need from us to start?",
      answer:
        "A conversation about your goals, whatever brand assets already exist, and one person with authority to approve work. Missing copy is fine — we draft it and you edit.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Fixed quote before we begin, based on scope rather than hours. Revisions are included. If scope genuinely changes we re-quote before doing the work, never after.",
    },
    {
      question: "How many revisions do we get?",
      answer:
        "No cap. We review together throughout rather than saving feedback for milestones, which is why runaway revision cycles do not happen in practice.",
    },
    {
      question: "Can we edit the site ourselves afterwards?",
      answer:
        "Yes. We wire up a CMS where it makes sense and record a walkthrough covering content edits, new pages, and deploys. You own the repository and every account.",
    },
    {
      question: "Do you work with us after launch?",
      answer:
        "We check in after launch as part of every project. Beyond that we take on retained work for a small number of clients at a time.",
    },
  ],
}

export function getFaqItems(locale: string): FaqItem[] {
  return faqItems[locale as Locale] ?? faqItems[routing.defaultLocale]
}
