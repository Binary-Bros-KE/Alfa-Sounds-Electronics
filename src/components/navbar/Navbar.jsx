"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Search, ChevronDown } from "lucide-react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);

    const categories = [
        "Aerials & Satellites",
        "Networking Routers & Receivers",
        "Live Streaming and Conference Facilities.",
        "Tvs, Projectors & Tv brackets ",
        "CCTV Cameras",
        "Cables & Connectors",
        "Automatic Gates and Doors",
    ]

    const navLinks = [
        { name: "Home", hasDropdown: false },
        { name: "Shop", hasDropdown: false },
        { name: "Products", hasDropdown: false },
        { name: "Pages", hasDropdown: false },
        { name: "Contact", hasDropdown: false },
    ]

    return (
        <div className="w-full bg-white shadow-md">
            <div className="navbar-content">
            {/* Top Bar */}
            <div className="bg-blue-600">
                <div className="hidden lg:flex items-center justify-between px-4 py-2 eakha-container">
                <div className="flex gap-2 items-center  text-white">
                <p className="text-sm  text-white font-bold cursor-pointer">sales@eakhalimited.co.ke</p>|
                <p className="text-sm  text-white font-bold cursor-pointer">+254 748 496 414</p>
                </div>
                <div className="flex items-center gap-4  text-white">
                    <a href="" className="hover:text-yellow-300 transition-colors"> <i className="fab fa-facebook"></i> </a>
                    <a href="" className="hover:text-yellow-300 transition-colors"> <i className="fab fa-instagram"></i> </a>
                    <a href="" className="hover:text-yellow-300 transition-colors"> <i className="fab fa-twitter"></i> </a>
                    <a href="" className="hover:text-yellow-300  transition-colors"> <i className="fab fa-google"></i> </a>
                </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <Menu size={24} />
                        </button>
                        <h1 className="text-4xl font-bold">EAKHA LTD</h1>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden lg:flex flex-1 max-w-2xl relative">
                        <input
                            type="text"
                            placeholder="Search for Products"
                            className="w-full px-4 py-2 border-2 border-blue-600 rounded-l-full focus:outline-none"
                        />
                        <select className="px-4 py-2 border-2 border-l-0 border-blue-600 bg-white focus:outline-none cursor-pointer">
                            <option>All</option>
                            <option>Aerials & Satellites</option>
                            <option>Public Address</option>
                            <option>Routers & Receivers</option>
                            <option>TVs & Projectors</option>
                            <option>Cables and Connectors</option>
                            <option>Automatic Gates & Doors</option>
                            <option>CCTV Cameras</option>
                        </select>
                        <button className="px-6 py-2 bg-blue-600 rounded-r-full hover:bg-blue-500 text-white transition-colors">
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4">
                        <a href="" className="flex gap-4 bg-green-400 items-center py-2 px-4 text-white font-bold">
                            Contact Shop
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="hidden lg:flex items-center gap-8 mt-4">
                    {/* Departments Button */}
                    <div className="relative">
                        <button
                            className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-md text-white cursor-pointer"
                            onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
                        >
                            <Menu size={20} />
                            <span>Explore Categories</span>
                            <ChevronDown size={16} />
                        </button>

                        <AnimatePresence>
                            {isDepartmentsOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-50 w-64 mt-2 bg-white border rounded-md shadow-lg"
                                >
                                    {categories.map((dept, index) => (
                                        <button key={index} className="w-full px-4 py-2 text-left hover:bg-blue-100 transition-colors cursor-pointer">
                                            {dept}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Links */}
                    {navLinks.map((link, index) => (
                        <div key={index} className="relative group">
                            <button className="flex items-center gap-1 uppercase font-bold">
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={16} />}
                            </button>
                            {link.hasDropdown && (
                                <div className="hidden group-hover:block absolute z-50 w-48 mt-2 bg-white border rounded-md shadow-lg">
                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Submenu Item 1</button>
                                    <button className="w-full px-4 py-2 text-left hover:bg-gray-50">Submenu Item 2</button>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Free Shipping Text */}
                    <span className="ml-auto text-sm font-bold text-gray-600">Luthuli River Road Junction, Nrb</span>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -300 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -300 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-white"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h1 className="text-2xl font-bold">electro.</h1>
                                <button onClick={() => setIsOpen(false)}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto">
                                {categories.map((dept, index) => (
                                    <button
                                        key={index}
                                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b"
                                    >
                                        {dept}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            </div>
        </div>
    )
}

export default Navbar

