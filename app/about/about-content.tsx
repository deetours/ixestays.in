"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

const values = [
  {
    title: "Stillness Over Stimulation",
    description:
      "We believe the best stays are the ones where you do not need to be entertained. The space itself should be enough.",
  },
  {
    title: "Intentional Design",
    description:
      "Every piece of furniture, every light fixture, every view from every window has been chosen with purpose. Nothing here is accidental.",
  },
  {
    title: "Warmth Without Intrusion",
    description:
      "We are here when you need us, invisible when you do not. Hospitality should feel like care, not surveillance.",
  },
  {
    title: "Local First",
    description:
      "From the ingredients in the kitchen to the experiences we curate, everything connects you to the land and the people who call it home.",
  },
]

export function AboutContent() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight max-w-3xl"
          >
            Built from a Simple Belief.
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-foreground/90 leading-relaxed text-base">
              IxeStays began with a question: What if a place could make you feel
              something the moment you walked in?
            </p>
            <p className="text-foreground/90 leading-relaxed text-base">
              Not impressed. Not overwhelmed. Just... at ease. Like the space was
              waiting for you. Like it already knew you needed to slow down.
            </p>
            <p className="text-foreground/90 leading-relaxed text-base">
              We built two homes with that feeling in mind. Every decision, from
              the angle of the windows to the softness of the linens, was made to
              create a space where you could exhale and mean it.
            </p>
            <p className="text-foreground/90 leading-relaxed text-base">
              This is not a hotel. This is not a resort. This is a private escape
              that feels like it was designed just for you. Because, in a way, it
              was.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/lifestyle-balcony.jpg"
              alt="Morning balcony view at IxeStays"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFBhESITFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMhMf/aAAwDAQACEQMRAD8Ax2hqM9e5FLBIYpUIKsp4IPzGZ5u3fOrbnvyWtSsTz2JAAZ5WLEAcAcn9xjJNGbL0tH/2Q=="
            />
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-5xl text-foreground tracking-tight text-center mb-16"
          >
            What We Stand For
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="p-8 bg-background border border-border rounded-sm"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-24 px-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "180+", label: "Happy Guests" },
              { number: "4.9", label: "Average Rating" },
              { number: "2", label: "Private Homes" },
              { number: "1", label: "Promise: Peace" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="font-serif text-4xl md:text-5xl text-primary">
                  {stat.number}
                </span>
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {stat.label}
                </span>
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
            Come see what stillness feels like.
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
              onClick={() => trackAirbnbClick("3bhk-villa", "about-cta")}
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
