"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

const properties = [
  {
    slug: "3bhk-villa",
    title: "The 3BHK Villa",
    tagline: "Made for families who stay up late.",
    image: "/images/3bhk-villa.jpg",
    href: "/properties/3bhk-villa",
    guests: "Up to 8 guests",
    price: "From \u20B94,500/night",
  },
  {
    slug: "2bhk-retreat",
    title: "The 2BHK Retreat",
    tagline: "Perfect for slow mornings and long conversations.",
    image: "/images/2bhk-retreat.jpg",
    href: "/properties/2bhk-retreat",
    guests: "Up to 4 guests",
    price: "From \u20B93,000/night",
  },
]

export function PropertyCards() {
  return (
    <section className="px-6 lg:px-12 pb-32">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-12 text-center"
        >
          Choose Your Stay
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {properties.map((property, i) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <Link href={property.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgIBBAMBAAAAAAAAAAAAAQIDBAAFBhESITFBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEQMhMf/aAAwDAQACEQMRAD8Ax2hqM9e5FLBIYpUIKsp4IPzGZ5u3fOrbnvyWtSsTz2JAAZ5WLEAcAcn9xjJNGbL0tH/2Q=="
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
                </div>
              </Link>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Link href={property.href} className="group/title">
                    <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover/title:text-primary transition-colors duration-300">
                      {property.title}
                    </h3>
                  </Link>
                  <Link href={property.href} className="group/arrow">
                    <ArrowRight
                      size={20}
                      className="text-primary opacity-60 group-hover/arrow:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {property.tagline}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    {property.guests}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span className="text-xs tracking-widest uppercase text-primary">
                    {property.price}
                  </span>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <Link
                    href={property.href}
                    className="inline-flex items-center px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-sm"
                  >
                    View Details
                  </Link>
                  <a
                    href={getAirbnbUrl(property.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackAirbnbClick(property.slug, "property-card")
                    }
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase border border-border text-foreground hover:bg-card transition-colors duration-300 rounded-sm"
                  >
                    Book on Airbnb
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
