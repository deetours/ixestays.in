"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

const experiences = [
  {
    title: "Mountain Trails",
    tagline: "Where the path disappears, the journey begins.",
    image: "/images/experience-trek.jpg",
    duration: "Half Day",
    difficulty: "Moderate",
  },
  {
    title: "Local Flavors",
    tagline: "Taste the stories that recipes cannot tell.",
    image: "/images/experience-food.jpg",
    duration: "2-3 Hours",
    difficulty: "Easy",
  },
  {
    title: "Sunset Viewpoints",
    tagline: "Some views are worth the silence.",
    image: "/images/experience-sunset.jpg",
    duration: "Evening",
    difficulty: "Easy",
  },
  {
    title: "Morning Yoga",
    tagline: "Begin where the breath meets the horizon.",
    image: "/images/lifestyle-balcony.jpg",
    duration: "1 Hour",
    difficulty: "All Levels",
  },
  {
    title: "Night Sky Gazing",
    tagline: "When the stars remind you how small your worries are.",
    image: "/images/lifestyle-evening.jpg",
    duration: "Late Evening",
    difficulty: "Easy",
  },
  {
    title: "Village Walk",
    tagline: "Stories live in the lanes, not the landmarks.",
    image: "/images/hero.jpg",
    duration: "2 Hours",
    difficulty: "Easy",
  },
]

export function ExperiencesContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Beyond the Stay
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight"
          >
            Stay. Explore. Repeat.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-6 text-muted-foreground max-w-md mx-auto leading-relaxed"
          >
            Curated experiences that extend the feeling of your stay into the
            world around you.
          </motion.p>
        </div>
      </section>

      {/* Experience Cards */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={exp.image || "/placeholder.svg"}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />

                  {/* Tags */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-background/70 backdrop-blur-sm text-[10px] tracking-widest uppercase text-foreground rounded-full">
                      {exp.duration}
                    </span>
                    <span className="px-3 py-1 bg-background/70 backdrop-blur-sm text-[10px] tracking-widest uppercase text-muted-foreground rounded-full">
                      {exp.difficulty}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-1">
                  <h3 className="font-serif text-xl text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.tagline}
                  </p>
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
            Every experience is included with your stay.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-muted-foreground"
          >
            Just ask, and we will arrange it for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
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
              onClick={() => trackAirbnbClick("3bhk-villa", "experiences-cta")}
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
