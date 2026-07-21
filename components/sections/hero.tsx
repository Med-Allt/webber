import { ArrowRight } from "lucide-react"
import { site } from "@/content/site"
import { Container } from "./container"
import { Reveal } from "@/components/motion/reveal"
import { MagneticButton } from "@/components/motion/magnetic-button"

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-20 md:pt-52 md:pb-28">
      {/* Soft radial lift behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(196,81,42,0.07),transparent_70%)]"
      />
      <Container className="relative flex flex-col items-center text-center">
        <Reveal>
          <div
            aria-hidden="true"
            className="mb-14 flex size-16 items-center justify-center rounded-full bg-ink text-ground shadow-[0_18px_40px_-12px_rgba(10,10,10,0.45)]"
          >
            <span className="text-xl font-semibold">W</span>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-[15ch] text-[length:var(--text-display)] leading-[0.95] font-semibold tracking-[-0.035em] text-balance">
            {site.hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-8 max-w-[54ch] text-base leading-relaxed text-muted md:text-lg">
            {site.hero.sub}
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12">
            <MagneticButton href={site.bookingUrl}>
              {site.hero.cta}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </MagneticButton>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
