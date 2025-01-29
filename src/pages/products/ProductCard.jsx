const ProductCard = ({ product }) => {
  const whatsappLink = `whatsapp://send?phone=+254720434209&text=I'm%20interested%20in%20${encodeURIComponent(product.title)}`

  return (
    <a href={`/products/${product.category}/${product.name}`} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        src={`${product.mainproductImage}` || "/placeholder.svg"}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 capitalize">{product.title}</h3>
        <p className="text-sm text-gray-600 mb-2 capitalize">{product.subtitle}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-800 capitalize">{product.brand}</span>
          <span className="text-sm font-medium text-gray-800 capitalize">{product.condition}</span>
        </div>
        <a
          href={whatsappLink}
          rel="noopener noreferrer"
          className="mt-4 w-full text-green-600 font-bold py-2 px-4 rounded-md flex items-center justify-center hover:bg-green-600 transition-colors duration-300 gap-2 border-1 border-green-600 hover:text-white"
        >
          <i className="fab fa-whatsapp"></i>
          Get Price
        </a>
      </div>
    </a>
  )
}

export default ProductCard

