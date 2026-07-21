import { ArrowRight } from "lucide-react"
import { site } from "@/content/site"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import { ThemeScrollZone } from "@/components/motion/theme-scroll-zone"
import { MagneticButton } from "@/components/motion/magnetic-button"

export function Cta() {
  return (
    <ThemeScrollZone className="rounded-t-[40px] py-[var(--spacing-section)]">
      <Container>
        <SectionLabel className="mb-12">let it happen</SectionLabel>

        <h2 className="max-w-[14ch] text-[length:var(--text-display)] leading-[0.95] font-semibold tracking-[-0.035em] text-balance">
          Ready to build something worth looking at?
        </h2>

        <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-ink-dark/55">
          Book a free discovery session, or email us at{" "}
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
            Book an intro call
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </MagneticButton>
        </div>

        <footer className="mt-28 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-ink-dark/40">
          <p>
            © {site.brand}, 2026
          </p>
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
