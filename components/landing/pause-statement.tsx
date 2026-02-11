"use client"

import { motion } from "framer-motion"

export function PauseStatement() {
  return (
    <section className="py-32 md:py-48 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground tracking-tight leading-snug text-balance"
        >
          Two private homes.
          <br />
          One unforgettable escape.
        </motion.p>
      </div>
    </section>
  )
}
