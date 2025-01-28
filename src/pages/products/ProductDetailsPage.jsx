"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { productsData } from "../../data/products"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import ImageCarousel from "./ImageCarousel"

const ProductDetailsPage = () => {
  const { name } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.name === name)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [name])

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const whatsappLink = `whatsapp://send?phone=+254720434209&text=I'm%20interested%20in%20ordering%20${encodeURIComponent(product.title)}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Carousel */}
        <ImageCarousel images={product.secondaryImages} />

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4 capitalize">{product.title}</h1>
          <p className="text-xl text-blue-600 mb-4 font-bold capitalize">{product.subtitle}</p>
          <h2 className="text-xl font-semibold mb-2">Specifications:</h2>
          <ul className="list-disc pl-5 mb-6">
            {product.specs.map((spec, index) => (
              <li key={index} className="text-sm text-gray-600 mb-1 capitalize" dangerouslySetInnerHTML={{ __html: spec }} />
            ))}
          </ul>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Tags:</h2>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <a
            href={whatsappLink}
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-3 px-6 rounded-md inline-flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
          >
            <WhatsappIcon className="w-5 h-5 mr-2" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage

