"use client"

import * as React from "react"
import { useReducedMotion } from "motion/react"

/**
 * Single source of truth for whether animation may run.
 * Every motion primitive consults this and degrades to a static render.
 *
 * The server cannot know the user's motion preference, so it always renders
 * the animated branch — and so must the client's first paint. Without that,
 * a reduced-motion visitor hydrates a plain <div> onto a server-rendered
 * motion element and React throws a hydration mismatch (#418). The real
 * preference is applied on the commit after mount.
 */
export function useMotionOk(): boolean {
  const reduced = useReducedMotion()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? !reduced : true
}
