import React from "react"
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, PinIcon as Pinterest } from "lucide-react"

const Footer = () => {
  const features = [
    {
      title: "Fast Delivery",
      description: "Delivery All Over the Country",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Original & Authentic",
      description: "Products from Manufacturers",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3l2.5 5 5.5.75-4 3.9.95 5.45L12 15.75 7.05 18.1l.95-5.45-4-3.9 5.5-.75L12 3z"
          />
        </svg>
      ),
    },
    {
      title: "Exclusive Offers and Deals",
      description: "Great Deals for our loyal clients",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
    },
    {
      title: "Contact Support",
      description: "24/7 Amazing services",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
  ]

  const footerLinks = {
    "Top Categories": [
      "Aerials & Satellites",
      "Routers & Receivers",
      "TVs & Projectors",
      "Cables and Connectors",
      "Automatic Gates & Doors"
    ],
    "Customer Service": [
      "Payment Methods",
      "Return Policy",
      "Delivery & Shipping",
      "Terms and conditions",
      "Privacy Policy",
    ],
  }

  return (
    <footer className="bg-white eakha-container">
      {/* Features Section */}
      <div className="mx-auto px-4 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-green-400 bg-gra">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-lg text-gray-600">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-green-200">
        <div className="mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div className="space-y-4">
              <div to="/" className="text-4xl font-bold">
                <img src="/logo.png" alt="logo" className="h-20" />
              </div>
              <div>
                <p className="font-bold">Got Question? Call us:</p>
                <div className="flex flex-col">
                  <a href="tel:+254722659725" className="text-green-500 text-xl font-bold">
                  <i className="max-sm:text-2xl fab fa-whatsapp"></i> (+254)722 659 725
                  </a>
                  <a href="tel:+254748496414" className="text-green-500 text-xl font-bold">
                    (+254)748 496 414
                  </a>
                  <a href="tel:+254720434209" className="text-green-500 text-xl font-bold">
                    (+254)720 434 209
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-bold text-lg mb-4">{title}</h4>
                <ul className="space-y-2">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-bold text-lg mb-4 text-right">Our Paybill</h4>
              <img src="/utility/paybill.png" className="w-full h-[180px]" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-300">
        <div className="mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600">
              Copyright © 2024 ALFA SOUNDS ELECTONICS CO LTD. All Rights Reserved.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-gray-900">
                Terms Of Use
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Social Media</span>
              <div className="flex gap-3">
                <a href="#" className="text-gray-600 hover:text-green-600">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-green-400">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <Youtube size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-600">
                  <Pinterest size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

