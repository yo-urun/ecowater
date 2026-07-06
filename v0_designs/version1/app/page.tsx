import { Nav } from "@/components/ecovoda/nav"
import { Hero } from "@/components/ecovoda/hero"
import { HubSafety } from "@/components/ecovoda/hub-safety"
import { HubWellness } from "@/components/ecovoda/hub-wellness"
import { HubEco } from "@/components/ecovoda/hub-eco"
import { HubTechnology } from "@/components/ecovoda/hub-technology"
import { HubPracticality } from "@/components/ecovoda/hub-practicality"
import { Footer } from "@/components/ecovoda/footer"

export default function EcovodaLifePage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />

      {/* Transition: Hero → Safety — ocean deep to medical white */}
      <div
        className="h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, oklch(0.48 0.14 195), oklch(0.99 0.003 220))" }}
        aria-hidden="true"
      />

      <HubSafety />

      {/* Transition: Safety → Wellness */}
      <div
        className="h-8 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, oklch(0.99 0.003 220), oklch(0.96 0.03 195))" }}
        aria-hidden="true"
      />

      <HubWellness />

      {/* Transition: Wellness → Eco */}
      <div
        className="h-8 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, oklch(0.97 0.025 185), oklch(0.99 0.003 220))" }}
        aria-hidden="true"
      />

      <HubEco />

      {/* Transition: Eco → Technology — white to deep ocean */}
      <div
        className="h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, oklch(0.99 0.003 220), oklch(0.22 0.08 240))" }}
        aria-hidden="true"
      />

      <HubTechnology />

      {/* Transition: Technology → Practicality */}
      <div
        className="h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, oklch(0.14 0.05 240), oklch(0.99 0.003 220))" }}
        aria-hidden="true"
      />

      <HubPracticality />

      <Footer />
    </main>
  )
}
