"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react"

interface ImageGalleryProps {
  images: { src: string; alt: string }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [current, setCurrent] = useState(0)
  const [fullscreen, setFullscreen] = useState(false)

  const next = () => setCurrent((prev) => (prev + 1) % images.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length)

  return (
    <>
      {/* Main Gallery */}
      <div className="relative w-full">
        {/* Main Image */}
        <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[current].src || "/placeholder.svg"}
                alt={images[current].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={current === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              type="button"
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-full text-foreground hover:bg-background/80 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-10 h-10 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-full text-foreground hover:bg-background/80 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Fullscreen toggle */}
          <button
            type="button"
            onClick={() => setFullscreen(true)}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-background/60 backdrop-blur-sm rounded-full text-foreground hover:bg-background/80 transition-colors"
            aria-label="View fullscreen"
          >
            <Expand size={18} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-background/60 backdrop-blur-sm rounded-full">
            <span className="text-xs text-foreground tracking-wider">
              {current + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              type="button"
              key={img.src}
              onClick={() => setCurrent(i)}
              className={`relative w-20 h-14 flex-shrink-0 rounded-sm overflow-hidden transition-all duration-300 ${
                i === current
                  ? "ring-2 ring-primary opacity-100"
                  : "opacity-50 hover:opacity-80"
              }`}
              aria-label={`View ${img.alt}`}
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {fullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-card rounded-full text-foreground hover:bg-secondary transition-colors z-10"
              aria-label="Close fullscreen"
            >
              <X size={20} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center px-16">
              <div className="relative w-full max-w-5xl aspect-[16/10]">
                <Image
                  src={images[current].src || "/placeholder.svg"}
                  alt={images[current].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                type="button"
                onClick={prev}
                className="absolute left-4 w-12 h-12 flex items-center justify-center bg-card rounded-full text-foreground hover:bg-secondary transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-4 w-12 h-12 flex items-center justify-center bg-card rounded-full text-foreground hover:bg-secondary transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="text-sm text-muted-foreground">
                {current + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
