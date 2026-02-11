"use client"

import React from "react"

import { motion } from "framer-motion"
import {
  Wifi,
  Wind,
  Car,
  Utensils,
  Tv,
  Shirt,
  Flame,
  Shield,
  Trees,
  Coffee,
  Bath,
  Sofa,
  BookOpen,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  wifi: Wifi,
  wind: Wind,
  car: Car,
  utensils: Utensils,
  tv: Tv,
  shirt: Shirt,
  flame: Flame,
  shield: Shield,
  trees: Trees,
  coffee: Coffee,
  bath: Bath,
  sofa: Sofa,
  "book-open": BookOpen,
}

interface AmenitiesProps {
  amenities: { icon: string; label: string }[]
}

export function Amenities({ amenities }: AmenitiesProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {amenities.map((amenity, i) => {
        const Icon = iconMap[amenity.icon]
        return (
          <motion.div
            key={amenity.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-center gap-3 py-3 px-4 bg-secondary/50 rounded-sm"
          >
            {Icon && (
              <Icon size={18} className="text-primary flex-shrink-0" />
            )}
            <span className="text-sm text-foreground">{amenity.label}</span>
          </motion.div>
        )
      })}
    </div>
  )
}
