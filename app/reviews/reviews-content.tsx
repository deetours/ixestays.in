"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

const reviews = [
  {
    text: "The most peaceful stay we have ever had. Every detail was perfect. From the warm lighting to the carefully chosen furniture, you can feel the love that went into this place.",
    author: "Priya & Rahul",
    location: "Mumbai",
    rating: 5,
    property: "3BHK Villa",
    date: "December 2025",
  },
  {
    text: "We came for a weekend and wished we had booked the entire week. The villa felt like a second home, but better. Already planning our next visit.",
    author: "Ananya",
    location: "Bangalore",
    rating: 5,
    property: "2BHK Retreat",
    date: "November 2025",
  },
  {
    text: "It felt like coming home, but better. The kids loved the garden, and we loved the silence. A rare find in today's world of noisy resorts.",
    author: "The Sharma Family",
    location: "Delhi",
    rating: 5,
    property: "3BHK Villa",
    date: "October 2025",
  },
  {
    text: "Perfect for a couple looking to disconnect. We spent three days doing absolutely nothing, and it was exactly what we needed. The sunset views from the balcony are unforgettable.",
    author: "Vikram & Meera",
    location: "Pune",
    rating: 5,
    property: "2BHK Retreat",
    date: "September 2025",
  },
  {
    text: "As a remote worker, I was looking for a quiet place with great WiFi. IxeStays delivered on both counts, plus the views were an unexpected bonus. My most productive week ever.",
    author: "Arjun",
    location: "Hyderabad",
    rating: 5,
    property: "2BHK Retreat",
    date: "August 2025",
  },
  {
    text: "We have stayed at many Airbnbs across India. This one stands out for its attention to detail and the genuine warmth of the hosts. The kitchen had everything we needed for home-cooked meals.",
    author: "Nandini & Family",
    location: "Chennai",
    rating: 5,
    property: "3BHK Villa",
    date: "July 2025",
  },
  {
    text: "My parents visited from abroad, and this was the perfect place for them. Quiet, clean, comfortable, and surrounded by nature. They did not want to leave.",
    author: "Rohan",
    location: "Kolkata",
    rating: 5,
    property: "3BHK Villa",
    date: "June 2025",
  },
  {
    text: "The best part about IxeStays is what it does not have: no noise, no crowds, no pretension. Just a beautiful space and the peace to enjoy it.",
    author: "Kavya",
    location: "Jaipur",
    rating: 5,
    property: "2BHK Retreat",
    date: "May 2025",
  },
]

export function ReviewsContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-1 mb-6"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={`hero-star-${i}`}
                size={20}
                className="fill-primary text-primary"
              />
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight"
          >
            What Guests Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            Rated 4.9 by 180+ guests
          </motion.p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <motion.div
                key={review.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="bg-card border border-border rounded-sm p-8 flex flex-col gap-6"
              >
                <Quote
                  size={24}
                  className="text-primary/40"
                />
                <p className="text-foreground/90 leading-relaxed italic text-base flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {review.author}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {review.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star
                          key={`review-${i}-star-${j}`}
                          size={12}
                          className="fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-1 tracking-wider uppercase">
                      {review.property}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-2xl md:text-4xl text-foreground tracking-tight text-balance"
          >
            Join 180+ guests who found their escape.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-3.5 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-sm"
            >
              Book Your Stay
            </Link>
            <a
              href={getAirbnbUrl("3bhk-villa")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAirbnbClick("3bhk-villa", "reviews-cta")}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-[0.2em] uppercase border border-border text-foreground hover:bg-secondary transition-colors duration-300 rounded-sm"
            >
              View on Airbnb
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
