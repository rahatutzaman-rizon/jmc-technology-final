"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import group from "../../../assets/client/Group-logo.jpg";
import asset from "../../../assets/client/Asset-logo.jpg";
import tours from "../../../assets/client/Tour-logo-2.jpg";
import medicine from "../../../assets/client/Medicine-Corner-logo-2-1.jpg";
import shopping from "../../../assets/client/shopping.jpg";
import fashion from "../../../assets/client/fashion.jpg";

const partners = [
  { name: "JMC Group", image: group },
  { name: "JMC Tours & Travels", image: tours },
  { name: "JMC Medicine Corner", image: medicine },
  { name: "JMC Fashion", image: fashion },
  { name: "JMC Shopping", image: shopping },
  { name: "JMC Asset Management", image: asset },
];

const PartnerCard = ({ partner }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md p-4 m-2 w-40 h-42 flex items-center justify-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Image
      src={partner.image}
      alt={partner.name}
      className="max-w-full max-h-full object-contain"
      width={150}
      height={140}
    />
  </motion.div>
);

const MarqueeContent = () => (
  <>
    {partners.map((partner) => (
      <PartnerCard key={partner.name} partner={partner} />
    ))}
  </>
);

const AnimatedPartnerShowcase = () => {
  return (
    <div className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-teal-950 mb-2">
            Our Honorable Clients
          </h1>
        </motion.div>

        <div className="overflow-hidden relative">
          {/* Fading effect on the sides */}
          {/* <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/4" />
            <div className="absolute inset-y-0 right-0 w-1/4" />
            </div> */}
          {/* Left blur effect */}
            <div className="absolute inset-y-0 left-0 w-1/6 pointer-events-none filter blur-2xl " />
          {/* Right blur effect */}
          <div className="absolute inset-y-0 right-0 w-1/6 pointer-events-none bg-gradient-to-l from-white to-transparent filter blur-lg" />

          <motion.div
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            <div className="flex">
              <MarqueeContent />
            </div>
            <div className="flex">
              <MarqueeContent />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPartnerShowcase;
