const BlogFeature = () => {
    const guides = [
        {
            id: 1,
            title: "How to Choose the Right Ethernet Cable for Speed & Reliability",
            image: "/public/blog/cables.jpg",
            link: "#",
        },
        {
            id: 2,
            title: "Essential Factors to Consider When Buying a CCTV Camera",
            image: "/public/blog/cctv.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "Finding the Best Network Solution for Your Needs",
            image: "/public/blog/router.png",
            link: "#",
        },
        {
            id: 4,
            title: "Selecting the Perfect Setup for Clear Reception",
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
                            <h3 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300 text-ce">
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