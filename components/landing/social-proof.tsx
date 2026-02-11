"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const quotes = [
  {
    text: "The most peaceful stay we have ever had. Every detail was perfect.",
    author: "Priya & Rahul",
    location: "Mumbai",
  },
  {
    text: "We came for a weekend and wished we had booked the entire week.",
    author: "Ananya",
    location: "Bangalore",
  },
  {
    text: "It felt like coming home, but better. We will be back.",
    author: "The Sharma Family",
    location: "Delhi",
  },
]

export function SocialProof() {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={`star-${i}`}
                size={16}
                className="fill-primary text-primary"
              />
            ))}
          </div>
          <p className="font-serif text-3xl md:text-4xl text-foreground">
            Rated 4.9 by 180+ guests
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, i) => (
            <motion.div
              key={quote.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="flex flex-col items-center gap-6 px-4"
            >
              <p className="text-foreground/90 text-base leading-relaxed italic">
                &ldquo;{quote.text}&rdquo;
              </p>
              <div>
                <p className="text-sm text-foreground font-medium">
                  {quote.author}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {quote.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
