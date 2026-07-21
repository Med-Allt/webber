/**
 * PLACEHOLDER CONTENT — fabricated for layout validation only.
 * Client names, companies, quotes, and prices are invented. Replace with real,
 * attributable content before this site is published.
 */

export type Phase = { name: string; steps: { title: string; body: string }[] }

export const phases: Phase[] = [
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
]
