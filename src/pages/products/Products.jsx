import { useState, useEffect } from "react"
import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider"
import ProductCard from "./ProductCard"
import { productsData } from '../../data/products'

const ProductsPage = () => {
  const [randomizedProducts, setRandomizedProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  useEffect(() => {
    const shuffledProducts = [...productsData].sort(() => 0.5 - Math.random())
    setRandomizedProducts(shuffledProducts)
  }, [])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = randomizedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(randomizedProducts.length / productsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="products-page mx-auto px-4 py-8 eakha-container">
      <CategoriesSlider />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {currentProducts.map((product) => (
          <ProductCard key={product.productID} product={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`mx-1 px-3 py-1 rounded cursor-pointer  ${
              currentPage === pageNumber ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </section>
  )
}

export default ProductsPage

