const BlogFeature = () => {
    const guides = [
        {
            id: 1,
            title: "Intel hits 6GHz with its 14th-gen desktop CPUs",
            image: "/public/blog/cables.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "The best smart home gadgets for 2023",
            image: "/public/blog/cctv.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "How to build a custom keyboard",
            image: "/public/blog/router.png",
            link: "#",
        },
        {
            id: 4,
            title: "Intel hits 6GHz with its 14th-gen desktop CPUs",
            image: "/public/blog/aerials.jpg",
            link: "#",
        },
    ]

    return (
        <div className="mt-10">
            {/* Buying Guides */}
            <h2 className="text-3xl font-bold text-center mb-8 uppercase">Blog - Buying Guidelines</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {guides.map((guide) => (
                    <a
                        key={guide.id}
                        href={guide.link}
                        className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative">
                            <img
                                src={guide.image || "/placeholder.svg"}
                                alt={guide.title}
                                className="w-full aspect-[6/3] object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {guide.title}
                            </h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default BlogFeature