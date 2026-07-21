import { pillars, servicesIntro } from "@/content/services"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import { Reveal } from "@/components/motion/reveal"

export function Services() {
  return (
    <section id="services" className="py-[var(--spacing-section)]">
      <Container>
        <SectionLabel className="mb-12">what we do</SectionLabel>

        <Reveal>
          <p className="max-w-[26ch] text-3xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance md:max-w-[30ch] md:text-5xl">
            {servicesIntro}
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-3 md:gap-10">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t border-hairline pt-6">
                <span className="text-xs tracking-[0.14em] text-accent">
                  {p.label}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em]">
                  {p.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
