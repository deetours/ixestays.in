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

              {/* Guest Access */}
              {property.slug === "3bhk-villa" && (
                <div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                    Guest Access
                  </h2>
                  <div className="flex flex-col gap-4">
                    <p className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Three Private Bedrooms:</span> All bedrooms are yours to use, featuring air conditioning and fresh linens.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Living & Dining Area:</span> A spacious hall perfect for family gatherings or catching up on work.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Fully Equipped Kitchen:</span> Feel free to cook your own meals. Access to stove, refrigerator, kettle, and all utensils.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Private Terrace:</span> Enjoy your morning tea with a view of the Mangalore skyline.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Laundry Area:</span> A washing machine is available for your use—ideal for longer stays.
                    </p>
                    <p className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">Parking & Entry:</span> Dedicated parking with 2 covered spots inside the premises. Easy entry on the ground floor. Self check-in via smart lock.
                    </p>
                  </div>
                </div>
              )}

              {/* House Rules */}
              {property.slug === "3bhk-villa" && (
                <div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">
                    House Rules
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Checking In and Out</p>
                      <div className="space-y-1 text-sm text-foreground/80">
                        <p>• Check-in: After 2:00 pm</p>
                        <p>• Check-out: Before 12:00 pm</p>
                        <p>• Self check-in available via smart lock (instructions sent 24 hours before)</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">During Your Stay</p>
                      <div className="space-y-1 text-sm text-foreground/80">
                        <p>• Maximum 6 guests</p>
                        <p>• No pets</p>
                        <p>• Quiet hours: 11:00 pm - 7:00 am</p>
                        <p>• No parties or events</p>
                        <p>• No smoking</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Before You Leave</p>
                      <div className="space-y-1 text-sm text-foreground/80">
                        <p>• Gather used towels</p>
                        <p>• Throw rubbish away</p>
                        <p>• Turn things off</p>
                        <p>• Return keys and lock up</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Additional Services</p>
                      <div className="space-y-1 text-sm text-foreground/80">
                        <p>• Luggage drop-off allowed for early arrivals or late departures</p>
                        <p>• Long-term stays of 28+ days allowed</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
