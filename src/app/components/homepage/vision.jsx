"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Leaf } from 'lucide-react';

const MissionVision = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8 overflow-hidden">
      {/* Top left design element */}
      {/* <motion.div
        className="absolute top-0 left-0 w-96 h-96"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#8B5CF6" d="M39.9,-65.7C51.5,-57.4,60.5,-46.6,65.9,-34.3C71.3,-22,73.1,-8.2,72.1,5.6C71.1,19.4,67.3,33.2,59.3,44.3C51.3,55.4,39.1,63.8,25.6,69.9C12.1,76,-2.7,79.8,-16.9,77.2C-31.1,74.6,-44.7,65.6,-55.8,54.3C-66.9,43,-75.5,29.3,-79.6,13.9C-83.7,-1.5,-83.3,-18.7,-77.6,-33.5C-71.8,-48.3,-60.7,-60.7,-47,-69.4C-33.3,-78.1,-16.6,-83.1,-1.3,-81.1C14,-79.1,28.3,-74,39.9,-65.7Z" transform="translate(100 100)" />
        </svg>
      </motion.div> */}

      {/* Bottom right design element */}
      <motion.div
        className="absolute bottom-0 right-0 w-128 h-128"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C4B5FD" d="M45.3,-76.3C59.9,-69.1,73.5,-59,81.7,-45.3C89.9,-31.6,92.7,-15.8,91.4,-0.7C90.1,14.3,84.7,28.6,76.7,41.5C68.7,54.4,58.1,65.8,45.1,73.7C32,81.6,16,85.9,0.2,85.6C-15.7,85.3,-31.4,80.3,-45.1,72.3C-58.8,64.3,-70.5,53.3,-78.3,39.7C-86.1,26.1,-90,13,-88.8,0.7C-87.6,-11.7,-81.3,-23.4,-73.6,-34C-65.9,-44.6,-56.8,-54.1,-45.5,-62.8C-34.2,-71.5,-20.9,-79.4,-5.8,-71.1C9.3,-62.8,30.7,-83.5,45.3,-76.3Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto relative ">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Mission & Vision
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-purple-200 rounded-bl-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <h2 className="text-3xl font-bold mb-6 mt-12 text-purple-700">Our Mission</h2>
            <p className="text-lg text-gray-700  mt-12 mb-6">
              To revolutionize software development with a focus on sustainability, minimizing environmental impact, and promoting responsible resource utilization.
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                className="bg-purple-100 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Leaf className="text-purple-600 w-6 h-6" />
              </motion.div>
              <span className="text-purple-600 font-semibold">Sustainable Innovation</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-indigo-200 rounded-br-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <h2 className="text-3xl  text-end font-bold mb-6 mt-8 text-indigo-700">Our Vision</h2>
            <p className="text-lg  mt-16 text-gray-700 mb-6">
              To be the global leader in software innovation, transforming industries and enhancing lives through sustainable and impactful technological advancements.
            </p>
            <div className="flex items-center space-x-4">
              <motion.div
                className="bg-indigo-100 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Globe className="text-indigo-600 w-6 h-6" />
              </motion.div>
              <span className="text-indigo-600 font-semibold">Global Impact</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full p-1">
            <div className="bg-white rounded-full px-8 py-4">
              <div className="flex items-center space-x-4">
                <Lightbulb className="text-yellow-500 w-6 h-6" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                  Innovating for a Brighter Future
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;