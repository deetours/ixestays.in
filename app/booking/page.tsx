import type { Metadata } from "next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import { BookingFlow } from "./booking-flow"

export const metadata: Metadata = {
  title: "Book Your Stay | IxeStays",
  description:
    "Book your premium private stay at IxeStays. Simple 3-step booking process or book via Airbnb.",
}

function BookingFallback() {
  return (
    <div className="pt-24 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-muted-foreground tracking-widest uppercase">
          Loading
        </p>
      </div>
    </div>
  )
}

export default function BookingPage() {
  return (
    <main>
      <Navigation />
      <Suspense fallback={<BookingFallback />}>
        <BookingFlow />
      </Suspense>
    </main>
  )
}
