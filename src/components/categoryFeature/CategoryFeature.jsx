"use client"

import { ChevronRight } from "lucide-react"
import ProductCarousel from "../productCarousel/ProductCarousel"

const CategoryFeature = ({
  title,
  subtitle,
  price,
  description,
  imageUrl,
  products,
  viewAllLink,
  imagePosition = "left",
  backgroundColor = "bg-gray-50",
}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Hero Banner */}
        <div className={`${imagePosition === "right" ? "md:order-2" : ""}  shadow-lg`}>
          <div className={`${backgroundColor} rounded-lg p-8 h-full relative`}>
            <div className="max-w-md">
              {subtitle && <span className="text-sm font-medium text-gray-600 mb-2 block">{subtitle}</span>}
              <h2 className="text-4xl font-bold mb-4">{title}</h2>
              {description && <p className="text-xl text-gray-600 mb-4">{description}</p>}
              {price && (
                <div className="mb-6">
                  <span className="text-sm">FROM</span>
                  <div className="text-4xl font-bold">
                    ${price}
                    <span className="text-xl">.99</span>
                  </div>
                </div>
              )}
              <a
                href={viewAllLink}
                className="inline-flex items-center bg-yellow-400 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
              >
                VIEW ALL
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <img src={imageUrl} className="absolute w-[300px] object-contain bottom-0 right-0"/>
          </div>
        </div>

        {/* Products Section */}
        <div className={`${imagePosition === "right" ? "md:order-1" : ""}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">{title}</h3>
            <a href={viewAllLink} className="text-blue-600 hover:text-blue-700 flex items-center">
              View All Product
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <ProductCarousel products={products} slidesPerView={2} spaceBetween={16} />
        </div>
      </div>
    </div>
  )
}

export default CategoryFeature

