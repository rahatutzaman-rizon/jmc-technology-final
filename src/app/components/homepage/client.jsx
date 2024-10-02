

"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

// Import images
import group from '../../../assets/client/group.jpg';
import asset from '../../../assets/client/asset.jpg';
import tours from '../../../assets/client/tours.jpg';
import medicine from '../../../assets/client/group.jpg';
import shopping from '../../../assets/client/group.jpg';

const companies = [
  { name: "JMC Group", image: group },
  { name: "JMC Tours & Travels", image: tours },
  { name: "JMC Medicine Corner", image: medicine },
  { name: "JMC Fashion", image: tours },
  { name: "JMC Shopping", image: shopping },
  { name: "JMC Asset Management", image: asset }
];

const CompanyImage = ({ company, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative m-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image
        src={company.image}
        alt={company.name}
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-white text-lg font-semibold text-center px-2">
          {company.name}
        </h3>
      </motion.div>
    </motion.div>
  );
};

const EnhancedJMCGroupShowcase = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }));
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 sm:text-6xl md:text-7xl mb-4">
            JMC Group of Companies
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl text-gray-600 sm:text-2xl md:mt-5 md:max-w-3xl">
            Innovating across industries, enhancing lives globally.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {companies.map((company, index) => (
            <CompanyImage key={company.name} company={company} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 md:py-4 md:text-xl md:px-10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Discover Our Global Impact
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedJMCGroupShowcase;