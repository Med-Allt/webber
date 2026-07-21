import { getLocale } from "next-intl/server"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { Marquee } from "@/components/motion/marquee"

export async function Trust() {
  const locale = await getLocale()
  const site = getSite(locale)

  return (
    <section className="pb-[var(--spacing-section)]">
      <Container>
        <p className="mb-10 text-center text-xs tracking-[0.14em] text-muted uppercase">
          {site.hero.trust}
        </p>
        <Marquee>
          {site.clients.map((c) => (
            <span
              key={c}
              className="text-2xl font-medium tracking-[-0.02em] text-muted/55 md:text-3xl"
            >
              {c}
            </span>
          ))}
        </Marquee>
      </Container>
    </section>
  )
}
