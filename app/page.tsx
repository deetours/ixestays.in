import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/landing/hero"
import { PauseStatement } from "@/components/landing/pause-statement"
import { PropertyCards } from "@/components/landing/property-cards"
import { SocialProof } from "@/components/landing/social-proof"
import { LifestyleGrid } from "@/components/landing/lifestyle-grid"
import { ExitCTA } from "@/components/landing/exit-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PauseStatement />
      <PropertyCards />
      <SocialProof />
      <LifestyleGrid />
      <ExitCTA />
      <Footer />
    </main>
  )
}
