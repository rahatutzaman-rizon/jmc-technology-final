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
      {/* <svg
        className="absolute top-0 left-0 w-full h-60"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0,96L80,106.7C160,117,320,139,480,160C640,181,800,203,960,192C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          fill="url(#paint0_linear)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="160"
            x2="1440"
            y2="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E0E7FF" />
            <stop offset="1" stopColor="#E0E7FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}

      {/* <svg
        className="absolute bottom-0 right-0 w-full h-60"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0,256L80,245.3C160,235,320,213,480,202.7C640,192,800,192,960,224C1120,256,1280,320,1360,320L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          fill="url(#paint1_linear)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient
            id="paint1_linear"
            x1="1440"
            y1="160"
            x2="0"
            y2="160"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CFFAFE" />
            <stop offset="1" stopColor="#CFFAFE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}
    </div>
  );
};

export default AtAGlance;
