"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import image from './client.jpeg'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechInnovate',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'This technology has revolutionized our development process. It\'s faster, more efficient, and incredibly user-friendly.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Developer, CodeCraft',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'I\'ve never seen such a powerful yet intuitive platform. It\'s changed the way we approach problem-solving.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager, FutureTech',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'The support and documentation are top-notch. It\'s rare to find a tool that\'s both cutting-edge and well-supported.',
  },
  {
    id: 4,
    name: 'David Lee',
    role: 'Founder, InnovateCo',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'Implementing this solution has significantly boosted our productivity and reduced time-to-market for our products.',
  },
  {
    id: 5,
    name: 'Lisa Patel',
    role: 'Senior Engineer, DataDynamics',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'The scalability and performance of this platform are unmatched. It\'s been a game-changer for our data processing needs.',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    role: 'UX Designer, DesignWave',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'As a designer, I appreciate how this tool seamlessly integrates with our workflow, enhancing our creative process significantly.',
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto relative overflow-hidden">
    <div className="relative z-10">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full border-4 border-indigo-100"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-indigo-600 font-medium">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic text-lg leading-relaxed">{testimonial.quote}</p>
    </div>
    <div className="mt-4 flex justify-end relative z-10">
      <FaQuoteLeft className="text-4xl text-indigo-400" />
    </div>
  </div>
);

const TechAnimation = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-indigo-500 rounded-full"
        style={{
          width: Math.random() * 8 + 4,
          height: Math.random() * 8 + 4,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -15, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 2 + 1,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut',
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>
);

export default function RefinedTechTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <TechAnimation />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Hear from professionals how our solution is impacting their businesses and transforming their workflow.
          </p>
        </motion.div>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-indigo-100 transition-colors duration-200 focus:outline-none"
          >
            <FaChevronLeft className="text-indigo-600" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-indigo-100 transition-colors duration-200 focus:outline-none"
          >
            <FaChevronRight className="text-indigo-600" />
          </motion.button>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-indigo-600' : 'bg-indigo-200'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}