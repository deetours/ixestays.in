export interface Property {
  slug: string
  title: string
  subtitle: string
  tagline: string
  description: string[]
  heroImage: string
  gallery: { src: string; alt: string }[]
  price: number
  maxGuests: number
  bedrooms: number
  bathrooms: number
  amenities: { icon: string; label: string }[]
  highlights: string[]
  location: {
    nearby: string[]
    description: string
  }
}

export const properties: Record<string, Property> = {
  "3bhk-villa": {
    slug: "3bhk-villa",
    title: "The 3BHK Villa",
    subtitle: "Designed for gatherings that matter.",
    tagline: "Made for families who stay up late.",
    description: [
      "Three quiet bedrooms. A living room that invites conversations. A kitchen where mornings begin slowly.",
      "Every corner of this villa has been designed with intention. The spaces flow naturally from private to shared, giving everyone room to breathe while staying connected.",
      "Wake up to birdsong. Spend afternoons on the balcony. Let evenings unfold at their own pace.",
      "Experience the perfect blend of productivity and comfort in our spacious 3BHK home. Located just off NH 66 in Kottara, this modern villa is surrounded by swaying coconut trees and offers a peaceful escape from city life.",
      "Set in the serene town of Kottara, just 100 meters from NH 66, this home features a spacious 3 bedrooms with a soft kitchen, dining area, comfortable living space, and a spacious hall. Perfect for families, groups of friends, business travelers, and those visiting for medical reasons.",
      "Cozy bedrooms with King beds, curtains & AC. Comfy living room with Smart TV & sofa. Handy kitchenette with induction, kettle & fridge. Fast Wi-Fi with inverter backup. Geyser and ironing facilities available. Lock system for easy self check-in.",
    ],
    heroImage: "/images/3bhk-villa.png",
    gallery: [
      { src: "/images/3bhk-villa.png", alt: "Villa living room" },
      { src: "/images/gallery-bedroom.png", alt: "Master bedroom" },
      { src: "/images/gallery-kitchen.png", alt: "Open kitchen" },
      { src: "/images/gallery-bathroom.png", alt: "Spa bathroom" },
      { src: "/images/lifestyle-balcony.png", alt: "Balcony view" },
      { src: "/images/lifestyle-evening.png", alt: "Evening ambiance" },
    ],
    price: 4500,
    maxGuests: 8,
    bedrooms: 3,
    bathrooms: 3,
    amenities: [
      { icon: "wifi", label: "High-Speed WiFi" },
      { icon: "wind", label: "Air Conditioning" },
      { icon: "car", label: "Free Parking" },
      { icon: "utensils", label: "Full Kitchen" },
      { icon: "tv", label: "Smart TV" },
      { icon: "shirt", label: "Washer" },
      { icon: "flame", label: "Hot Water" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "trees", label: "Garden View" },
      { icon: "coffee", label: "Coffee Maker" },
      { icon: "bath", label: "Bathtub" },
      { icon: "sofa", label: "Lounge Area" },
      { icon: "lock-open", label: "Self Check-in" },
      { icon: "door-open", label: "Private Entrance" },
      { icon: "wind", label: "Hair Dryer" },
      { icon: "sparkles", label: "Cleaning Products" },
      { icon: "bed", label: "Extra Pillows & Blankets" },
      { icon: "eye-off", label: "Room-Darkening Blinds" },
      { icon: "hanger", label: "Clothes Drying Rack" },
      { icon: "archive", label: "Walk-in Wardrobe" },
      { icon: "play", label: "Cinema" },
      { icon: "thermometer", label: "Heating" },
      { icon: "camera", label: "Security Cameras" },
      { icon: "briefcase", label: "Dedicated Workspace" },
      { icon: "wine", label: "Wine Glasses" },
      { icon: "utensils", label: "Cooking Basics" },
      { icon: "snowflake", label: "Freezer" },
      { icon: "waves", label: "Beach Access Nearby" },
      { icon: "luggage", label: "Luggage Drop-off" },
    ],
    highlights: [
      "Private entrance",
      "Dedicated workspace",
      "Mountain views",
      "Self check-in",
      "2 car parking available",
      "Long-term stays allowed",
    ],
    location: {
      nearby: [
        "Tannirbhavi Blue Flag Beach — 6.9 km (quiet walk, sunset watching)",
        "Panambur Beach — 5.3 km (10 min drive, popular & developed)",
        "Surathkal Beach (NITK Beach) — 12.9 km (11 min drive, scenic coastline)",
        "Mulki (India's Surfing Capital) — 22 km (25 min drive)",
        "Mangalore Int. Airport — 9 km (25 min drive)",
        "Mangalore Central Railway Station — 7.1 km (20 min drive)",
        "Surathkal Railway Station — 10 km (30 min drive)",
        "Mangalore Junction Railway Station — 10 km (25 min drive)",
        "NITK Surathkal — 11.8 km (30 min drive)",
        "Udupi Krishna Temple — 54 km (50 min drive)",
        "Kadri Manjunath Temple — 5.5 km (10 min drive)",
        "Kudroli Sri Gokarnanatha Temple — 5 km (10 min drive)",
        "Shri Durga Parameshwari Temple, Kateel — 22 km (40 min drive)",
        "St. Aloysius Chapel — 7 km (20 min drive)",
        "Milagres Church — 7 km (20 min drive)",
        "Zeenath Baksh Juma Masjid — 6 km (20 min drive, 3rd oldest in India)",
        "Hospital nearby — easy access for medical visits",
        "Co-working spaces nearby — ideal for digital nomads",
        "10 minutes from the city center",
        "5 minutes from local restaurants",
        "Surrounded by lush greenery",
        "20 minutes from the nearest trekking trail",
      ],
      description:
        "Located just off NH 66 in Kottara, this villa combines perfect connectivity with peaceful surroundings. Nestled in a quiet neighborhood with panoramic views of the surrounding hills. Close enough to everything, far enough from the noise.",
    },
  },
  "2bhk-retreat": {
    slug: "2bhk-retreat",
    title: "The 2BHK Retreat",
    subtitle: "Perfect for slow mornings and long conversations.",
    tagline: "Perfect for slow mornings and long conversations.",
    description: [
      "Two sunlit bedrooms. A cozy living space that feels like a warm embrace. A kitchen that makes you want to cook.",
      "This retreat is designed for couples and small groups who value intimacy over excess. Every element has been chosen to create comfort without clutter.",
      "Let the morning light wake you. Spend the day doing absolutely nothing. That is the whole point.",
    ],
    heroImage: "/images/2bhk-retreat.jpg",
    gallery: [
      { src: "/images/2bhk-retreat.jpg", alt: "Retreat interior" },
      { src: "/images/gallery-bedroom.png", alt: "Bedroom" },
      { src: "/images/gallery-kitchen.png", alt: "Kitchen" },
      { src: "/images/gallery-bathroom.png", alt: "Bathroom" },
      { src: "/images/lifestyle-workspace.png", alt: "Workspace" },
      { src: "/images/lifestyle-dining.png", alt: "Dining area" },
    ],
    price: 3000,
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      { icon: "wifi", label: "High-Speed WiFi" },
      { icon: "wind", label: "Air Conditioning" },
      { icon: "car", label: "Free Parking" },
      { icon: "utensils", label: "Kitchenette" },
      { icon: "tv", label: "Smart TV" },
      { icon: "flame", label: "Hot Water" },
      { icon: "shield", label: "24/7 Security" },
      { icon: "trees", label: "Garden View" },
      { icon: "coffee", label: "Coffee Maker" },
      { icon: "book-open", label: "Book Collection" },
    ],
    highlights: [
      "Couple-friendly",
      "Quiet neighborhood",
      "Valley views",
      "Self check-in",
    ],
    location: {
      nearby: [
        "10 minutes from the city center",
        "Walking distance to cafes",
        "Surrounded by nature trails",
        "15 minutes from sunset viewpoint",
      ],
      description:
        "Tucked away in a serene corner where the pace of life naturally slows down. Your private escape from the world.",
    },
  },
}

export function getProperty(slug: string): Property | undefined {
  return properties[slug]
}

export function getAllPropertySlugs(): string[] {
  return Object.keys(properties)
}
