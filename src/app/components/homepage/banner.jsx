"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, X, Code, Rocket, Zap, ChevronRight } from "lucide-react";
import Image from "next/image";
import ReactPlayer from "react-player";
import banner from "../../../assets/banner2.jpg";

export default function Banner() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    { icon: Code, title: "Innovative Solutions", color: "text-emerald-600" },
    { icon: Rocket, title: "Cutting-edge Technology", color: "text-purple-600" },
    { icon: Zap, title: "Empowering Businesses", color: "text-amber-600" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [features.length]);

  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-teal-50 via-white to-indigo-50 p-4 sm:p-8 overflow-hidden min-h-screen">
      {/* Background animations */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundImage: [
            "radial-gradient(circle, #4fd1c5 1px, transparent 1px)",
            "radial-gradient(circle, #4299e1 1px, transparent 1px)",
            "radial-gradient(circle, #9f7aea 1px, transparent 1px)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundSize: "20px 20px",
        }}
      />
      <motion.div
        className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-teal-700 to-emerald-50 rounded-br-full opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-indigo-700 to-purple-50 rounded-tl-full opacity-30"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Content centered on the screen */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col justify-center items-center min-h-screen">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-12 text-center lg:text-left">
          <motion.div
            className="lg:w-1/2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-bold text-teal-950 mb-10 relative z-10 leading-tight">
              Crafting software solutions that empower your business to thrive
            </h1>

            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 1 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: activeIndex === index ? 1 : 1,
                }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                className={`flex items-center justify-center lg:justify-start pb-2 mb- ${activeIndex === index ? "font-bold" : ""}`}
              >
                <motion.div
                  className={`mr-4 p-3 rounded-full bg-opacity-20`}
                  whileHover={{ scale: .5, rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <feature.icon className={feature.color} size={20} />
                </motion.div>
                <h3 className={`text-2xl sm:text-lg text-teal-950 mb-`}>
                  {feature.title}
                </h3>
              </motion.div>
            ))}

            <motion.div
              className="relative inline-block mt-10"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 1.04 }}
            >
              <motion.span className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-white px-8 sm:px-10 py-2 sm:py-3 rounded-full shadow-lg inline-block text-lg sm:text-lg font-semibold cursor-pointer">
                Pioneering Excellence for 2+ Years
              </motion.span>
              {/* <motion.div
                className="absolute -right-0 top-1/2 transform -translate-y-1/2"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <ChevronRight size={28} className="text-white" />
              </motion.div> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow">
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
                whileTap={{ scale: 1 }}
                animate={{
                  scale: [1, 1.05, 1.1],
                  // boxShadow: [
                  //   "0 0 0 rgba(16, 185, 129, 0)",
                  //   "0 0 30px rgba(16, 185, 129, 0.7)",
                  //   "0 0 0 rgba(16, 185, 129, 0)",
                  // ],
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  times: [.8, 1.05, 0.5],
                  repeat: Infinity,
                }}
                onClick={() => setShowVideo(true)}
                className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-6 shadow"
              >
                <PlayCircle size={40} className="text-emerald-600" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {showVideo && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
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
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    width="100%"
                    height="100%"
                    controls
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}