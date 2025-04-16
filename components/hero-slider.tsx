"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export type Slide = {
  id: number
  title: string
  description: string
  imageUrl: string
  link?: string | null
  createdAt: Date
  updatedAt: Date
}

export function HeroSlider({ slides }: { slides: Slide[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [aspectRatio, setAspectRatio] = useState(16/9) // Default aspect ratio
  const sliderRef = useRef<HTMLDivElement>(null)
  
  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 30

  useEffect(() => {
    if (!isAutoplay || isPaused) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length, isPaused, isAutoplay])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)
  
  const toggleAutoplay = () => setIsAutoplay(!isAutoplay)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoading(false)
    
    // Calculate and set the aspect ratio based on the loaded image
    const img = e.target as HTMLImageElement
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(img.naturalWidth / img.naturalHeight)
    }
  }
  
  // Touch event handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    
    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div 
      ref={sliderRef}
      className="relative w-full overflow-hidden dark:bg-black"
      style={{ 
        paddingTop: `${(1 / aspectRatio) * 100}%`,
        maxHeight: "80vh" // Limit maximum height on very tall screens
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 dark:bg-black"
        >
          <div className="relative w-full h-full dark:bg-black">
            {/* Loading skeleton */}
            {isLoading && (
              <div className="absolute inset-0 bg-muted animate-pulse dark:bg-gray-800" />
            )}
            
            {/* Image container with fixed aspect ratio */}
            <div className="absolute inset-0 w-full h-full dark:bg-black">
              <div className="relative w-full h-full dark:bg-black">
                <Image
                  src={slides[currentSlide].imageUrl}
                  alt={slides[currentSlide].title}
                  fill
                  sizes="100vw"
                  className={cn(
                    "object-cover object-center transition-opacity duration-500",
                    isLoading ? "opacity-0" : "opacity-100",
                    "dark:opacity-100" // Ensure image is visible in dark mode
                  )}
                  priority={currentSlide === 0}
                  quality={90}
                  onLoad={handleImageLoad}
                  style={{ 
                    objectPosition: "center center",
                    filter: "brightness(1)" // Ensure proper brightness in dark mode
                  }}
                />
              </div>
            </div>
            
            {/* Enhanced gradient overlay with better text readability - stronger at bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80 dark:from-black/40 dark:via-black/30 dark:to-black/90" />
          </div>
          
          {/* Content container positioned at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4 sm:p-5 md:p-6">
            <div className="container mx-auto max-w-5xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-2 xs:space-y-3 sm:space-y-4"
              >
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-md">
                  {slides[currentSlide].title}
                </h1>
                <div className="max-h-12 xs:max-h-16 sm:max-h-20 md:max-h-24 overflow-y-auto custom-scrollbar">
                  <p className="text-xs xs:text-sm sm:text-base md:text-lg text-white/90 drop-shadow-sm">
                    {slides[currentSlide].description}
                  </p>
                </div>
                {slides[currentSlide].link && (
                  <div className="pt-1 xs:pt-2 sm:pt-3">
                    <Link href={slides[currentSlide].link!}>
                      <Button 
                        size="sm"
                        className="w-full xs:w-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm text-xs xs:text-sm transition-all duration-300 h-7 xs:h-8"
                      >
                        بیشتر بدانید
                      </Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons with improved positioning and styling */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-1 xs:px-2 sm:px-3 md:px-4 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 transition-all duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronRight className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 transition-all duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronLeft className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>

      {/* Slide controls and indicators */}
      <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-0 right-0 flex flex-col items-center">
        {/* Slide indicators */}
        <div className="flex space-x-1.5 xs:space-x-2 space-x-reverse mb-1 xs:mb-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full transition-all duration-300",
                currentSlide === index ? "bg-white w-3 xs:w-4" : "bg-white/50 hover:bg-white/70"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Autoplay toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full"
          onClick={toggleAutoplay}
          aria-label={isAutoplay ? "Pause autoplay" : "Start autoplay"}
        >
          {isAutoplay ? (
            <Pause className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
          ) : (
            <Play className="h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5" />
          )}
        </Button>
      </div>
      
      {/* Slide counter */}
      <div className="absolute top-2 xs:top-3 right-2 xs:right-3 bg-black/30 backdrop-blur-sm text-white text-[10px] xs:text-xs px-1.5 py-0.5 xs:px-2 xs:py-1 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}