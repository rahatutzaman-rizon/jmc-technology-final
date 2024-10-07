'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import { 
  FaCode, 
  FaMobileAlt, 
  FaServer, 
  FaPaintBrush,
  FaVideo,
  FaBullhorn,
  FaChartLine,
  FaHeadphones,
  FaLaptopCode,
  FaShieldAlt,
  FaDev,
  FaShoppingCart,
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaAndroid,
  FaApple,
  FaCloud,
  FaFigma,
  FaSketch,
  FaAdobe,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
  FaAws,
  FaDocker,
  FaJenkins,
  FaBug
} from 'react-icons/fa'
import { SiMongodb, SiKubernetes, SiShopify } from 'react-icons/si'

const services = [
  {
    name: 'Web Development',
    icon: <FaCode className="w-8 h-8" />,
    description: 'Building modern and responsive websites for businesses and individuals.',
    techIcons: [
      { icon: <FaReact className="w-8 h-8" />, name: 'React' },
      { icon: <FaNodeJs className="w-8 h-8" />, name: 'Node.js' },
      { icon: <FaPhp className="w-8 h-8" />, name: 'PHP' },
      { icon: <FaLaravel className="w-8 h-8" />, name: 'Laravel' },
      { icon: <SiMongodb className="w-8 h-8" />, name: 'MongoDB' },
      { icon: <FaDatabase className="w-8 h-8" />, name: 'SQL' },
    ],
  },
  {
    name: 'App Development',
    icon: <FaMobileAlt className="w-8 h-8" />,
    description: 'Creating mobile applications for Android and iOS platforms.',
    techIcons: [
      { icon: <FaReact className="w-8 h-8" />, name: 'React Native' },
      { icon: <FaApple className="w-8 h-8" />, name: 'iOS' },
      { icon: <FaAndroid className="w-8 h-8" />, name: 'Android' },
    ],
  },
  {
    name: 'Domain Hosting Services',
    icon: <FaServer className="w-8 h-8" />,
    description: 'Providing secure and fast hosting for your websites and applications.',
    techIcons: [
      { icon: <FaCloud className="w-8 h-8" />, name: 'Cloud Hosting' },
      { icon: <FaAws className="w-8 h-8" />, name: 'AWS' },
      { icon: <FaDatabase className="w-8 h-8" />, name: 'Database Hosting' },
    ],
  },
  {
    name: 'Product Design',
    icon: <FaPaintBrush className="w-8 h-8" />,
    description: 'Crafting user-centric designs for products that enhance user experiences.',
    techIcons: [
      { icon: <FaFigma className="w-8 h-8" />, name: 'Figma' },
      { icon: <FaSketch className="w-8 h-8" />, name: 'Sketch' },
      // { icon: <FaAdobe className="w-8 h-8" />, name: 'Adobe XD' },
    ],
  },
  
  
  {
    name: 'Digital Marketing',
    icon: <FaBullhorn className="w-8 h-8" />,
    description: 'Driving online presence and engagement through targeted digital campaigns.',
    techIcons: [
      { icon: <FaGoogle className="w-8 h-8" />, name: 'Google Ads' },
      { icon: <FaFacebookF className="w-8 h-8" />, name: 'Facebook Ads' },
      { icon: <FaInstagram className="w-8 h-8" />, name: 'Instagram Marketing' },
    ],
  },
  {
    name: 'SEO Services',
    icon: <FaChartLine className="w-8 h-8" />,
    description: 'Improving search engine rankings to increase visibility and organic traffic.',
    techIcons: [
      { icon: <FaGoogle className="w-8 h-8" />, name: 'Google Analytics' },
      { icon: <FaChartLine className="w-8 h-8" />, name: 'SEMrush' },
      { icon: <FaChartLine className="w-8 h-8" />, name: 'Ahrefs' },
    ],
  },
  {
    name: 'Media Support',
    icon: <FaHeadphones className="w-8 h-8" />,
    description: 'Providing technical support for various media productions and events.',
    techIcons: [
      { icon: <FaVideo className="w-8 h-8" />, name: 'Live Streaming' },
      { icon: <FaHeadphones className="w-8 h-8" />, name: 'Audio Engineering' },
      { icon: <FaVideo className="w-8 h-8" />, name: 'Video Production' },
    ],
  },
  {
    name: 'IT Consultancy Services',
    icon: <FaLaptopCode className="w-8 h-8" />,
    description: 'Providing expert advice on IT strategies and implementations.',
    techIcons: [
      { icon: <FaLaptopCode className="w-8 h-8" />, name: 'IT Strategy' },
      { icon: <FaCloud className="w-8 h-8" />, name: 'Cloud Migration' },
      { icon: <FaDatabase className="w-8 h-8" />, name: 'Data Management' },
    ],
  },
  {
    name: 'Cybersecurity Services',
    icon: <FaShieldAlt className="w-8 h-8" />,
    description: 'Protecting your business from online threats with advanced cybersecurity solutions.',
    techIcons: [
      { icon: <FaShieldAlt className="w-8 h-8" />, name: 'Penetration Testing' },
      { icon: <FaShieldAlt className="w-8 h-8" />, name: 'Threat Detection' },
      { icon: <FaShieldAlt className="w-8 h-8" />, name: 'Security Audits' },
    ],
  },
  {
    name: 'DevOps Services',
    icon: <FaDev className="w-8 h-8" />,
    description: 'Streamlining development and operations processes for faster delivery.',
    techIcons: [
      { icon: <FaDocker className="w-8 h-8" />, name: 'Docker' },
      { icon: <SiKubernetes className="w-8 h-8" />, name: 'Kubernetes' },
      { icon: <FaJenkins className="w-8 h-8" />, name: 'Jenkins' },
    ],
  },
  {
    name: 'E-commerce Solutions',
    icon: <FaShoppingCart className="w-8 h-8" />,
    description: 'Building online stores that provide seamless shopping experiences.',
    techIcons: [
      { icon: <SiShopify className="w-8 h-8" />, name: 'Shopify' },
   
    ],
  },
  {
    name: 'Quality Assurance and Testing Services',
    icon: <FaCheckCircle className="w-8 h-8" />,
    description: 'Ensuring your product meets quality standards through thorough testing.',
    techIcons: [
      { icon: <FaBug className="w-8 h-8" />, name: 'Manual Testing' },
      { icon: <FaCode className="w-8 h-8" />, name: 'Automated Testing' },
      { icon: <FaMobileAlt className="w-8 h-8" />, name: 'Mobile Testing' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Services() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="max-h-screen bg-gradient-to-b from-cyan-50 via-slate-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto my-16">
        <motion.h1 
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h1>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex flex-wrap justify-center gap-2 mb-20 ">
            {services.map((service, index) => (
              <Tab
                key={service.name}
                className={({ selected }) =>
                  classNames(
                    'px-4 py-2 rounded-md  text-sm font-medium focus:outline-none outline-none transition-all duration-300',
                    selected
                      ? 'bg-indigo-400  text-white shadow-lg'
                      : 'bg-white text-gray-800 hover:bg-slate-50 hover:text-indigo-800'
                  )
                }
              >
                {service.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {services.map((service, idx) => (
              <Tab.Panel
                key={idx}
                className="bg-white rounded-xl p-6 focus:outline-none border border-teal-100"
              >
                <motion.div 
                  className="flex flex-col items-center my-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-indigo-500 my-4">{service.icon}</div>
                  <h2 className="text-xl font-bold text-teal-950 mb-4">{service.name}</h2>
                  <p className="text-gray-600 text-sm text-center mb-12 max-w-2xl">{service.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 mb-8 md:grid-cols-6 gap-6">
                    {service.techIcons.map((tech, techIdx) => (
                      <motion.div 
                        key={techIdx} 
                        className="flex flex-col items-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-indigo-500 mb-2">{tech.icon}</div>
                        <span className="text-sm text-gray-600">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}