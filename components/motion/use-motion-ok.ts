"use client"

import { useReducedMotion } from "motion/react"

/**
 * Single source of truth for whether animation may run.
 * Every motion primitive consults this and degrades to a static render.
 */
export function useMotionOk(): boolean {
  return !useReducedMotion()
}
