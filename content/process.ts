/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

import { routing, type Locale } from "@/i18n/routing"

export type Phase = { name: string; steps: { title: string; body: string }[] }

const phases: Record<Locale, Phase[]> = {
  is: [
    {
      name: "Byrjun",
      steps: [
        {
          title: "Kynningarsamtal",
          body: "Frítt 30 mínútna samtal þar sem við förum yfir fyrirtækið, markmiðin og hvert þú vilt stefna.",
        },
        {
          title: "Tillaga að verkefninu",
          body: "Við leggjum fram skýra tillögu að umfangi, verði og tímaramma, svo þú vitir nákvæmlega hvað verkefnið felur í sér áður en vinnan hefst.",
        },
        {
          title: "Bein samskipti",
          body: "Þú ert í beinu sambandi við okkur frá fyrsta degi og færð reglulegar upplýsingar um stöðu verkefnisins.",
        },
      ],
    },
    {
      name: "Vinnuferlið",
      steps: [
        {
          title: "Stefna",
          body: "Við förum yfir núverandi stöðu, markhópinn og markmiðin og mótum skýra stefnu fyrir næstu skref.",
        },
        {
          title: "Efni og uppbygging",
          body: "Við skipuleggjum efnið, mótum skilaboðin og ákveðum hvernig fyrirtækið birtist á vefnum og í auglýsingum.",
        },
        {
          title: "Hönnun og útfærsla",
          body: "Við hönnum og setjum upp vefsíðuna, auglýsingarnar og annað efni með áherslu á skýra framsetningu, góða upplifun og sterka heild.",
        },
        {
          title: "Yfirferð og breytingar",
          body: "Þú færð að sjá vinnuna jafnóðum og við förum saman yfir það sem þarf að laga þar til allt er komið á sinn stað.",
        },
      ],
    },
    {
      name: "Birting og áframhald",
      steps: [
        {
          title: "Birting og uppsetning",
          body: "Við setjum vefsíðuna í loftið og göngum frá uppsetningu á auglýsingum í Meta, Google og öðrum viðeigandi miðlum.",
        },
        {
          title: "Umsjón og uppfærslur",
          body: "Við sjáum um áframhaldandi breytingar og uppfærslur, hvort sem það eru nýjar vörur, bloggfærslur, efni eða auglýsingar.",
        },
        {
          title: "Áframhaldandi þjónusta",
          body: "Við sjáum um að þróa vefsíðuna og markaðssetninguna áfram, svo hvort tveggja haldist í takt við fyrirtækið og markmiðin.",
        },
      ],
    },
  ],
  en: [
    {
      name: "Kickoff",
      steps: [
        {
          title: "Intro call",
          body: "A free 30-minute session to understand your goals and decide whether we're the right studio for the job. No pitch deck.",
        },
        {
          title: "Fixed quote",
          body: "You get a written scope and a final number. Revisions are included. There are no hourly surprises later.",
        },
        {
          title: "Comms setup",
          body: "A shared channel and live access to the working file, so you can see progress any day of the week rather than at milestones.",
        },
      ],
    },
    {
      name: "Execution",
      steps: [
        {
          title: "Discovery",
          body: "We audit what exists, interview the people who sell your product, and agree on what the site actually needs to do.",
        },
        {
          title: "Structure",
          body: "Narrative and wireframes first. We settle what each section argues before anyone picks a typeface.",
        },
        {
          title: "Design & build",
          body: "High-fidelity design and front-end build run together, so what you approve is what ships — not an approximation of it.",
        },
        {
          title: "Revisions",
          body: "We review together as we go. No revision cap; we work until it's right.",
        },
      ],
    },
    {
      name: "Handoff",
      steps: [
        {
          title: "Delivery",
          body: "We deploy to your infrastructure and connect your domain. You own the repository and the accounts.",
        },
        {
          title: "Walkthrough",
          body: "A recorded session covering how to edit content, add pages, and deploy, so your team is not dependent on us.",
        },
        {
          title: "Follow-up",
          body: "We check in after launch to see how it's performing against the goals we set at kickoff.",
        },
      ],
    },
  ],
}

export function getPhases(locale: string): Phase[] {
  return phases[locale as Locale] ?? phases[routing.defaultLocale]
}
