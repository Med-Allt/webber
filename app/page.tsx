import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Trust } from "@/components/sections/trust"
import { Work } from "@/components/sections/work"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Pricing } from "@/components/sections/pricing"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Trust />
        <Work />
        <Services />
        <Process />
        <Pricing />
        <Faq />
        <Cta />
      </main>
    </>
  )
}
