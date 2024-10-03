import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaTwitter } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-4 border-b border-blue-500 pb-2">Contact Us</h3>
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              JMC Technology Hotline: +880 13212 10093
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              Administration: hello@jmc.technology
            </p>
            <p className="flex items-center">
              <span className="mr-2">🌐</span>
              Website: www.jmc.technology
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-4 border-b border-blue-500 pb-2">Address</h3>
            <p className="flex items-start">
              <span className="mr-2 mt-1">📍</span>
              Flat# 9B, Level# 09, Main Road, Block# H, Aftabnagar, Badda, Dhaka-1212, Bangladesh
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-4 border-b border-blue-500 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition duration-300 flex items-center">
                  <span className="mr-2">👥</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300 flex items-center">
                  <span className="mr-2">🔒</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition duration-300 flex items-center">
                  <span className="mr-2">📄</span> Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-white mb-4 border-b border-blue-500 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/JMCTechBD" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/company/jmctech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://www.youtube.com/@jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition duration-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://www.tiktok.com/@jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                <FaTiktok size={24} />
              </a>
              <a href="https://www.x.com/jmctechnology24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-300 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.threads.net/@jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition duration-300">
                <SiThreads size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src="/logo.png" alt="JMC Technology Logo" width={150} height={50} className="filter brightness-0 invert" />
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/caab-logo.png" alt="CAAB Logo" width={80} height={40} className="filter brightness-0 invert" />
            <Image src="/taan-logo.png" alt="TAAN Logo" width={80} height={40} className="filter brightness-0 invert" />
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JMC Technology Ltd. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-board" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80H10z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="3" fill="rgba(255,255,255,0.05)"/>
              <path d="M50 10v30M10 50h30M90 50h-30M50 90v-30" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-board)"/>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;