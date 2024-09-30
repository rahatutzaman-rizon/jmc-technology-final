import { MapPin, Mail, Phone, ArrowRight, Twitter, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#001524] text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-bold mb-4">JMC</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Aftabnagar, Dhaka, Bangladesh
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                hello@atoit.net
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +8801837200802
              </li>
            </ul>
          </div>

          {/* Middle column */}
          <div>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay up to date.</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="johndoe@mail.com"
                className="bg-white text-black px-4 py-2 rounded-l-md w-full"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-200"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </form>
            <div className="mt-4">
              <h4 className="text-sm mb-2">Follow us on</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300" aria-label="Twitter">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300" aria-label="Facebook">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300" aria-label="Instagram">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>All rights reserved. © 2024</p>
        </div>
      </div>
    </footer>
  )
}