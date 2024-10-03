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
  }, );

  return (
    <div className="relative bg-gradient-to-br from-teal-50 via-white to-indigo-50 p-4 sm:p-8 overflow-hidden min-h-screen ">
      {/* Enhanced background animations */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundImage: [
            'radial-gradient(circle, #4fd1c5 1px, transparent 1px)',
            'radial-gradient(circle, #4299e1 1px, transparent 1px)',
            'radial-gradient(circle, #9f7aea 1px, transparent 1px)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundSize: '20px 20px',
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-br-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-300 to-purple-300 rounded-tl-full opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 mt-12 sm:mt-16">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">JMC Technology LTD.</h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-12">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* <motion.div
              className="relative p-8 rounded-2xl overflow-hidden mb-8"
              initial={{ background: "linear-gradient(45deg, #4fd1c5, #4299e1)" }}
              animate={{ background: ["linear-gradient(45deg, #4fd1c5, #4299e1)", "linear-gradient(45deg, #4299e1, #9f7aea)", "linear-gradient(45deg, #9f7aea, #4fd1c5)"] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                }}
                animate={{
                  x: [0, 60, 0],
                  y: [0, 60, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
              />
              <h2 className="text-xl sm:text-xl font-bold text-white relative z-10 leading-tight">
                Crafting software solutions that empower your business to thrive
              </h2>
            </motion.div> */}
            <h2 className="text-2xl sm:text-2xl font-bold text-black relative z-10 leading-tight">
                Crafting software solutions that empower your business to thrive
              </h2>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: activeIndex === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className={`flex items-center mb-6 ${activeIndex === index ? 'font-bold' : ''}`}
              >
                <motion.div
                  className={`mr-4 p-3 rounded-full ${feature.color.replace('text-', 'bg-')} bg-opacity-20`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className={feature.color} size={28} />
                </motion.div>
                <h3 className={`text-2xl sm:text-2xl ${activeIndex === index ? feature.color : 'text-gray-700'}`}>{feature.title}</h3>
              </motion.div>
            ))}

            <motion.div
              className="relative inline-block mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-lg inline-block text-xl sm:text-2xl font-semibold cursor-pointer"
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
                <ChevronRight size={28} className="text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={banner}
                alt="Innovative workspace"
                layout="responsive"
                width={16}
                height={9}
                objectFit="cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  boxShadow: ["0 0 0 rgba(16, 185, 129, 0)", "0 0 30px rgba(16, 185, 129, 0.7)", "0 0 0 rgba(16, 185, 129, 0)"],
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                }}
                onClick={() => setShowVideo(true)}
                className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-6 shadow-lg"
              >
                <PlayCircle size={60} className="text-emerald-600" />
              </motion.button>
            </div>
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
                className="bg-black rounded-2xl w-full max-w-7xl h-[80vh] p-6"
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

      {/* Enhanced curved bottom design */}
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