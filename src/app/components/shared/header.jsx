'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown, Settings, Code } from "lucide-react"
import image from "../../../assets/client/Tech-logo.png"

const services = [
  "Web Development", "App Development", "Domain Hosting", "Motion Graphics",
  "Digital Marketing", "SEO Services", "Media Support", "IT Consultancy",
]

const products = [
  "eCommerce", "Education", "Real Estate", "Healthcare", "Fintech",
  "Manufacturing", "Professional Services", "Non-Profit"
]

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-teal-800 font-medium hover:text-teal-700 transition-colors"
  >
    {children}
  </Link>
)



const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="relative group">
      <button 
        className="flex items-center text-teal-800 font-medium hover:text-teal-700 transition-colors"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {title}
        <ChevronDown size={16} className="ml-1" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 mt-4 w-[28rem] backdrop-blur-2xl bg-opacity-95 rounded-lg text-sm font-medium shadow-lg py-4 px-6 grid grid-cols-2 gap-4 z-50"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {items.map((item, index) => (
              <Link
                key={index}
                href={`/${title.toLowerCase().replace(/\s+/g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-teal-900 hover:text-teal-700 transition-colors"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileDropdown = ({ title, items, isOpen, setIsOpen }) => (
  <div className="mb-4">
    <button
      className="flex justify-between items-center w-full text-left text-gray-700 mb-2"
      onClick={() => setIsOpen(!isOpen)}
    >
      {title}
      <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pl-4 space-y-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={`/${title.toLowerCase().replace(/\s+/g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-2 text-gray-600 hover:text-blue-600"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)

  return (
    <header className="shadow fixed backdrop-blur-2xl bg-opacity-90 w-full top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src={image}
              alt="Company Logo"
              width={140}
              height={80}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ">
            <NavLink href="/">Home</NavLink>
            <DropdownMenu title="Services" items={services} />
            <DropdownMenu title="Products" items={products} />
            <NavLink href="/blogs">Blog</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link href="/" className="block py-2 text-gray-700">Home</Link>
              <MobileDropdown
                title="Services"
                items={services}
                isOpen={mobileServiceOpen}
                setIsOpen={setMobileServiceOpen}
              />
              <MobileDropdown
                title="Products"
                items={products}
                isOpen={mobileProductOpen}
                setIsOpen={setMobileProductOpen}
              />
              <Link href="/blogs" className="block py-2 text-gray-700">Blog</Link>
              <Link href="/careers" className="block py-2 text-gray-700">Careers</Link>
              <Link href="/contact" className="block py-2 text-gray-700">Contact</Link>
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}