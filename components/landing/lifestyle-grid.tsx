"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const lifestyleItems = [
  {
    image: "/images/lifestyle-balcony.jpg",
    caption: "Golden Hours.",
    span: "col-span-1 md:col-span-2 row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/lifestyle-dining.jpg",
    caption: "Late Evenings.",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    image: "/images/lifestyle-workspace.jpg",
    caption: "Private Corners.",
    span: "col-span-1",
    aspect: "aspect-square",
  },
  {
    image: "/images/lifestyle-evening.jpg",
    caption: "Warm Nights.",
    span: "col-span-1 md:col-span-2",
    aspect: "aspect-[2/1]",
  },
]

export function LifestyleGrid() {
  return (
    <section className="py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.3em] uppercase text-primary mb-12 text-center"
        >
          A Day at IxeStays
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {lifestyleItems.map((item, i) => (
            <motion.div
              key={item.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-sm group ${item.span}`}
            >
              <div className={`relative ${item.aspect} w-full`}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <p className="font-serif text-lg md:text-xl text-foreground">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
