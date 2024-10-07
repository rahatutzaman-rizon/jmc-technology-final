"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaStar, FaTrophy, FaBook } from "react-icons/fa";
import CountUp from "react-countup";

const AtAGlance = () => {
  const data = [
    { value: 6, label: "Complete Projects", icon: FaProjectDiagram },
    { value: 7, label: "Client Reviews", icon: FaStar },  // Value remains 7, but will be displayed as '07'
    { value: 5, label: "Winning Awards", icon: FaTrophy },
    { value: 5, label: "Free Resources", icon: FaBook },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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
      className="relative bg-white py-40 px-8 lg:px-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-center">
        {data.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-4 px-8 py-12 bg-indigo-50 border border-indigo-100 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              className="text-primary-600 p-4 bg-white rounded-full"
              initial={{ scale: 0 }}
              animate={isVisible ? { scale: 1 } : { scale: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3 + index * 0.1,
              }}
            >
              <item.icon size={20} className="text-cyan-600" />
            </motion.div>
            <div className="text-left">
              <motion.div
                className="text-5xl font-bold text-indigo-900 bg-clip-text"
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : { scale: 0 }}
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
                  delay={isVisible ? 0.5 + index * 0.2 : 0}
                  formattingFn={(val) => String(val).padStart(2, '0')} // Adds leading zero for 7
                />+
              </motion.div>
              <div className="text-base md:text-base text-indigo-900 mt-3">
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
