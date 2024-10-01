"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Example icon, add more as needed

const testimonials = [
  {
    id: 1,
    name: "Laura",
    role: "Founder, Finding Trusted Care",
    image: "/laura.jpg",
    content:
      "This development team cares about the customer and does everything to make their clients happy and satisfied with their work. They deliver on their promises, no matter how long it takes, and provide daily, detailed updates of their work upon request. Their attention to detail and commitment to excellence is truly commendable.",
  },
  {
    id: 2,
    name: "Michael",
    role: "CEO, Tech Innovations",
    image: "/michael.jpg",
    content:
      "Working with this team has been an absolute pleasure. Their technical expertise is matched only by their dedication to client satisfaction. They have consistently delivered high-quality solutions that have significantly improved our operations. I highly recommend their services to anyone looking for top-tier development work.",
  },
  {
    id: 3,
    name: "Sarah",
    role: "Marketing Director, Global Reach",
    image: "/sarah.jpg",
    content:
      "I have worked with many development teams over the years, but this one stands out. Their ability to understand our unique needs and translate them into functional, user-friendly solutions is unparalleled. They are not just coders; they are true partners in our success.",
  },
];

const TestimonialPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen">
      <motion.div
        className="absolute top-0 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-br from-teal-300 to-emerald-300 rounded-br-full opacity-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-tl from-indigo-300 to-purple-300 rounded-tl-full opacity-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      />

      <div className="max-w-7xl mx-auto relative z-10 mt-8 sm:mt-12">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-emerald-700">Client Testimonials</h1>
          <p className="text-lg text-gray-600">Words that describe our quality and keep us motivated</p>
        </motion.div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex space-x-4 mb-12 justify-center">
            {testimonials.map((testimonial) => (
              <Tab
                key={testimonial.id}
                className={({ selected }) =>
                  `relative group w-full max-w-xs rounded-lg py-3 px-6 text-sm font-medium leading-5 transition-all duration-300
                  ${selected ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg" : "bg-white text-blue-600 hover:bg-gray-100"}
                  `
                }
              >
                {testimonial.name}
                {selected && (
                  <motion.div
                    className="absolute inset-0 rounded-lg border-2 border-white opacity-50 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {testimonials.map((testimonial, idx) => (
              <Tab.Panel
                key={idx}
                className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 ease-in-out"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <motion.div
                    className="md:col-span-1"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto shadow-xl hover:scale-105 transform transition-all duration-300"
                    />
                  </motion.div>
                  <motion.div
                    className="md:col-span-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {testimonial.name}
                      <FaStar className="inline-block text-yellow-500 ml-2" />
                    </h2>
                    <p className="text-blue-600 font-medium mb-4">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {testimonial.content}
                    </p>
                  </motion.div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      {/* Curved Line SVG */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="white"
          d="M0,96C48,128,144,192,240,213.3C336,235,432,213,528,181.3C624,149,720,107,816,101.3C912,96,1008,128,1104,138.7C1200,149,1296,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default TestimonialPage;
