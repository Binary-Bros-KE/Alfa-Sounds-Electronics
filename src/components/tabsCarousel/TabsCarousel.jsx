"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { productsData } from "../../data/products"
import ProductCarousel from "../productCarousel/ProductCarousel"

const TabsCarousel = ({ defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const tabs = [
    { id: "aerials-and-satellites", label: "Aerials & Satellites" },
    { id: "routers-and-receivers", label: "Routers & Receivers" },
    { id: "cables-and-connectors", label: "Cables & Connectors" },
    { id: "tv-screens-and-brackets", label: "Tv Screen & Brackets" },
  ]

  const getFilteredProducts = (category) => {
    return productsData.filter((product) => product.category === category)
  }

  return (
    <div className="mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors
              ${activeTab === tab.id ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Carousel Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <ProductCarousel products={getFilteredProducts(activeTab)} slidesPerView={4} spaceBetween={1} />
      </motion.div>
    </div>
  )
}

export default TabsCarousel

