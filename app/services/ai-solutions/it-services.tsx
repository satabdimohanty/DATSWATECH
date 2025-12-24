"use client";

import { motion } from "framer-motion";

const points = [
  "Blockchain development",
  "dApps development",
  "Smart Contracts",
  "Wallets",
  "NFT",
  "Metaverse",
];

export default function FutureReadySection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      {/* Animated background shapes */}
      <motion.img
        src="https://mobilecoderz.com/assets/images/web-images/diamondIcon.webp"
        alt="Diamond"
        className="absolute top-10 left-10 w-32 h-32 opacity-20"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.img
        src="https://mobilecoderz.com/assets/images/web-images/toyIcon.webp"
        alt="Toy"
        className="absolute top-1/3 right-20 w-16 h-20 opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />
      <motion.img
        src="https://mobilecoderz.com/assets/images/web-images/diamondIcon1.webp"
        alt="Diamond"
        className="absolute bottom-20 left-1/3 w-24 h-24 opacity-20"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />

      {/* Section Intro */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 mb-4 animate-gradient-x">
          Ready to transform your business with Web 3.0?
        </h2>
        <p className="text-gray-700 text-lg md:text-xl">
          We are a team of certified Web 3.0 developers helping you leverage modern technologies
          to build innovative web & mobile experiences.
        </p>
      </div>

      {/* Main Flex */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto px-4 relative">
        {/* Left: Big Static Image overlapping */}
        <div className="w-full lg:w-1/2 flex justify-center lg:-mr-16 z-10">
          <img
            src="/images/ai/ai.png"
            alt="Web 3.0 Developer"
            className="w-[28rem] lg:w-[38rem] rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Right: Glassmorphism Card */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl flex flex-col justify-center z-0">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 animate-gradient-x">
            Expertise in Future-Ready Technologies
          </h3>
          <ul className="space-y-4 mb-8">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-center space-x-4 text-gray-800 font-medium hover:text-indigo-600 transition-colors"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <span className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          <a
            href="./web-3-0-development-company"
            className="mt-8 inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            More Details
          </a>
        </div>
      </div>
    </section>
  );
}
