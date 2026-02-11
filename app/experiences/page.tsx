import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExperiencesContent } from "./experiences-content"

export const metadata: Metadata = {
  title: "Experiences | IxeStays",
  description:
    "Stay. Explore. Repeat. Discover curated experiences around IxeStays.",
}

export default function ExperiencesPage() {
  return (
    <main>
      <Navigation />
      <ExperiencesContent />
      <Footer />
    </main>
  )
}
