import { getLocale, getTranslations } from "next-intl/server"
import { getFaqItems } from "@/content/faq"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { SectionLabel } from "./section-label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export async function Faq() {
  const locale = await getLocale()
  const faqItems = getFaqItems(locale)
  const site = getSite(locale)
  const t = await getTranslations({ locale, namespace: "faq" })
  const tLabel = await getTranslations({ locale, namespace: "sectionLabels" })

  return (
    <section id="faq" className="py-[var(--spacing-section)]">
      <Container className="grid gap-14 md:grid-cols-[1fr_1.15fr] md:gap-20">
        <div>
          <SectionLabel className="mb-6">{tLabel("questions")}</SectionLabel>
          <h2 className="text-3xl leading-[1.08] font-semibold tracking-[-0.03em] text-balance md:text-5xl">
            {t("heading")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {t("bodyLead")}
            <br />
            {t("bodyPrefix")}{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-ink underline underline-offset-4 transition-colors hover:text-accent"
            >
              {site.email}
            </a>
            .
          </p>
        </div>

        <Accordion className="w-full">
          {faqItems.map((f, i) => (
            <AccordionItem key={f.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
