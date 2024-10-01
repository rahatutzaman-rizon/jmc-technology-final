"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaStar, FaTrophy, FaBook } from "react-icons/fa";

const AtAGlance = () => {
  const data = [
    { value: 6, label: "Complete Projects", icon: FaProjectDiagram },
    { value: 7, label: "Client Reviews", icon: FaStar },
    { value: 5, label: "Winning Awards", icon: FaTrophy },
    { value: 5, label: "Free Resources", icon: FaBook },
  ];

  return (
    <div className="relative bg-white py-16 px-8 lg:px-20 overflow-hidden">
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto items-center">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-4 p-6 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 shadow-lg rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="text-primary-600 p-4 bg-white rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3 + index * 0.1,
              }}
            >
              <item.icon size={32} />
            </motion.div>
            <div className="text-left">
              <motion.div
                className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5 + index * 0.1,
                }}
              >
                {item.value}+
              </motion.div>
              <div className="text-sm md:text-base text-gray-600 mt-1">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Updated SVG curves with lighter colors */}
       


       
    </div>
  );
};

export default AtAGlance;
