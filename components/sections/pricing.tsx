import { Check } from "lucide-react"
import { getLocale, getTranslations } from "next-intl/server"
import { getPackages } from "@/content/pricing"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

export async function Pricing() {
  const locale = await getLocale()
  const packages = getPackages(locale)
  const site = getSite(locale)
  const t = await getTranslations({ locale, namespace: "pricing" })
  const tNav = await getTranslations({ locale, namespace: "nav" })
  const tLabel = await getTranslations({ locale, namespace: "sectionLabels" })

  return (
    <section id="pricing" className="py-[var(--spacing-section)]">
      <Container>
        <SectionLabel className="mb-12">{tLabel("services")}</SectionLabel>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-[28px] border p-8",
                  pkg.featured
                    ? "border-ink bg-ink text-ground"
                    : "border-hairline bg-white/50"
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {pkg.name}
                  </h3>
                  {pkg.featured && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[10px] tracking-[0.12em] uppercase">
                      {t("mostPopular")}
                    </span>
                  )}
                </div>

                <p className="mt-6 text-4xl font-semibold tracking-[-0.03em]">
                  {pkg.price}
                </p>

                <p
                  className={cn(
                    "mt-4 text-sm leading-relaxed",
                    pkg.featured ? "text-ground/60" : "text-muted"
                  )}
                >
                  {pkg.summary}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {pkg.highlights.map((h) => (
                    <li
                      key={h}
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs",
                        pkg.featured
                          ? "border-ground/25 text-ground/80"
                          : "border-hairline text-muted"
                      )}
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 flex flex-col gap-3 text-sm">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check
                        size={14}
                        aria-hidden="true"
                        className={cn(
                          "shrink-0",
                          pkg.featured ? "text-ground/50" : "text-accent"
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={site.bookingUrl}
                  className={cn(
                    "mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-colors",
                    pkg.featured
                      ? "bg-ground text-ink hover:bg-accent hover:text-ground"
                      : "bg-ink text-ground hover:bg-accent"
                  )}
                >
                  {tNav("bookCall")}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
