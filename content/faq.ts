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
        "Ein síða tekur um viku, heil margra síðna vefsíða um þrjár vikur og samsett vörumerkja- og vefverkefni um fimm vikur. Þú færð fyrstu drög innan 72 klukkustunda frá byrjun í öllum tilvikum.",
    },
    {
      question: "Hvað þarfið þið frá okkur til að byrja?",
      answer:
        "Samtal um markmið ykkar, hvaða vörumerkjaefni sem þegar er til, og einn aðila með umboð til að samþykkja vinnu. Vantar texta? Það er í lagi — við drögum hann saman og þið yfirfarið.",
    },
    {
      question: "Hvernig virkar verðlagning?",
      answer:
        "Föst tilboð áður en við byrjum, byggð á umfangi frekar en klukkustundum. Breytingar eru innifaldar. Ef umfang breytist í raun endurmetum við tilboðið áður en vinnan hefst, aldrei eftir á.",
    },
    {
      question: "Hversu margar breytingar fáum við?",
      answer:
        "Ekkert hámark. Við förum yfir vinnuna saman jafnóðum í stað þess að safna endurgjöf fyrir áfangaskil, sem er ástæðan fyrir því að endalausar breytingahringrásir eiga sér ekki stað í reynd.",
    },
    {
      question: "Getum við breytt síðunni sjálf á eftir?",
      answer:
        "Já. Við setjum upp CMS þar sem það á við og tökum upp yfirferð sem nær yfir efnisbreytingar, nýjar síður og útgáfu. Þið eigið hýsingarsafnið og alla reikninga.",
    },
    {
      question: "Vinnið þið með okkur eftir að síðan fer í loftið?",
      answer:
        "Við fylgjum eftir eftir útgáfu sem hluta af hverju verkefni. Fyrir utan það tökum við að okkur viðvarandi vinnu fyrir fáa valda viðskiptavini í einu.",
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
