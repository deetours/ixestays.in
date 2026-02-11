"use client"

import Link from "next/link"
import { ExternalLink, Instagram, Mail, Phone } from "lucide-react"
import { getAirbnbUrl, trackAirbnbClick } from "@/lib/airbnb"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <span className="font-serif text-2xl tracking-wider text-foreground">
              IxeStays
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Two private homes. One unforgettable escape. Premium stays designed
              for those who value stillness.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://instagram.com/ixestays"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@ixestays.in"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+919876543210"
                className="w-9 h-9 flex items-center justify-center rounded-sm border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/properties/3bhk-villa"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                3BHK Villa
              </Link>
              <Link
                href="/properties/2bhk-retreat"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                2BHK Retreat
              </Link>
              <Link
                href="/experiences"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Experiences
              </Link>
              <Link
                href="/reviews"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                Reviews
              </Link>
              <Link
                href="/about"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@ixestays.in"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                hello@ixestays.in
              </a>
              <a
                href="tel:+919876543210"
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                +91 98765 43210
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Available 9 AM - 9 PM IST
              </p>
            </div>
          </div>

          {/* Booking */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs tracking-widest uppercase text-muted-foreground">
              Book a Stay
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 rounded-sm w-fit"
              >
                Check Availability
              </Link>
              <a
                href={getAirbnbUrl("3bhk-villa")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackAirbnbClick("3bhk-villa", "footer")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase border border-border text-foreground hover:bg-secondary transition-colors duration-300 rounded-sm w-fit"
              >
                View on Airbnb
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} IxeStays. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href={getAirbnbUrl("3bhk-villa")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAirbnbClick("3bhk-villa", "footer-bottom")}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-1"
            >
              Airbnb Verified
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
