"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Luxury villa at golden hour"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFBhESITFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMhMf/aAAwDAQACEQMRAD8Ax2hqM9e5FLBIYpUIKsp4IPzGZ5u3fOrbnvyWtSsTz2JAAZ5WLEAcAcn9xjJNGbL0tH/2Q=="
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-6"
        >
          Premium Private Stays
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground text-balance max-w-4xl leading-tight"
        >
          Come Home to Stillness.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-6 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          Where every moment is designed for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-3.5 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-sm"
          >
            Check Availability
          </Link>
          <a
            href={getAirbnbUrl("3bhk-villa")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAirbnbClick("3bhk-villa", "hero")}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-[0.2em] uppercase border border-border text-foreground hover:bg-card transition-all duration-300 rounded-sm"
          >
            View on Airbnb
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
              Scroll
            </span>
            <div className="w-px h-8 bg-muted-foreground/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
