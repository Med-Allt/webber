"use client"

import * as React from "react"
import {
  ChromaFlow,
  FilmGrain,
  FlutedGlass,
  Shader,
  Swirl,
} from "shaders/react"
import { useMotionOk } from "./use-motion-ok"
import { cn } from "@/lib/utils"

type Variant = "hero" | "deep"

/**
 * Palettes are tuned to Webber's tokens rather than the reference spec's
 * #EFEFEF / #ff5f03, so the shader reads as part of this site.
 */
const PALETTES = {
  hero: {
    swirlA: "#ffffff",
    swirlB: "#f2f1ef",
    base: "#ffffff",
    bleed: "#c4512a",
    momentum: 13,
    radius: 3.5,
    grain: 0.05,
    highlight: 0.12,
  },
  deep: {
    swirlA: "#1c1b19",
    swirlB: "#0a0a0a",
    base: "#121211",
    bleed: "#c4512a",
    momentum: 9,
    radius: 2.6,
    grain: 0.07,
    highlight: 0.1,
  },
} satisfies Record<Variant, Record<string, string | number>>

export function ShaderField({
  variant = "hero",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  const motionOk = useMotionOk()
  const [ready, setReady] = React.useState(false)
  const p = PALETTES[variant]

  // WebGPU/WebGL init is client-only and can fail on unsupported hardware.
  // Fading in on `onReady` avoids a hard flash of an unpainted canvas.
  if (!motionOk) return null

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-10 transition-opacity duration-1000",
        ready ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <Shader
        className="h-full w-full"
        disableTelemetry
        onReady={() => setReady(true)}
      >
        <Swirl colorA={p.swirlA} colorB={p.swirlB} detail={1.7} />
        <ChromaFlow
          baseColor={p.base}
          downColor={p.bleed}
          leftColor={p.bleed}
          rightColor={p.bleed}
          upColor={p.bleed}
          momentum={p.momentum}
          radius={p.radius}
        />
        <FlutedGlass
          aberration={0.61}
          angle={31}
          frequency={8}
          highlight={p.highlight}
          highlightSoftness={0}
          lightAngle={-90}
          refraction={4}
          shape="rounded"
          softness={1}
          speed={0.15}
        />
        <FilmGrain strength={p.grain} />
      </Shader>
    </div>
  )
}
