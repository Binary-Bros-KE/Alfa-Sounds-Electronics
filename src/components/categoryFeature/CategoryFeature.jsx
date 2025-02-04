"use client"

import { ChevronRight } from "lucide-react"
import ProductCarousel from "../productCarousel/ProductCarousel"

const CategoryFeature = ({
  title,
  subtitle,
  featureslist,
  description,
  imageUrl,
  products,
  viewAllLink,
  imagePosition = "left",
  backgroundColor = "bg-gray-50",
}) => {
  return (
    <div className="mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero Banner */}
        <div className={`${imagePosition === "right" ? "md:order-2" : ""} shadow-lg`}>
          <div className={`${backgroundColor} rounded-lg p-6 sm:p-8 h-full relative flex flex-col justify-center`}>
            <div className="max-w-md text-center md:text-left">
              {subtitle && <span className="text-sm font-medium text-gray-600 mb-2 block">{subtitle}</span>}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 capitalize">{title}</h2>
              {featureslist && (
                <ul className="mb-3">
                  {featureslist.map((feature, index) => (
                    <li key={index} className="capitalize before:content-['-'] before:text-blue-600 before:font-extrabold">
                      {" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              {description && <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">{description}</p>}
              <a
                href={viewAllLink}
                className="inline-flex items-center bg-yellow-400 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
              >
                VIEW ALL
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Image */}
            <div className="relative flex justify-center md:block mt-6 md:mt-0">
              <img
                src={imageUrl}
                className="w-[200px] sm:w-[250px] md:w-[300px] object-contain md:absolute md:-bottom-22 md:-right-15"
                alt="Category"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className={`${imagePosition === "right" ? "md:order-1" : ""}`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold capitalize">{title}</h3>
          </div>
          <ProductCarousel products={products} slidesPerView={2} smSlidesPerView={2} mdSlidesPerView={3} spaceBetween={16} />
        </div>
      </div>
    </div>
  )
}

export default CategoryFeature
