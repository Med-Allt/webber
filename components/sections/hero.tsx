import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { getLocale } from "next-intl/server"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { Reveal } from "@/components/motion/reveal"
import { MagneticButton } from "@/components/motion/magnetic-button"
import { ShaderFieldLazy } from "@/components/motion/shader-field-lazy"

export async function Hero() {
  const locale = await getLocale()
  const site = getSite(locale)

  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden pt-40 pb-20 md:pt-52 md:pb-28"
    >
      {/* Static fallback that also underpaints the shader while it boots. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(196,81,42,0.07),transparent_70%)]"
      />

      <ShaderFieldLazy variant="hero" />

      {/* Keeps the headline legible over the shader's brighter passages. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,rgba(250,250,249,0.72),transparent_75%)]"
      />
      <Container className="relative z-30 flex flex-col items-center text-center">
        <Reveal>
          <Image
            src="/brand/med-allt-logo.png"
            alt={site.brand}
            width={202}
            height={87}
            priority
            className="mb-14 h-11 w-auto md:h-12"
          />
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
