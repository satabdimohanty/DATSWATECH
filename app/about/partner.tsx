"use client";

import React from "react";
import { motion } from "framer-motion";

const partnershipModels = [
  {
    title: "Consultation & Planning",
    desc: "We start by understanding your business goals and project requirements. Our experts provide a detailed plan and roadmap for a successful development journey.",
    link: "https://www.hyperlinkinfosystem.com/consultation-planning",
  },
  {
    title: "Dedicated Team Engagement",
    desc: "Hire a dedicated team of developers, designers, and QA specialists to work exclusively on your project. Flexible engagement based on hourly or monthly commitments.",
    link: "https://www.hyperlinkinfosystem.com/hire-dedicated-team",
  },
  {
    title: "Onsite Collaboration",
    desc: "For critical projects, our developers can work onsite with your team, providing hands-on support and ensuring seamless integration with your existing processes.",
    link: "https://www.hyperlinkinfosystem.com/onsite-collaboration",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

export default function PartnershipModels() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
          Empower Your Business with{" "}
          <span className="text-blue-600 border-b-4 border-blue-600">
            DATWATECH
          </span>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          Leverage cutting-edge technology and expert solutions to drive growth,
          efficiency, and innovation for your business.
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partnershipModels.map((model, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
            >
              {/* Blue background animated from bottom to top */}
              <div
                className={`absolute bottom-0 left-0 w-full h-full origin-bottom transition-transform duration-500 ease-out ${
                  index === 1
                    ? "scale-y-100 bg-blue-600"
                    : "scale-y-0 group-hover:scale-y-100 bg-blue-600"
                }`}
              ></div>

              {/* TOP border: same for all cards */}
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 z-10"></div>

              {/* Content */}
              <div className="relative mt-4 p-6 z-20">
                <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
                <span className="block w-16 h-1 bg-blue-600 rounded mb-3"></span>
                <p className="text-gray-700 mb-6">{model.desc}</p>

                {/* Explore link */}
                <a
                  href={model.link}
                  className="mt-auto inline-flex items-center justify-center"
                >
                  <img
                    src="https://www.hyperlinkinfosystem.com/assets/img/explore-icon.svg"
                    alt="explore details"
                    className="w-6 h-6"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
