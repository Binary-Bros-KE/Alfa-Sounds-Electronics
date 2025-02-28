import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CategoriesSlider from "../../components/categoriesSlider/CategoriesSlider"
import ProductCard from "./ProductCard"
import { productsData } from "../../data/products"

const CategoryProductsPage = () => {
  const { category } = useParams()
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  useEffect(() => {
    const filtered = productsData.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when category changes
  }, [category])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <section className="category-products-page mx-auto px-4 py-8 eakha-container">
      <CategoriesSlider />
      <h1 className="text-3xl font-bold mt-8 mb-6 capitalize">{filteredProducts.length > 0 && currentProducts[0].categoryUSer}</h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600 mt-12">No products found in this category.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {currentProducts.map((product) => (
              <ProductCard key={product.productID} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  )
}

export default CategoryProductsPage

