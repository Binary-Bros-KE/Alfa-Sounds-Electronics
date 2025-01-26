import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      subtitle: "SHOP TO GET WHAT YOU LOVE",
      title: "TIMEPIECES THAT MAKE A STATEMENT",
      discount: "40% OFF",
      buttonText: "Start Buying",
      image: "/hero-slider/tenda.png",
      bgColor: "bg-gray-100",
    },
    {
      subtitle: "NEW TECHNOLOGY",
      title: "AMAZING DEVICES FOR YOUR LIFESTYLE",
      discount: "30% OFF",
      buttonText: "Shop Now",
      image: "/hero-slider/ps.png",
      bgColor: "bg-blue-50",
    },
    {
      subtitle: "SPECIAL OFFER",
      title: "PREMIUM QUALITY GADGETS",
      discount: "25% OFF",
      buttonText: "Discover More",
      image: "/hero-slider/hdmi.png",
      bgColor: "bg-yellow-50",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={`relative flex h-full w-full items-center justify-between px-4 md:px-20 ${slides[currentSlide].bgColor}`}
        >
          {/* Content */}
          <div className="z-10 max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block text-sm font-medium text-blue-500"
            >
              {slides[currentSlide].subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-4xl font-bold leading-tight md:text-5xl"
            >
              {slides[currentSlide].title}
              <div className="mt-2 text-3xl font-bold text-gray-800 md:text-4xl">
                UP TO <span className="text-blue-600">{slides[currentSlide].discount}</span>
              </div>
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 rounded-md bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-yellow-500 cursor-pointer"
            >
              {slides[currentSlide].buttonText}
            </motion.button>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute right-25 top-1/2 hidden -translate-y-1/2 transform md:block"
          >
            <img
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt="Slider"
              className="h-[400px] w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? "w-8 bg-blue-400" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlider

