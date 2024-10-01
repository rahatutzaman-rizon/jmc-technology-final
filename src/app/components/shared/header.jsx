"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const services = [
    "Web Development",
    "App Development",
    "Domain Hosting Services",
    "Product Design",
    "Graphic Design",
    "Motion Graphic Design",
    "Digital Marketing",
    "SEO Services",
    "Media Support",
    "IT Consultancy Services",
    "Cybersecurity Services",
    "DevOps Services",
    "E-commerce Solutions",
    "Quality Assurance and Testing Services",
  ];

  return (
    <div>
      {/* Navbar */}
      <header className="bg-white shadow-md w-full py-4 px-8 flex justify-between items-center relative">
        <div className="flex items-center">
          <Image
            src="/logo.png" // Replace with your logo path
            alt="Logo"
            className="w-12 h-12 mr-3"
            height={100}
            width={100}
          />
          <span className="text-2xl font-bold text-green-400">JMC TECHNOLOGY LTD.</span>
        </div>
        <nav className="flex space-x-6 relative">
          <a href="#" className="text-black font-medium hover:text-purple-600 transition-colors">Home</a>
          <div 
            className="relative"
            onMouseEnter={() => setIsPopupOpen(true)}
            onMouseLeave={() => setIsPopupOpen(false)}
          >
            <button className="text-black font-medium hover:text-purple-600 transition-colors">
              Our Services
            </button>
            {/* Services Popup */}
            {isPopupOpen && (
              <motion.div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <h2 className="text-lg font-bold text-purple-600 p-2 border-b">Our Services</h2>
                <ul className="p-2">
                  {services.map((service, index) => (
                    <li key={index} className="text-black font-medium hover:text-purple-600 transition-colors p-1">
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
          <a href="#" className="text-black font-medium hover:text-purple-600 transition-colors">All Products</a>
          <a href="#" className="text-black font-medium hover:text-purple-600 transition-colors">Blog</a>
          <a href="#" className="text-black font-medium hover:text-purple-600 transition-colors">Career</a>
          <a href="#" className="text-black font-medium hover:text-purple-600 transition-colors">Contact Us</a>
        </nav>
      </header>
    </div>
  );
}
