"use client"

import { Phone, Mail, MessageCircle } from "lucide-react"

const HelpFeature = () => {


  return (
    <div className="px-4 mx-auto py-12">

      {/* Newsletter and Help Section */}
      <div className="grid md:grid-cols-2 gap-8 max-sm:mx-4">
        {/* Newsletter */}
        <div className="bg-gray-200 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Newsletter</h3>
          <p className="text-gray-600 mb-4">Subscribe to get the latest deals, promotions and offering.</p>
          <div className="flex gap-2 max-sm:flex-col">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-yellow-400 px-6 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800 mt-4 inline-block underline">
            About our Newsletter
          </a>
        </div>

        {/* Help Section */}
        <div className="bg-white p-8 rounded-lg border border-blue-300">
          <h3 className="text-2xl font-bold mb-2">You Need Help?</h3>
          <p className="text-gray-600 mb-6">
            Do not hesitate to ask, our specialists will help you choose proper products.
          </p>
          <div className="grid grid-cols-3 gap-4">
          <a href="whatsapp://send?phone=+254720434209" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <i className="fab fa-whatsapp w-6 h-6 text-gray-600 group-hover:text-blue-600 text-2xl"></i>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-blue-600">Chat Online</span>
            </a>
            <a href="tel:+254720434209" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <Phone className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-blue-600">Call Us</span>
            </a>
            <a href="mailto:info@eakhalimited.co.ke" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-blue-600">E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HelpFeature

