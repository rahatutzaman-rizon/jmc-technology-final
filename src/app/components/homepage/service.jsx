"use client"

import React from 'react';
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
      className="bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-in-out h-full shadow-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: `0 10px 20px -10px ${color}80, 0 4px 8px -4px ${color}60`,
        borderColor: color
      }}
      style={{ border: `3px solid ${color}` }}
    >
      <div className="flex flex-col items-center justify-center p-8 h-full">
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.1 }}
          style={{ color }}
        >
          <Icon className="w-20 h-20" />
        </motion.div>
        <motion.h3 
          className="text-2xl font-bold text-center"
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
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">Industries We Serve</h2>
          <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
            Expand your business with our cutting-edge Digital Agency expertise
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
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