"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function CloudPlatformSection() {
  return (
    <section className="bg-gray-50 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Content */}
        <motion.div
          className="md:w-1/2 space-y-8"
          variants={textVariants as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            DATSWATECH Cloud — powering intelligent, cloud-first enterprises
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl"
          >
            DATSWATECH delivers secure, scalable cloud platforms designed for
            modern enterprises. Our solutions enable organizations to build,
            migrate, and optimize applications while unlocking the full value of
            data and artificial intelligence.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl"
          >
            With deep expertise in cloud engineering, data platforms, and AI
            integration, DATSWATECH helps businesses accelerate innovation,
            improve operational efficiency, and stay future-ready.
          </motion.p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -6, x: 120 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 14,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/cloud/cloud.png"
            alt="DATSWATECH Cloud Architecture"
            width={700}
            height={700}
            className="rounded-2xl object-contain w-full max-w-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
