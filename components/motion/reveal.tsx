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

  // Always the same element type, so flipping to the static branch after mount
  // re-renders in place instead of remounting (which would flash the content).
  return (
    <motion.div
      className={cn(className)}
      initial={motionOk ? { opacity: 0, y: 24 } : false}
      whileInView={motionOk ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-8% 0px" }}
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
