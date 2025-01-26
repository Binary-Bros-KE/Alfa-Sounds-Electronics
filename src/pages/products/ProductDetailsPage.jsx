"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { productsData } from "../../data/products"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

const ProductDetailsPage = () => {
  const { name } = useParams()
  const [product, setProduct] = useState(null)
  const [currentImage, setCurrentImage] = useState("")

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.name === name)
    if (foundProduct) {
      setProduct(foundProduct)
      setCurrentImage(foundProduct.mainproductImage)
    }
  }, [name])

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const handleImageClick = (image) => {
    setCurrentImage(image)
  }

  const whatsappLink = `https://wa.me/1234567890?text=I'm%20interested%20in%20ordering%20${encodeURIComponent(product.title)}`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div>
          <img
            src={currentImage || "/placeholder.svg"}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg shadow-md"
          />
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {[product.mainproductImage, ...product.secondaryImages].map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.title} - Image ${index + 1}`}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer ${currentImage === image ? "border-2 border-blue-500" : ""}`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>

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
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white py-3 px-6 rounded-md inline-flex items-center justify-center hover:bg-green-600 transition-colors duration-300 gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            Order on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage

