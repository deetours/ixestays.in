"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarDays, Users, Minus, Plus, ExternalLink } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

interface BookingCardProps {
  price: number
  maxGuests: number
  propertySlug: string
}

export function BookingCard({ price, maxGuests, propertySlug }: BookingCardProps) {
  const [guests, setGuests] = useState(2)
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")

  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0

  const total = nights * price

  return (
    <div className="bg-card border border-border rounded-sm p-6 flex flex-col gap-6">
      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span className="font-serif text-3xl text-foreground">
          {"\u20B9"}{price.toLocaleString("en-IN")}
        </span>
        <span className="text-sm text-muted-foreground"> / night</span>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`checkin-${propertySlug}`}
            className="text-[10px] tracking-widest uppercase text-muted-foreground"
          >
            Check-in
          </label>
          <div className="relative">
            <CalendarDays
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id={`checkin-${propertySlug}`}
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor={`checkout-${propertySlug}`}
            className="text-[10px] tracking-widest uppercase text-muted-foreground"
          >
            Check-out
          </label>
          <div className="relative">
            <CalendarDays
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              id={`checkout-${propertySlug}`}
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn}
              className="w-full pl-9 pr-3 py-2.5 bg-secondary border border-border rounded-sm text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Guests */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
          Guests
        </span>
        <div className="flex items-center justify-between bg-secondary border border-border rounded-sm px-3 py-2.5">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-muted-foreground" />
            <span className="text-sm text-foreground">
              {guests} {guests === 1 ? "Guest" : "Guests"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-7 h-7 flex items-center justify-center bg-background rounded-sm text-foreground hover:bg-border transition-colors"
              aria-label="Decrease guests"
            >
              <Minus size={14} />
            </button>
            <button
              type="button"
              onClick={() => setGuests(Math.min(maxGuests, guests + 1))}
              className="w-7 h-7 flex items-center justify-center bg-background rounded-sm text-foreground hover:bg-border transition-colors"
              aria-label="Increase guests"
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Price breakdown */}
      {nights > 0 && (
        <div className="flex flex-col gap-2 pt-4 border-t border-border">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {"\u20B9"}{price.toLocaleString("en-IN")} x {nights}{" "}
              {nights === 1 ? "night" : "nights"}
            </span>
            <span className="text-foreground">
              {"\u20B9"}{total.toLocaleString("en-IN")}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm font-medium pt-2 border-t border-border">
            <span className="text-foreground">Total</span>
            <span className="text-foreground font-serif text-lg">
              {"\u20B9"}{total.toLocaleString("en-IN")}
            </span>
          </div>
        </div>
      )}

      {/* Booking Options */}
      <div className="flex flex-col gap-3">
        {/* Airbnb - Primary trust option */}
        <a
          href={getAirbnbUrl(propertySlug)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackAirbnbClick(propertySlug, "booking-card")}
          className="w-full py-3.5 flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-sm"
        >
          Book on Airbnb
          <ExternalLink size={12} />
        </a>

        {/* Direct booking */}
        <Link
          href={`/booking?property=${propertySlug}&checkin=${checkIn}&checkout=${checkOut}&guests=${guests}`}
          className="w-full py-3.5 text-center text-xs tracking-[0.2em] uppercase border border-border text-foreground hover:bg-secondary transition-colors duration-300 rounded-sm block"
        >
          Book Direct
        </Link>
      </div>

      <p className="text-[11px] text-muted-foreground text-center">
        Verified listing on Airbnb. No charges until confirmation.
      </p>
    </div>
  )
}
