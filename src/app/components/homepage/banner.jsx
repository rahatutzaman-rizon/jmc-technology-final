"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X, Code, Rocket, Zap, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ReactPlayer from 'react-player';

import banner from '../../../assets/banner2.jpg';

export default function Banner() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    { icon: Code, title: "Innovative Solutions", color: "text-emerald-600" },
    { icon: Rocket, title: "Cutting-edge Technology", color: "text-purple-600" },
    { icon: Zap, title: "Empowering Businesses", color: "text-amber-600" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-teal-50 via-white to-indigo-50 p-4 sm:p-8 overflow-hidden min-h-screen">
      {/* Background design elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-br-full opacity-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tl from-indigo-300 to-purple-300 rounded-tl-full opacity-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto relative z-10 mt-8 sm:mt-12">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-emerald-700">JMC Technology LTD.</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="text-2xl sm:text-4xl font-bold text-indigo-400 to-purple-100 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Crafting software solutions that empower your business to thrive
            </motion.h2>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: activeIndex === index ? 1.05 : 1,
                  color: activeIndex === index ? feature.color : "text-gray-600"
                }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className={`flex items-center mb-4 ${activeIndex === index ? 'font-bold' : ''}`}
              >
                <feature.icon className={`mr-2 ${feature.color}`} size={24} />
                <h3 className="text-xl sm:text-2xl">{feature.title}</h3>
              </motion.div>
            ))}
          
            <motion.div
              className="relative inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg inline-block text-lg sm:text-xl font-semibold cursor-pointer"
              >
                Pioneering Excellence for 2+ Years
              </motion.span>
              <motion.div
                className="absolute -right-4 top-1/2 transform -translate-y-1/2"
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <ChevronRight size={24} className="text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={banner}
              alt="Innovative workspace"
              className="rounded-xl shadow-2xl"
              height={700}
              width={900}
            />
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 0, 360],
                boxShadow: ["0 0 0 rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.5)", "0 0 0 rgba(16, 185, 129, 0)"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
              onClick={() => setShowVideo(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg"
            >
              <PlayCircle size={48} className="text-emerald-600" />
            </motion.button>
          </motion.div>
        </div>

        <AnimatePresence>
          {showVideo && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-black rounded-2xl w-full max-w-7xl h-[80vh] p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-end mb-4">
                  <motion.button
                    onClick={() => setShowVideo(false)}
                    className="text-white hover:text-gray-300 bg-gray-800 rounded-full p-2"
                    whileHover={{ scale: 1.1, backgroundColor: "#4B5563" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                <div className="w-full h-[calc(100%-40px)] rounded-xl overflow-hidden">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=vo138LlgdSI"
                    width="100%"
                    height="100%"
                    controls={true}
                    playing={true}
                    config={{
                      youtube: {
                        playerVars: { modestbranding: 1 }
                      }
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Curved bottom design */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="white"
          d="M0,96C48,128,144,192,240,213.3C336,235,432,213,528,181.3C624,149,720,107,816,101.3C912,96,1008,128,1104,138.7C1200,149,1296,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}