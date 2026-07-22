"use client"

import * as React from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { getSite } from "@/content/site"
import { Container } from "./container"
import { LanguageSwitcher } from "./language-switcher"
import { cn } from "@/lib/utils"

export function Nav() {
  const locale = useLocale()
  const site = getSite(locale)
  const t = useTranslations("nav")
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [overDark, setOverDark] = React.useState(false)
  const toggleRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Invert the bar while it overlaps a dark zone, otherwise the light
  // translucent background reads as a grey slab over the dark sections.
  React.useEffect(() => {
    const zones = Array.from(
      document.querySelectorAll<HTMLElement>('[data-theme-zone="dark"]')
    )
    if (zones.length === 0) return

    const check = () => {
      const probe = 40 // just below the bar's vertical midpoint
      setOverDark(
        zones.some((z) => {
          const r = z.getBoundingClientRect()
          return r.top <= probe && r.bottom >= probe
        })
      )
    }
    check()
    window.addEventListener("scroll", check, { passive: true })
    window.addEventListener("resize", check)
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [])

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        overDark && "text-ink-dark"
      )}
    >
      {/* Blurred backdrop lives on its own layer rather than the header
          itself — backdrop-blur is a filter, and a filter on the header
          would make it the containing block for the mobile menu's
          `fixed inset-0`, shrinking that overlay down to the header's own
          height instead of the full viewport. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 transition-colors duration-500",
          scrolled &&
            (overDark
              ? "border-b border-white/10 bg-ground-dark/60 backdrop-blur-xl"
              : "border-b border-hairline bg-ground/70 backdrop-blur-xl")
        )}
      />

      <Container className="relative flex h-20 items-center justify-between">
        <a href="#top" className="shrink-0">
          <Image
            src="/brand/med-allt-logo.png"
            alt={site.brand}
            width={202}
            height={87}
            priority
            className={cn("h-7 w-auto transition-[filter] duration-500", overDark && "invert hue-rotate-180")}
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm transition-colors",
                overDark
                  ? "text-ink-dark/60 hover:text-ink-dark"
                  : "text-muted hover:text-ink"
              )}
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher
            className={overDark ? "text-ink-dark/60" : "text-muted"}
          />
          <a
            href={site.bookingUrl}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-ground",
              overDark ? "bg-ground text-ink" : "bg-ink text-ground"
            )}
          >
            {t("bookCall")}
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-50 md:hidden"
          aria-expanded={open}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("menuLabel")}
          className={cn(
            "fixed inset-0 z-40 flex flex-col justify-center gap-1 px-6 md:hidden",
            overDark ? "bg-ground-dark text-ink-dark" : "bg-ground text-ink"
          )}
        >
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-4xl font-semibold tracking-[-0.03em]"
            >
              {l.label}
            </a>
          ))}
          <LanguageSwitcher className="mt-6 text-lg" />
          <a
            href={site.bookingUrl}
            onClick={() => setOpen(false)}
            className={cn(
              "mt-8 inline-flex w-fit rounded-full px-6 py-3.5 text-base font-medium",
              overDark ? "bg-ground text-ink" : "bg-ink text-ground"
            )}
          >
            {t("bookCall")}
          </a>
        </div>
      )}
    </header>
  )
}
