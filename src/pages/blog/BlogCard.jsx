
const BlogCard = ({ title, image, content, slug, points, url }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-48 w-full object-cover md:h-full md:w-78"
          />
        </div>
        <div className="p-8">
          <a
            href={`/blog/${slug}`}
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-600 mb-4">{content}</p>
          <ul className="mb-5">
            {points.map((point, index) => {
              return (<li key={index} className="mb-3">🔷 {point}</li>)
            })}
          </ul>
          <div className="flex gap-5 max-sm:flex-col">
            <a href={url} className="border py-2 px-5 w-full mr-10">
              Explore Our Collection
            </a>
            <a href="/contact" className="border py-2 px-5">
              Talk to Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard

