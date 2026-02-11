"use client"

import { motion } from "framer-motion"
import { MapPin, Bed, Bath as BathIcon, Users, ExternalLink } from "lucide-react"
import type { Property } from "@/lib/properties"
import { ImageGallery } from "@/components/property/image-gallery"
import { BookingCard } from "@/components/property/booking-card"
import { Amenities } from "@/components/property/amenities"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

interface PropertyDetailProps {
  property: Property
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="pt-24">
      {/* Scene 1: Big Typography */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4"
          >
            IxeStays
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight"
          >
            {property.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-4 text-lg text-muted-foreground max-w-lg"
          >
            {property.subtitle}
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bed size={16} className="text-primary" />
              <span>{property.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BathIcon size={16} className="text-primary" />
              <span>{property.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} className="text-primary" />
              <span>Up to {property.maxGuests} guests</span>
            </div>
            <a
              href={getAirbnbUrl(property.slug)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAirbnbClick(property.slug, "property-header")}
              className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={14} />
              <span>View on Airbnb</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Scene 2: Gallery */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <ImageGallery images={property.gallery} />
        </div>
      </section>

      {/* Scene 3+: Content + Sticky Booking */}
      <section className="px-6 lg:px-12 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left: Content */}
            <div className="lg:col-span-2 flex flex-col gap-16">
              {/* Emotional Description */}
              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                  The Space
                </h2>
                <div className="flex flex-col gap-4">
                  {property.description.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 30)}
                      className="text-foreground/90 leading-relaxed text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                  Highlights
                </h2>
                <div className="flex flex-wrap gap-3">
                  {property.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-4 py-2 bg-secondary text-sm text-foreground rounded-sm border border-border"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                  Amenities
                </h2>
                <Amenities amenities={property.amenities} />
              </div>

              {/* Location */}
              <div>
                <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                  Location
                </h2>
                <p className="text-foreground/90 leading-relaxed mb-6">
                  {property.location.description}
                </p>
                <div className="flex flex-col gap-3">
                  {property.location.nearby.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <MapPin
                        size={14}
                        className="text-primary flex-shrink-0"
                      />
                      <span className="text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Booking Card */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <BookingCard
                  price={property.price}
                  maxGuests={property.maxGuests}
                  propertySlug={property.slug}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
