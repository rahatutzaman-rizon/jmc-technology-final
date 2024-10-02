"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, GraduationCap, Building2, Stethoscope, Banknote, Factory, Briefcase, Heart, Film, Shirt, Dumbbell } from 'lucide-react';

const industries = [
  { name: 'eCommerce', Icon: ShoppingCart, color: '#FF6B6B' },
  { name: 'Education', Icon: GraduationCap, color: '#4ECDC4' },
  { name: 'Real Estate', Icon: Building2, color: '#45B7D1' },
  { name: 'Healthcare', Icon: Stethoscope, color: '#F9DB6D' },
  { name: 'Fintech', Icon: Banknote, color: '#FF8C42' },
  { name: 'Manufacturing', Icon: Factory, color: '#98DFAF' },
  { name: 'Professional Services', Icon: Briefcase, color: '#5D5DFF' },
  { name: 'Non-Profit', Icon: Heart, color: '#FF6B6B' },
  { name: 'Entertainment', Icon: Film, color: '#6C63FF' },
  { name: 'Fashion', Icon: Shirt, color: '#FFA69E' },
  { name: 'Sports & Fitness', Icon: Dumbbell, color: '#84DCC6' },
];

const IndustryCard = ({ name, Icon, color }) => {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out h-full"
      whileHover={{ 
       
        boxShadow: `0 4px 6px -1px ${color}40, 0 2px 4px -1px ${color}30`,
        borderColor: color
      }}
      style={{ border: `2px solid ${color}` }}
    >
      <div className="flex flex-col items-center justify-center p-6 h-full">
        <motion.div
          className="mb-4"
          whileHover={{ color: 'black' }}
          style={{ color }}
        >
          <Icon className="w-16 h-16" />
        </motion.div>
        <motion.h3 
          className="text-xl font-semibold text-center"
          whileHover={{ color: 'black' }}
          style={{ color }}
        >
          {name}
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default function IndustriesGrid() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-gray-700">
            Expand your business with our Digital Agency expertise
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
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
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
