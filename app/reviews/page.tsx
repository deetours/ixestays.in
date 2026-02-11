import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ReviewsContent } from "./reviews-content"

export const metadata: Metadata = {
  title: "Reviews | IxeStays",
  description: "What our guests say about their stay at IxeStays.",
}

export default function ReviewsPage() {
  return (
    <main>
      <Navigation />
      <ReviewsContent />
      <Footer />
    </main>
  )
}
