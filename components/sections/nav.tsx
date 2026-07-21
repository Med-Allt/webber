"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { site } from "@/content/site"
import { Container } from "./container"
import { cn } from "@/lib/utils"

export function Nav() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const toggleRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && "border-b border-hairline bg-ground/70 backdrop-blur-xl"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="text-lg font-semibold tracking-[-0.02em]">
          {site.brand}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {site.navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={site.bookingUrl}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ground transition-colors hover:bg-accent"
          >
            Book a call
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-50 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-ground px-6 md:hidden"
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
          <a
            href={site.bookingUrl}
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-fit rounded-full bg-ink px-6 py-3.5 text-base font-medium text-ground"
          >
            Book a call
          </a>
        </div>
      )}
    </header>
  )
}
