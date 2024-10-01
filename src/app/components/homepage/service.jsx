"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, GraduationCap, Building2, Stethoscope, Banknote, Factory, Briefcase, Heart, Film, Shirt, Dumbbell } from 'lucide-react';

const industries = [
  { name: 'eCommerce', Icon: ShoppingCart, color: '#FF6B6B', gradient: 'from-red-400 to-pink-500' },
  { name: 'Education', Icon: GraduationCap, color: '#4ECDC4', gradient: 'from-teal-400 to-cyan-500' },
  { name: 'Real Estate', Icon: Building2, color: '#45B7D1', gradient: 'from-blue-400 to-indigo-500' },
  { name: 'Healthcare', Icon: Stethoscope, color: '#F9DB6D', gradient: 'from-yellow-400 to-amber-500' },
  { name: 'Fintech', Icon: Banknote, color: '#FF8C42', gradient: 'from-orange-400 to-red-500' },
  { name: 'Manufacturing', Icon: Factory, color: '#98DFAF', gradient: 'from-green-400 to-emerald-500' },
  { name: 'Professional Services', Icon: Briefcase, color: '#5D5DFF', gradient: 'from-indigo-400 to-purple-500' },
  { name: 'Non-Profit', Icon: Heart, color: '#FF6B6B', gradient: 'from-pink-400 to-rose-500' },
  { name: 'Entertainment', Icon: Film, color: '#6C63FF', gradient: 'from-violet-400 to-purple-500' },
  { name: 'Fashion', Icon: Shirt, color: '#FFA69E', gradient: 'from-red-400 to-orange-500' },
  { name: 'Sports & Fitness', Icon: Dumbbell, color: '#84DCC6', gradient: 'from-green-400 to-teal-500' },
];

const IndustryCard = ({ name, Icon, color, gradient }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-64 transition-shadow duration-300 ease-in-out ${isHovered ? 'shadow-2xl' : ''}`}
      initial="rest"
      whileHover="hover"
      animate={isHovered ? "hover" : "rest"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0`}
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <motion.div
          className="relative mb-4"
          variants={{
            rest: { y: 0 },
            hover: { y: -10 }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            initial={{ scale: 1 }}
            variants={{
              hover: { scale: 1.2 }
            }}
          />
          <Icon className="w-12 h-12 relative z-10" style={{ color: color }} />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold text-center relative z-10"
          variants={{
            rest: { y: 0, color: '#1F2937' },
            hover: { y: 10, color: '#FFFFFF' }
          }}
        >
          {name}
        </motion.h3>
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 rounded-full border-2 border-white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1],
                  opacity: [0.8, 0.5, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-white"
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </motion.div>
  );
};

export default function IndustriesGrid() {
  return (
    <div className="bg-gradient-to-br from-indigo-300 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-black mb-4 font-sans">  
 	
   Industry We Serve</h2>
          <p className="text-xl font-medium text-gray-800 mb-8">
          Expand your business with the Digital Agency
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <IndustryCard
                name={industry.name}
                Icon={industry.Icon}
                color={industry.color}
                gradient={industry.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}