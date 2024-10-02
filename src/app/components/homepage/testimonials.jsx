'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechInnovate',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'This technology has revolutionized our development process. It\'s faster, more efficient, and incredibly user-friendly.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer, CodeCraft',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'I\'ve never seen such a powerful yet intuitive platform. It\'s changed the way we approach problem-solving.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, FutureTech',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'The support and documentation are top-notch. It\'s rare to find a tool that\'s both cutting-edge and well-supported.',
  },
 
]

const CurvedBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg
      className="absolute bottom-0 left-0 w-full h-full"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 800V0H1440V800C1080 650 360 950 0 800Z"
        fill="url(#gradient)"
      />
      <defs>
        <linearGradient id="gradient" x1="720" y1="0" x2="720" y2="800" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" stopOpacity="0.05" />
          <stop offset="1" stopColor="#4F46E5" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
  >
    <div className="flex items-center mb-4">
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={64}
        height={64}
        className="rounded-full border-2 border-indigo-300"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
        <p className="text-indigo-600 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-700 text-base italic">&ldquo;{testimonial.quote}&rdquo;</p>
  </motion.div>
)

export default function Testimonials() {
  return (
    <div className="relative bg-gray-50 py-16 px-6 sm:px-8 lg:px-10">
      <CurvedBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            What Our Clients Say
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-gray-500 text-lg">
            Hear from professionals how our solution is impacting their businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </div>
    </div>
  )
}
