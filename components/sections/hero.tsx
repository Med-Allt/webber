import { ArrowRight } from "lucide-react"
import { getLocale } from "next-intl/server"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { Reveal } from "@/components/motion/reveal"
import { MagneticButton } from "@/components/motion/magnetic-button"

export async function Hero() {
  const locale = await getLocale()
  const site = getSite(locale)

  return (
    <section
      id="top"
      className="flex flex-1 flex-col justify-center pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <Container className="relative z-30 flex flex-col items-center text-center">
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
