import { phases } from "@/content/process"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import { Reveal } from "@/components/motion/reveal"

export function Process() {
  return (
    <section id="process" className="py-[var(--spacing-section)]">
      <Container>
        <SectionLabel className="mb-12">the process</SectionLabel>

        <Reveal>
          <p className="max-w-[22ch] text-3xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance md:text-5xl">
            Simple and transparent at every step, from zero to live.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-14">
          {phases.map((phase, pi) => (
            <div
              key={phase.name}
              className="grid gap-8 border-t border-hairline pt-8 md:grid-cols-[220px_1fr]"
            >
              <Reveal>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {phase.name}
                </h3>
              </Reveal>

              <div className="grid gap-8 sm:grid-cols-2">
                {phase.steps.map((step, si) => (
                  <Reveal key={step.title} delay={si * 0.06}>
                    <div>
                      <span className="text-xs tracking-[0.14em] text-accent">
                        {String(pi + 1).padStart(2, "0")}.
                        {String(si + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-3 text-lg font-medium">{step.title}</h4>
                      <p className="mt-2 text-base leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
