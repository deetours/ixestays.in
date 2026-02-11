"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

export function ExitCTA() {
  return (
    <section className="py-32 md:py-48 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl text-foreground tracking-tight text-balance"
        >
          Ready when you are.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-3.5 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-sm"
          >
            Check Dates
          </Link>
          <a
            href={getAirbnbUrl("3bhk-villa")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAirbnbClick("3bhk-villa", "exit-cta")}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-[0.2em] uppercase border border-border text-foreground hover:bg-card transition-all duration-300 rounded-sm"
          >
            View on Airbnb
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
