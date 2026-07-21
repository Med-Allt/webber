"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import { useMotionOk } from "./use-motion-ok"
import { cn } from "@/lib/utils"

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"

export function MagneticButton({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const motionOk = useMotionOk()
  const ref = React.useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 20 })
  const sy = useSpring(y, { stiffness: 220, damping: 20 })

  if (!motionOk) {
    return (
      <a href={href} className={cn(BASE, className)}>
        {children}
      </a>
    )
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={cn(BASE, className)}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        x.set((e.clientX - (r.left + r.width / 2)) * 0.28)
        y.set((e.clientY - (r.top + r.height / 2)) * 0.28)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.a>
  )
}
