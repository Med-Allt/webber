import { ShaderFieldLazy } from "@/components/motion/shader-field-lazy"

/**
 * Shares one continuous shader canvas behind the hero and the tools marquee
 * so the two sections read as a single animated band instead of a hero with
 * a flat strip stacked underneath it.
 */
export function HeroToolsBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      {/* Static fallback that also underpaints the shader while it boots. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(196,81,42,0.07),transparent_70%)]"
      />

      <ShaderFieldLazy variant="hero" />

      {/* Keeps the headline legible over the shader's brighter passages,
          weighted toward the upper half where the hero copy sits so the
          tools marquee lower down stays closer to the raw animation. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_55%_42%_at_50%_38%,rgba(250,250,249,0.72),transparent_75%)]"
      />

      {/* Feathers the shader into the flat page background at the very
          bottom of the band, so the section below starts on a clean edge. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-b from-transparent to-ground md:h-40"
      />

      {children}
    </div>
  )
}
