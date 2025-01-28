"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative h-96 mb-4">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Product image ${currentIndex + 1}`}
          className="w-full h-full object-contain rounded-lg"
        />
        <button
          onClick={goToPrevious}
          className="absolute cursor-pointer top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex space-x-6 overflow-x-auto pb-2 justify-center pt-1">
        {images.map((image, imageIndex) => (
          <button
            key={imageIndex}
            onClick={() => goToSlide(imageIndex)}
            className={`flex-shrink-0 w-20 h-20 focus:outline-none ${
              currentIndex === imageIndex ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${imageIndex + 1}`}
              className="w-full h-full object-contain rounded-md cursor-pointer"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel

