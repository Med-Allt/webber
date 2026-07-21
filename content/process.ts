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
          body: "Frítt 30 mínútna samtal til að skilja markmið ykkar og ákveða hvort við séum rétta stofan fyrir verkefnið. Engin sölukynning.",
        },
        {
          title: "Fast tilboð",
          body: "Þið fáið skriflegt umfang og lokatölu. Breytingar eru innifaldar. Engar óvæntar klukkustundagjaldskrár síðar meir.",
        },
        {
          title: "Samskiptaleiðir",
          body: "Sameiginleg rás og beinn aðgangur að vinnuskránni, svo þið sjáið framvindu hvaða dag sem er í stað þess að bíða eftir áföngum.",
        },
      ],
    },
    {
      name: "Framkvæmd",
      steps: [
        {
          title: "Rannsókn",
          body: "Við skoðum það sem fyrir er, tölum við fólkið sem selur vöruna ykkar, og komum okkur saman um hvað síðan þarf raunverulega að gera.",
        },
        {
          title: "Uppbygging",
          body: "Frásögn og vírramma fyrst. Við ákveðum hvað hver hluti á að segja áður en nokkur velur leturgerð.",
        },
        {
          title: "Hönnun & smíði",
          body: "Fullkláruð hönnun og framendasmíði fara fram samhliða, svo það sem þið samþykkið er það sem fer í loftið — ekki nálgun á það.",
        },
        {
          title: "Breytingar",
          body: "Við förum yfir vinnuna saman jafnóðum. Ekkert hámark á breytingum; við höldum áfram þar til allt er rétt.",
        },
      ],
    },
    {
      name: "Afhending",
      steps: [
        {
          title: "Útgáfa",
          body: "Við setjum upp á ykkar innviði og tengjum lénið. Þið eigið hýsingarsafnið og alla reikninga.",
        },
        {
          title: "Yfirferð",
          body: "Upptekin yfirferð sem sýnir hvernig á að breyta efni, bæta við síðum og gefa út, svo teymið ykkar sé ekki háð okkur.",
        },
        {
          title: "Eftirfylgni",
          body: "Við fylgjum eftir útgáfu til að sjá hvernig síðan stendur sig miðað við markmiðin sem sett voru í byrjun.",
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
