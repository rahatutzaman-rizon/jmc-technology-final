"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaStar, FaTrophy, FaBook } from "react-icons/fa";
import CountUp from "react-countup";

const AtAGlance = () => {
  const data = [
    { value: 6, label: "Complete Projects", icon: FaProjectDiagram },
    { value: 7, label: "Client Reviews", icon: FaStar },
    { value: 5, label: "Winning Awards", icon: FaTrophy },
    { value: 5, label: "Free Resources", icon: FaBook },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the state to true when the section is in view
          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed (0.2 means 20% of the element must be visible)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white pb-24 pt-40 px-8 bg-gradient-to-b from-indigo-50 to-white lg:px-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-center">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 px-8 py-12 bg-white border border-indigo-50 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on scroll visibility
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="text-primary-600 p-3 bg-indigo-50/50 rounded-full"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }} // Scale based on scroll visibility
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3 + index * 0.1,
              }}
            >
              <item.icon size={20} className="text-cyan-600/50" />
            </motion.div>
            <div className="text-left">
              <motion.div
                className="text-4xl font-bold text-indigo-900 bg-clip-text"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }} // Scale based on scroll visibility
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.5 + index * 0.1,
                }}
              >
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  delay={isVisible ? 0.5 + index * 0.2 : 0} // Start counting when visible
                />+
              </motion.div>
              <div className="text-sm md:text-base text-gray-800 mt-1">
                {item.label}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AtAGlance;