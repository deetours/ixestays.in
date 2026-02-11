import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About | IxeStays",
  description:
    "The story behind IxeStays. Why this place exists and our philosophy of hosting.",
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <AboutContent />
      <Footer />
    </main>
  )
}
