import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTiktok, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const EnhancedFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-gray-300 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl text-white mb-4 pb-2 border-b-2 border-blue-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-400" />
                <span>+880 13212 10093</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href="mailto:hello@jmc.technology" className="hover:text-blue-400 transition duration-300">hello@jmc.technology</a>
              </li>
              <li className="flex items-center">
                <FaGlobe className="mr-3 text-blue-400" />
                <a href="https://www.jmc.technology" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">www.jmc.technology</a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl text-white mb-4 pb-2 border-b-2 border-blue-500">Address</h3>
            <p className="flex items-start">
              <FaMapMarkerAlt className="mr-3 mt-1 text-blue-400" />
              <span>Flat# 9B, Level# 09, Main Road, Block# H, Aftabnagar, <br></br>Badda, Dhaka-1212, Bangladesh</span>
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl text-white mb-4 pb-2 border-b-2 border-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition duration-300 flex items-center">
                  <span className="mr-2">▸</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300 flex items-center">
                  <span className="mr-2">▸</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition duration-300 flex items-center">
                  <span className="mr-2">▸</span> Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl text-white mb-4 pb-2 border-b-2 border-blue-500">Follow Us</h3>
            <div className="grid grid-cols-4 gap-4">
              <a href="https://www.facebook.com/JMCTechBD" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition duration-300 flex items-center justify-center">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/jmctech" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://www.youtube.com/@jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center">
                <FaYoutube size={20} />
              </a>
              <a href="https://www.tiktok.com/@jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-black transition duration-300 flex items-center justify-center">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.x.com/jmctechnology24" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition duration-300 flex items-center justify-center">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.threads.net/@jmctechnologyltd" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-full hover:bg-purple-600 transition duration-300 flex items-center justify-center">
                <SiThreads size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 bg-white p-2 rounded-lg">
            <Image src="/logo.png" alt="JMC Technology Logo" width={150} height={50} />
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-lg">
              <Image src="/caab-logo.png" alt="CAAB Logo" width={80} height={40} />
            </div>
            <div className="bg-white p-2 rounded-lg">
              <Image src="/taan-logo.png" alt="TAAN Logo" width={80} height={40} />
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} JMC Technology Ltd. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-board" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80H10z" fill="none" stroke="#FFFFFF" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="3" fill="#FFFFFF"/>
              <path d="M50 10v30M10 50h30M90 50h-30M50 90v-30" stroke="#FFFFFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-board)"/>
        </svg>
      </div>
    </footer>
  );
};

export default EnhancedFooter;