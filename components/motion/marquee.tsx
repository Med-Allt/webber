"use client"

import * as React from "react"
import { motion } from "motion/react"
import { useMotionOk } from "./use-motion-ok"
import { cn } from "@/lib/utils"

export function Marquee({
  children,
  speed = 32,
  className,
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const motionOk = useMotionOk()

  if (!motionOk) {
    return (
      <div className={cn("flex flex-wrap justify-center gap-12", className)}>
        {children}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <motion.div
        className="flex w-max gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <div className="flex shrink-0 gap-16">{children}</div>
        <div className="flex shrink-0 gap-16" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
