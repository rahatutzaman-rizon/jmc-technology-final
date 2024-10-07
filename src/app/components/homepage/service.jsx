"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, GraduationCap, Building2, Stethoscope, Banknote, Factory, Briefcase, Heart, Film, Shirt, Dumbbell } from 'lucide-react';

const industries = [
  { name: 'eCommerce', Icon: ShoppingCart, color: '#D32F2F' },
  { name: 'Education', Icon: GraduationCap, color: '#1565C0' },
  { name: 'Real Estate', Icon: Building2, color: '#4527A0' },
  { name: 'Healthcare', Icon: Stethoscope, color: '#00838F' },
  { name: 'Fintech', Icon: Banknote, color: '#2E7D32' },
  { name: 'Manufacturing', Icon: Factory, color: '#EF6C00' },
  { name: 'Professional Services', Icon: Briefcase, color: '#00C2FD' },
  { name: 'Non-Profit', Icon: Heart, color: '#C2185B' },
  { name: 'Entertainment', Icon: Film, color: '#0277BD' },
  { name: 'Fashion', Icon: Shirt, color: '#827717' },
  { name: 'Sports & Fitness', Icon: Dumbbell, color: '#1B5E20' },
];

const IndustryCard = ({ name, Icon, color }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out h-full shadow"
      whileHover={{
        scale: 1.0005,
        boxShadow: `0 10px 20px -10px ${color}80, 0 4px 8px -4px ${color}60`,
        borderColor: color
      }}
      style={{ border: `1px solid ${color}` }}
      aria-label={name} // Adding aria-label for accessibility
    >
      <div className="flex flex-col items-center justify-center py-8 h-full">
        <motion.div
          className="mb-2"
          whileHover={{ scale: 1.1 }} // Adjusted hover scale for visibility
          style={{ color }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        <motion.h3 
          className="text-base font-bold text-center"
          style={{ color }}
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default function IndustriesGrid() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 },
    }),
  };

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-cyan-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} // Animate based on visibility
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Industries We Serve</h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto">
            Expand your business with our cutting-edge Digital Agency expertise
          </p>
        </motion.div>
        <motion.div
          ref={ref} // Reference for intersection observer
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }} // Animate based on visibility
          transition={{ duration: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"} // Animate based on visibility
              custom={index} // Pass index for delay calculation
            >
              <IndustryCard
                name={industry.name}
                Icon={industry.Icon}
                color={industry.color}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}