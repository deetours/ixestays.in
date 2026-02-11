export const AIRBNB_URLS = {
  "3bhk-villa":
    process.env.NEXT_PUBLIC_AIRBNB_3BHK_URL ||
    "https://www.airbnb.com/rooms/your-3bhk-listing",
  "2bhk-retreat":
    process.env.NEXT_PUBLIC_AIRBNB_2BHK_URL ||
    "https://www.airbnb.com/rooms/your-2bhk-listing",
} as const

export function getAirbnbUrl(propertySlug: string): string {
  return (
    AIRBNB_URLS[propertySlug as keyof typeof AIRBNB_URLS] ||
    AIRBNB_URLS["3bhk-villa"]
  )
}

export function trackAirbnbClick(propertySlug: string, location: string) {
  if (typeof window !== "undefined") {
    console.log(
      `[IxeStays] Airbnb click: ${propertySlug} from ${location}`
    )
    // Future: integrate analytics (GA, Plausible, Vercel Analytics custom events)
    try {
      if (typeof window.va === "function") {
        window.va("event", {
          name: "airbnb_click",
          data: { property: propertySlug, location },
        })
      }
    } catch {
      // silently fail
    }
  }
}

declare global {
  interface Window {
    va?: (event: string, data: Record<string, unknown>) => void
  }
}
