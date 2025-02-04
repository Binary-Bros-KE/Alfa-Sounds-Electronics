'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const CategoriesSlider = () => {
    const containerRef = useRef(null)
    const x = useMotionValue(0)
    
    const categories = [
        {
            title: "Aerials & Satellites",
            image: "/categories/satellite.png",
            href: "/products/aerials-and-satellites",
            id: 1
        },
        {
            title: "Networking Routers & Receivers",
            image: "/categories/routers.png",
            href: "/products/routers-and-receivers",
            id: 2
        },
        {
            title: "Live Streaming and Conference Facilities",
            image: "/categories/ps.png",
            href: "/products/ps-conference-system",
            id: 3
        },
        {
            title: "TVs, Projectors & TV Brackets",
            image: "/categories/brackets.png",
            href: "/products/tv-screens-and-brackets",
            id: 4
        },
        {
            title: "CCTV Cameras",
            image: "/categories/cctv.png",
            href: "/products/cctv-cameras",
            id: 5
        },
        {
            title: "Power Supply",
            image: "/categories/power.png",
            href: "/products/power-supply",
            id: 6
        },
        {
            title: "Cables & Connectors",
            image: "/categories/cables.png",
            href: "/products/cables-and-connectors",
            id: 7
        },
        {
            title: "Automatic Gates and Doors",
            image: "/categories/gates.png",
            href: "/products/automatic-gates-and-doors",
            id: 8
        }
    ]

    return (
        <div className="relative overflow-hidden px-4 py-8">
            <motion.section 
                ref={containerRef}
                className="flex gap-4 cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ 
                    right: 0,
                    left: -((categories.length * 300) - window.innerWidth + 32) // Adjust based on item width and padding
                }}
                dragElastic={0.1}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                style={{ x }}
            >
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        className="flex-shrink-0 w-[300px]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        
                        <div href={category.href} className="category-item bg-blue-200 hover:bg-blue-600 transition-all duration-300 flex items-center py-2 px-4 gap-4 rounded-md cursor-pointer group">
                            <div className="category-item-image h-[50px] w-[50px] flex items-center justify-center border-r-2 border-gray-400 pr-2">
                                <a href={category.href}>
                                <img 
                                    src={category.image || "/placeholder.svg"} 
                                    alt={category.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                                </a>
                            </div>
                            <a href={category.href}>
                            <h4 className="font-bold text-gray-600 group-hover:text-white transition-colors line-clamp-2">
                                {category.title}
                            </h4>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.section>

            {/* Fade Edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
        </div>
    )
}

export default CategoriesSlider
