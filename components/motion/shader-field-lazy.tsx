"use client"

import * as React from "react"
import dynamic from "next/dynamic"

/**
 * The shader renderer touches browser-only GPU APIs, so it must never run
 * during SSR. It is also large — loading it lazily keeps it out of the
 * initial bundle.
 */
const ShaderField = dynamic(
  () => import("./shader-field").then((m) => m.ShaderField),
  { ssr: false }
)

type Props = {
  variant?: "hero" | "deep"
  className?: string
  /**
   * Defer mounting until the host section is near the viewport. Each field
   * owns a GPU context, so anything below the fold should set this.
   */
  whenInView?: boolean
}

export function ShaderFieldLazy({ whenInView, ...props }: Props) {
  const hostRef = React.useRef<HTMLDivElement>(null)
  const [show, setShow] = React.useState(!whenInView)

  React.useEffect(() => {
    if (!whenInView || show) return
    const el = hostRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: "300px 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [whenInView, show])

  if (!whenInView) return <ShaderField {...props} />

  return (
    <div ref={hostRef} aria-hidden="true" className="absolute inset-0 z-10">
      {show && <ShaderField {...props} />}
    </div>
  )
}
