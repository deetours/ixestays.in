"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check,
  CalendarDays,
  Users,
  Minus,
  Plus,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

const properties = [
  { slug: "3bhk-villa", title: "The 3BHK Villa", price: 4500, maxGuests: 8 },
  {
    slug: "2bhk-retreat",
    title: "The 2BHK Retreat",
    price: 3000,
    maxGuests: 4,
  },
]

const steps = [
  { number: 1, label: "Select Dates" },
  { number: 2, label: "Guest Details" },
  { number: 3, label: "Confirmation" },
]

export function BookingFlow() {
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedProperty, setSelectedProperty] = useState(
    searchParams.get("property") || "3bhk-villa"
  )
  const [checkIn, setCheckIn] = useState(searchParams.get("checkin") || "")
  const [checkOut, setCheckOut] = useState(searchParams.get("checkout") || "")
  const [guests, setGuests] = useState(
    Number(searchParams.get("guests")) || 2
  )
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [specialRequests, setSpecialRequests] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const property =
    properties.find((p) => p.slug === selectedProperty) || properties[0]

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

  const total = nights * property.price

  const canProceedStep1 = checkIn && checkOut && nights > 0
  const canProceedStep2 = name && email && phone

  const handleSubmit = () => {
    setSubmitted(true)
    setCurrentStep(3)
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-0 mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-center">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs transition-all duration-300 ${
                    currentStep > step.number
                      ? "bg-primary text-primary-foreground"
                      : currentStep === step.number
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {currentStep > step.number ? (
                    <Check size={14} />
                  ) : (
                    step.number
                  )}
                </div>
                <span
                  className={`text-xs tracking-widest uppercase hidden md:block ${
                    currentStep >= step.number
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`w-12 md:w-20 h-px mx-3 transition-colors duration-300 ${
                    currentStep > step.number ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Select Dates */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div className="text-center">
                <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                  Select Your Dates
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                  Choose your property and when you would like to stay.
                </p>
              </div>

              {/* Booking Options Banner */}
              <div className="bg-secondary border border-border rounded-sm p-5">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  How would you like to book?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <a
                    href={getAirbnbUrl(selectedProperty)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackAirbnbClick(selectedProperty, "booking-flow")
                    }
                    className="flex items-center justify-center gap-2 p-4 bg-primary text-primary-foreground rounded-sm text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors"
                  >
                    Book via Airbnb
                    <ExternalLink size={12} />
                  </a>
                  <div className="flex items-center justify-center p-4 bg-card border border-border rounded-sm text-xs tracking-[0.15em] uppercase text-foreground">
                    Or continue below to book direct
                  </div>
                </div>
              </div>

              {/* Property Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground">
                  Property
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {properties.map((p) => (
                    <button
                      key={p.slug}
                      type="button"
                      onClick={() => setSelectedProperty(p.slug)}
                      className={`p-4 rounded-sm border text-left transition-all duration-300 ${
                        selectedProperty === p.slug
                          ? "border-primary bg-primary/10"
                          : "border-border bg-card hover:border-muted-foreground/30"
                      }`}
                    >
                      <p className="font-serif text-lg text-foreground">
                        {p.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {"\u20B9"}
                        {p.price.toLocaleString("en-IN")}/night {" \u00B7 "}Up
                        to {p.maxGuests} guests
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="booking-checkin"
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
                      id="booking-checkin"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="booking-checkout"
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
                      id="booking-checkout"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="w-full pl-9 pr-3 py-3 bg-card border border-border rounded-sm text-sm text-foreground focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground">
                  Guests
                </span>
                <div className="flex items-center justify-between bg-card border border-border rounded-sm px-4 py-3">
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
                      className="w-8 h-8 flex items-center justify-center bg-secondary rounded-sm text-foreground hover:bg-border transition-colors"
                      aria-label="Decrease guests"
                    >
                      <Minus size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setGuests(Math.min(property.maxGuests, guests + 1))
                      }
                      className="w-8 h-8 flex items-center justify-center bg-secondary rounded-sm text-foreground hover:bg-border transition-colors"
                      aria-label="Increase guests"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Summary */}
              {nights > 0 && (
                <div className="bg-card border border-border rounded-sm p-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {property.title}
                    </span>
                    <span className="text-foreground">
                      {"\u20B9"}
                      {property.price.toLocaleString("en-IN")} x {nights}{" "}
                      {nights === 1 ? "night" : "nights"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm font-medium pt-3 border-t border-border">
                    <span className="text-foreground">Total</span>
                    <span className="font-serif text-xl text-foreground">
                      {"\u20B9"}
                      {total.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              )}

              {/* Next */}
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                disabled={!canProceedStep1}
                className="w-full py-3.5 flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 rounded-sm"
              >
                Continue with Direct Booking
                <ArrowRight size={14} />
              </button>
            </motion.div>
          )}

          {/* Step 2: Guest Details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div className="text-center">
                <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                  Your Details
                </h1>
                <p className="mt-2 text-muted-foreground text-sm">
                  Tell us a little about yourself.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="guest-name"
                    className="text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="guest-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="guest-email"
                    className="text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    id="guest-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="guest-phone"
                    className="text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    Phone Number
                  </label>
                  <input
                    id="guest-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="guest-requests"
                    className="text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    Special Requests{" "}
                    <span className="normal-case tracking-normal text-muted-foreground/50">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="guest-requests"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Any special requests or requirements..."
                    rows={3}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground/50 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Booking Summary */}
              <div className="bg-card border border-border rounded-sm p-6 flex flex-col gap-3">
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Booking Summary
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Property</span>
                  <span className="text-foreground">{property.title}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Dates</span>
                  <span className="text-foreground">
                    {checkIn} to {checkOut}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Guests</span>
                  <span className="text-foreground">{guests}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium pt-3 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="font-serif text-xl text-foreground">
                    {"\u20B9"}
                    {total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="flex items-center gap-2 px-6 py-3.5 text-xs tracking-[0.2em] uppercase border border-border text-foreground hover:bg-card transition-colors duration-300 rounded-sm"
                >
                  <ArrowLeft size={14} />
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceedStep2}
                  className="flex-1 py-3.5 flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 rounded-sm"
                >
                  Confirm Booking
                  <Check size={14} />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {currentStep === 3 && submitted && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-8 py-12 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Check size={32} className="text-primary" />
              </div>

              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-foreground">
                  Booking Received
                </h1>
                <p className="mt-3 text-muted-foreground max-w-md leading-relaxed">
                  Thank you, {name}. We have received your booking request for{" "}
                  {property.title}. We will confirm your reservation and send
                  details to {email} shortly.
                </p>
              </div>

              <div className="bg-card border border-border rounded-sm p-6 w-full max-w-md flex flex-col gap-3 text-left">
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Booking Details
                </h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Property</span>
                  <span className="text-foreground">{property.title}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="text-foreground">{checkIn}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Check-out</span>
                  <span className="text-foreground">{checkOut}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Guests</span>
                  <span className="text-foreground">{guests}</span>
                </div>
                <div className="flex items-center justify-between text-sm font-medium pt-3 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="font-serif text-xl text-foreground">
                    {"\u20B9"}
                    {total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center px-8 py-3.5 text-xs tracking-[0.2em] uppercase border border-border text-foreground hover:bg-card transition-colors duration-300 rounded-sm"
                >
                  Return Home
                </Link>
                <a
                  href={getAirbnbUrl(selectedProperty)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackAirbnbClick(selectedProperty, "booking-confirmation")
                  }
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-xs tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-sm"
                >
                  Also Book on Airbnb
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer for booking page */}
      <div className="border-t border-border bg-card mt-auto">
        <div className="max-w-3xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Questions about your booking?{" "}
            <a
              href="mailto:hello@ixestays.in"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@ixestays.in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
