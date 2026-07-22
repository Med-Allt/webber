"use client"

import * as React from "react"
import { motion } from "motion/react"
import { useMotionOk } from "./use-motion-ok"
import { cn } from "@/lib/utils"

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const motionOk = useMotionOk()
  const ref = React.useRef<HTMLDivElement>(null)
  const [inView, setInView] = React.useState(false)

  // A plain IntersectionObserver instead of motion's `whileInView`: on
  // narrow viewports, content already in view at load (e.g. the hero) could
  // mount before layout (dvh, web fonts) settles, so the first intersection
  // check missed it and nothing nudged it again until a scroll happened —
  // leaving above-the-fold copy invisible until the user scrolled.
  React.useEffect(() => {
    if (!motionOk || inView) return
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [motionOk, inView])

  // Always the same element type, so flipping to the static branch after mount
  // re-renders in place instead of remounting (which would flash the content).
  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={motionOk ? { opacity: 0, y: 24 } : false}
      animate={motionOk && inView ? { opacity: 1, y: 0 } : undefined}
      transition={
        motionOk
          ? { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
          : { duration: 0 }
      }
    >
      {children}
    </motion.div>
  )
}
