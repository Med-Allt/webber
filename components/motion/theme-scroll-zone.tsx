import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Inverts the palette for its subtree. Colour-only transition, so it needs no
 * reduced-motion gate.
 */
export function ThemeScrollZone({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      id={id}
      className={cn("bg-ground-dark text-ink-dark", className)}
    >
      {children}
    </section>
  )
}
