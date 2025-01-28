"use client"

import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const ProductCarousel = ({ products, category, slidesPerView = 1 }) => {
  const swiperRef = useRef(null)

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Products Container */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        spaceBetween={16}
        navigation={false}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: slidesPerView,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper px-8"
      >
        {products.map((product) => (
          <SwiperSlide key={product.productID}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <div className="text-xs text-gray-600 mb-2">{product.category}</div>
                <img
                  src={product.mainproductImage || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
                <h3 className="font-semibold text-md mb-2 line-clamp-2 capitalize">{product.title}</h3>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-600 font-semibold">{product.subtitle}</div>
                  <button className="bg-green-400 p-2 rounded-full text-white font-bold hover:bg-green-500 cursor-pointer flex items-center gap-1">
                    Place Order<i className="h-5 w-5 fab fa-whatsapp"></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ProductCarousel

