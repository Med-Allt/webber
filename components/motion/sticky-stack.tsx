"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { useMotionOk } from "./use-motion-ok"

/**
 * Takes pre-rendered children so server components can compose it without
 * passing a render function across the client boundary.
 */
export function StickyStack({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const motionOk = useMotionOk()
  const items = React.Children.toArray(children)

  if (!motionOk) {
    return (
      <div className={cn("flex flex-col gap-8", className)}>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    )
  }

  return (
    <div className={cn("flex flex-col gap-8 md:block", className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className="md:sticky"
          style={{ top: `calc(7rem + ${i * 1.25}rem)`, zIndex: i + 1 }}
        >
          <div style={{ paddingBottom: `${i * 0.75}rem` }}>{item}</div>
        </div>
      ))}
    </div>
  )
}
