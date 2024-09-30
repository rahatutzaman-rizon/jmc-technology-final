"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, GraduationCap, Building2, Stethoscope, Banknote, Factory, Briefcase, Heart, Film, Shirt, Dumbbell } from 'lucide-react'

const industries = [
  { name: 'eCommerce', Icon: ShoppingCart, color: 'from-pink-400 to-red-400', border: 'border-red-400', hover: 'hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500' },
  { name: 'Education', Icon: GraduationCap, color: 'from-blue-400 to-indigo-400', border: 'border-indigo-400', hover: 'hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-500' },
  { name: 'Real Estate', Icon: Building2, color: 'from-green-400 to-emerald-400', border: 'border-emerald-400', hover: 'hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-500' },
  { name: 'Healthcare', Icon: Stethoscope, color: 'from-purple-400 to-violet-400', border: 'border-violet-400', hover: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-500' },
  { name: 'Fintech', Icon: Banknote, color: 'from-yellow-400 to-amber-400', border: 'border-amber-400', hover: 'hover:bg-gradient-to-br hover:from-yellow-500 hover:to-amber-500' },
  { name: 'Manufacturing', Icon: Factory, color: 'from-gray-400 to-slate-400', border: 'border-slate-400', hover: 'hover:bg-gradient-to-br hover:from-gray-500 hover:to-slate-500' },
  { name: 'Professional Services', Icon: Briefcase, color: 'from-teal-400 to-cyan-400', border: 'border-cyan-400', hover: 'hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-500' },
  { name: 'Non-Profit', Icon: Heart, color: 'from-rose-400 to-pink-400', border: 'border-pink-400', hover: 'hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-500' },
  { name: 'Entertainment', Icon: Film, color: 'from-orange-400 to-amber-400', border: 'border-amber-400', hover: 'hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500' },
  { name: 'Fashion and Apparel', Icon: Shirt, color: 'from-fuchsia-400 to-purple-400', border: 'border-purple-400', hover: 'hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-purple-500' },
  { name: 'Sports & Fitness', Icon: Dumbbell, color: 'from-lime-400 to-green-400', border: 'border-green-400', hover: 'hover:bg-gradient-to-br hover:from-lime-500 hover:to-green-500' },
]

const IndustryCard = ({ name, Icon, color, border, hover }) => (
  <motion.div
    className={`bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer border-2 ${border} transition-all duration-300 hover:shadow-xl relative overflow-hidden ${hover}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <motion.div
      className={`p-4 rounded-full mb-4 bg-gradient-to-br ${color}`}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon className="w-8 h-8 text-white" />
    </motion.div>
    <h3 className="text-lg font-semibold text-gray-800 relative z-10">{name}</h3>
    <motion.div
      className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0`}
      whileHover={{ opacity: 0.2 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
)

export default function Service() {
  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          Expand your business with the Digital Agency
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8"
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
                border={industry.border}
                hover={industry.hover}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}