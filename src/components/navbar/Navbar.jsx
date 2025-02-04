"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // Use React Router for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const dropdownRef = React.useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDepartmentsOpen(false);
      }
    };

    if (isDepartmentsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDepartmentsOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Change 100 to the number of pixels you want before it sticks
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Categories with URL-friendly names
  const categories = [
    { name: "Aerials & Satellites", url: "aerials-and-satellites" },
    { name: "Networking Routers & Receivers", url: "routers-and-receivers" },
    { name: "Live Streaming and Conference Facilities.", url: "ps-conference-system" },
    { name: "Tvs, Projectors & Tv brackets", url: "tv-screens-and-brackets" },
    { name: "CCTV Cameras", url: "cctv-cameras" },
    { name: "Cables & Connectors", url: "cables-and-connectors" },
    { name: "Power Supply", url: "power-supply" },
    { name: "Automatic Gates and Doors", url: "automatic-gates-and-doors" },
  ];

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Buying Guides", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="w-full bg-white shadow-md">
      <div className="navbar-content p-0 m-0">
        {/* Top Bar */}
        <div className="bg-blue-600 px-4">
          <div className="hidden lg:flex items-center justify-between py-2 eakha-container">
            <div className="flex gap-2 items-center text-white">
              <p className="text-sm text-white font-bold cursor-pointer">
                sales@eakhalimited.co.ke
              </p>
              |
              <p className="text-sm text-white font-bold cursor-pointer">
                +254 748 496 414
              </p>
            </div>
            <div className="flex items-center gap-4 text-white">
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors">
                <i className="fab fa-google"></i>
              </a>
              |
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Menu size={24} />
              </button>
              <Link to="/" className="text-4xl font-bold">
                EAKHA LTD
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-2xl relative">
              <input
                type="text"
                placeholder="Search for Products"
                className="w-full px-4 py-2 border-2 border-blue-600 rounded-l-full focus:outline-none"
              />
              <select className="px-4 py-2 border-2 border-l-0 border-blue-600 bg-white focus:outline-none cursor-pointer">
                <option>All Products</option>
                {categories.map((category, index) => (
                  <option key={index}>{category.name}</option>
                ))}
              </select>
              <button className="px-6 py-2 bg-blue-600 rounded-r-full hover:bg-blue-500 text-white transition-colors cursor-pointer">
                <Search size={20} />
              </button>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <a
                href="whatsapp://send?phone=+254720434209"
                className="flex gap-4 bg-green-400 items-center py-2 px-4 text-white font-bold max-sm:py-1 max-sm:px-2"
              >
                <span className="max-sm:hidden">Contact Shop</span>
                <i className="max-sm:text-2xl fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Bottom Navigation */}
          {/* Bottom Navigation - Sticky */}
          <div
            className={`hidden lg:flex items-center gap-8 mt-4 py-3 transition-all duration-300 
          ${isSticky ? "fixed -top-4 px-12 left-0 w-full z-50 bg-white shadow-lg" : "relative"}`} >
            {/* Departments Button */}
            <div className="relative" ref={dropdownRef}>
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
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/products/${category.url}`}
                        className="w-full block px-4 py-2 text-left hover:bg-blue-100 transition-colors cursor-pointer"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Links */}
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="uppercase font-bold cursor-pointer hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            {/* Free Shipping Text */}
            <span className="ml-auto text-sm font-bold text-gray-600">
              Luthuli River Road Junction, Nrb
            </span>
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
              <div className="flex flex-col h-full sticky">
                <div className="flex items-center justify-between p-4 border-b">
                  <a href="/" className="text-2xl font-bold">EAKHA LTD</a>
                  <button onClick={() => setIsOpen(false)}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      to={`/products/${category.url}`}
                      className="w-full block px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-blue-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
