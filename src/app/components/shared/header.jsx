'use client'

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import logo from "../../../assets/client/Tech-logo.png"

const services = [
  "Web Development", "App Development", "Domain Hosting", "Motion Graphics",
  "Digital Marketing", "SEO Services", "Media Support", "IT Consultancy",
  "Cybersecurity", "DevOps Services", "E-commerce Solutions", "QA and Testing"
]

const products = [
  "eCommerce", "Education", "Real Estate", "Healthcare", "Fintech",
  "Manufacturing", "Professional Services", "Non-Profit", "Entertainment",
  "Fashion and Apparel", "Sports & Fitness"
]

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-800 font-semibold text-base hover:text-blue-600 transition-colors"
  >
    {children}
  </Link>
)

const DropdownLink = ({ title, items, isOpen, setIsOpen, ref }) => (
  <div
    className="relative "
    onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    ref={ref}
  >
    <button className="text-gray-800 font-semibold text-base hover:text-blue-600 transition-colors flex items-center">
      {title}
      <ChevronDown size={16} className="ml-1" />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-20"
        >
          <div className="grid grid-cols-1 gap-1 p-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={`/${title.toLowerCase().replace(/\s+/g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors py-2 px-4 rounded-md"
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

const MobileNavLink = ({ href, onClick, children }) => (
  <Link
    href={href}
    className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition-colors py-2"
    onClick={onClick}
  >
    {children}
  </Link>
)

const MobileDropdownLink = ({ title, items, isOpen, setIsOpen, closeMenu }) => (
  <div className="relative">
    <button
      className="w-full text-left text-gray-800 font-semibold text-lg hover:text-blue-600 transition-colors py-2 flex items-center justify-between"
      onClick={() => setIsOpen(!isOpen)}
    >
      {title}
      <ChevronDown size={20} className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-2 bg-gray-50 rounded-lg"
        >
          <div className="py-2">
            {items.map((item, index) => (
              <Link
                key={index}
                href={`/${title.toLowerCase().replace(/\s+/g, "-")}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => {
                  setIsOpen(false)
                  closeMenu()
                }}
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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const servicesRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
      if (productsRef.current && !productsRef.current.contains(event.target)) {
        setIsProductsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [servicesRef, productsRef])

  return (
    <header className="bg-white shadow-md w-full h-28 py-2 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="JMC Technology Logo"
            width={130}
            height={80}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <DropdownLink
            title="Our Services"
            items={services}
            isOpen={isServicesOpen}
            setIsOpen={setIsServicesOpen}
            ref={servicesRef}
          />
          <DropdownLink
            title="All Products"
            items={products}
            isOpen={isProductsOpen}
            setIsOpen={setIsProductsOpen}
            ref={productsRef}
          />
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/career">Career</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 bg-white"
          >
            <div className="flex flex-col space-y-2 p-4">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileDropdownLink
                title="Our Services"
                items={services}
                isOpen={isServicesOpen}
                setIsOpen={setIsServicesOpen}
                closeMenu={() => setIsMenuOpen(false)}
              />
              <MobileDropdownLink
                title="All Products"
                items={products}
                isOpen={isProductsOpen}
                setIsOpen={setIsProductsOpen}
                closeMenu={() => setIsMenuOpen(false)}
              />
              <MobileNavLink href="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </MobileNavLink>
              <MobileNavLink href="/career" onClick={() => setIsMenuOpen(false)}>
                Career
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </MobileNavLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
