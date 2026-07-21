import { ArrowRight } from "lucide-react"
import { getLocale, getTranslations } from "next-intl/server"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import { ThemeScrollZone } from "@/components/motion/theme-scroll-zone"
import { MagneticButton } from "@/components/motion/magnetic-button"
import { ShaderFieldLazy } from "@/components/motion/shader-field-lazy"
import { LocalTime } from "./local-time"

export async function Cta() {
  const locale = await getLocale()
  const site = getSite(locale)
  const t = await getTranslations({ locale, namespace: "cta" })
  const tLabel = await getTranslations({ locale, namespace: "sectionLabels" })

  return (
    <ThemeScrollZone className="relative isolate overflow-hidden rounded-t-[40px] py-[var(--spacing-section)]">
      <ShaderFieldLazy variant="deep" whenInView className="opacity-90" />

      {/* Holds contrast for the footer text over the shader. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_right,rgba(10,10,10,0.82),rgba(10,10,10,0.12))]"
      />

      <Container className="relative z-30">
        <SectionLabel className="mb-12">{tLabel("letItHappen")}</SectionLabel>

        <h2 className="max-w-[14ch] text-[length:var(--text-display)] leading-[0.95] font-semibold tracking-[-0.035em] text-balance">
          {t("heading")}
        </h2>

        <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-ink-dark/55">
          {t("bodyPrefix")}{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-ink-dark underline underline-offset-4"
          >
            {site.email}
          </a>
          .
        </p>

        <div className="mt-12">
          <MagneticButton
            href={site.bookingUrl}
            className="bg-ground text-ink hover:bg-accent hover:text-ground"
          >
            {site.hero.cta}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </MagneticButton>
        </div>

        <footer className="mt-28 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-ink-dark/40">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <p>© {site.brand}, 2026</p>
            <LocalTime className="flex items-center" />
          </div>
          <ul className="flex gap-6">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="transition-colors hover:text-ink-dark"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </footer>
      </Container>
    </ThemeScrollZone>
  )
}
