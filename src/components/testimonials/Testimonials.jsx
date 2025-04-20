"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Check } from "lucide-react"

// Import Swiper styles
import "swiper/css"

const reviews = [
    {
      id: 1,
      name: "Kevin Otieno",
      avatar: "KO",
      rating: 5,
      review: "Top-notch service! The spare parts I ordered were genuine and arrived in perfect condition.",
      date: "3 MONTHS AGO",
    },
    {
      id: 2,
      name: "Mercy Wanjiru",
      avatar: "MW",
      rating: 4,
      review: "Great quality, but delivery took a bit longer than expected. Overall, satisfied with my purchase.",
      date: "6 MONTHS AGO",
    },
    {
      id: 3,
      name: "S.Njoroge",
      avatar: "SN",
      rating: 5,
      review: "These guys know their stuff! My car runs smoothly thanks to the high-quality engine parts.",
      date: "1 YEAR AGO",
    },
    {
      id: 4,
      name: "Faith Achieng",
      avatar: "FA",
      rating: 5,
      review: "Very helpful customer support. They guided me in choosing the right brake pads for my car.",
      date: "2 WEEKS AGO",
    },
    {
      id: 5,
      name: "Peter Mwangi",
      avatar: "PM",
      rating: 4,
      review: "Reliable products, but I wish they had more variety for older car models.",
      date: "5 MONTHS AGO",
    },
    {
      id: 6,
      name: "Janet Mutiso",
      avatar: "JM",
      rating: 5,
      review: "Highly recommend! Affordable prices and top-quality parts for my vehicle.",
      date: "8 MONTHS AGO",
    },
    {
      id: 7,
      name: "Brian Kiprop",
      avatar: "BK",
      rating: 3,
      review: "Good products but had an issue with my order. Customer service was helpful in resolving it.",
      date: "10 MONTHS AGO",
    },
    {
      id: 8,
      name: "Catherine Nduta",
      avatar: "CN",
      rating: 5,
      review: "This is my go-to shop for car accessories. Never disappointed!",
      date: "1 YEAR AGO",
    },
    {
      id: 9,
      name: "Dennis.O",
      avatar: "DO",
      rating: 4,
      review: "The battery I bought is performing well. Pricing was fair compared to other shops.",
      date: "3 MONTHS AGO",
    },
    {
      id: 10,
      name: "Lucy Wekesa",
      avatar: "LW",
      rating: 5,
      review: "Fantastic experience! Quick delivery and authentic spare parts.",
      date: "2 MONTHS AGO",
    },
  ];
  

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-400 hover:border-green-400 relative group h-full cursor-pointer">
      <div className="flex items-start gap-3 mb-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-lg font-semibold relative">
            {review.avatar}
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Check className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{review.name}</span>
            <span className="text-xs px-2 py-0.5 bg-green-50 text-green-600 rounded">REVIEWER</span>
          </div>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm text-gray-600">5/5</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{review.review}</p>
      <div className="text-sm text-gray-500 mb-4">{review.date}</div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="mx-auto px-4 eakha-container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Product Reviews</h2>
          <a href="/products" className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-2">
            Check Products
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials

