"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Globe, Leaf } from 'lucide-react';

const MissionVision = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the component is visible
        }
      },
      { threshold: 0.1 } // Adjust threshold to control when to trigger
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="relative max-h-screen bg-gradient-to-br from-indigo-50 via-white to-white  overflow-hidden">
      {/* Bottom right design element */}
      <motion.div
        className="absolute bottom-0 right-0 w-128 h-128"
        initial={{ scale: 0, opacity: 0 }}
        animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }} // Animate based on visibility
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#C4B5FD" d="M45.3,-76.3C59.9,-69.1,73.5,-59,81.7,-45.3C89.9,-31.6,92.7,-15.8,91.4,-0.7C90.1,14.3,84.7,28.6,76.7,41.5C68.7,54.4,58.1,65.8,45.1,73.7C32,81.6,16,85.9,0.2,85.6C-15.7,85.3,-31.4,80.3,-45.1,72.3C-58.8,64.3,-70.5,53.3,-78.3,39.7C-86.1,26.1,-90,13,-88.8,0.7C-87.6,-11.7,-81.3,-23.4,-73.6,-34C-65.9,-44.6,-56.8,-54.1,-45.5,-62.8C-34.2,-71.5,-20.9,-79.4,-5.8,-71.1C9.3,-62.8,30.7,-83.5,45.3,-76.3Z" transform="translate(100 100)" />
        </svg>
      </motion.div>

      <div ref={ref} className="max-w-7xl mx-auto relative my-24">
        <motion.h1
          className="text-4xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-teal-950"
          initial={{ opacity: 0, y: -50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }} // Animate based on visibility
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our Mission & Vision
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="bg-white rounded-3xl shadow-slate-100 shadow px-16 py-4 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }} // Animate based on visibility
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-purple-400/30 rounded-bl-full"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }} // Animate based on visibility
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <h2 className="text-xl font-semibold mt-8 text-purple-900">Our Mission</h2>
            <p className="text-base leading-6 text-slate-700 my-6">
              To revolutionize software development with a focus on sustainability, minimizing environmental impact, and promoting responsible resource utilization.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <motion.div
                className="bg-purple-50 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Leaf className="text-purple-500 w-4 h-4" />
              </motion.div>
              <span className="text-purple-600/80 font-semibold text-sm ">Sustainable Innovation</span>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl shadow shadow-slate-100 p-8 relative overflow-hidden px-16 py-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} // Animate based on visibility
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-indigo-100 rounded-br-full"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }} // Animate based on visibility
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            <h2 className="text-xl text-end font-bold mt-8 text-indigo-900">Our Vision</h2>
            <p className="text-base text-end leading-6 text-slate-700 my-8">
              To be the global leader in software innovation, transforming industries and enhancing lives through sustainable and impactful technological advancements.
            </p>
            <div className="flex items-center justify-end space-x-4">
              <span className="text-indigo-600/80 font-semibold text-sm">Global Impact</span>
              <motion.div
                className="bg-indigo-50 p-3 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Globe className="text-indigo-500 w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>
{/* 
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate based on visibility
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block mt-8 bg-gradient-to-r from-teal-300 to-indigo-300 rounded-full p-1">
            <div className="bg-white rounded-full px-8 py-4">
              <div className="flex items-center space-x-4">
                <Lightbulb className="text-teal-950 font-semibold text-sm w-4 h-4" />
                <span className="text-sm font-semibold text-teal-950 ">
                  Innovating for a Brighter Future
                </span>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default MissionVision;