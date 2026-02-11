import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IxeStays | Premium Private Stays',
  description: 'Two private homes. One unforgettable escape. Book your luxury stay at IxeStays - premium 3BHK and 2BHK private villas.',
  keywords: ['luxury stay', 'private villa', 'vacation rental', 'premium homestay', 'IxeStays'],
  openGraph: {
    title: 'IxeStays | Premium Private Stays',
    description: 'Two private homes. One unforgettable escape.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0F0F10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
