"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const accordionData = [
  {
    title: "Enrich your sales and marketing",
    description:
      "Grow your revenue using AI-driven insights to understand customers, personalize journeys, and close deals faster.",
    link: "/erp/sales-marketing",
    image: "/images/erp1.avif",
  },
  {
    title: "Personalize service experiences",
    description:
      "Create meaningful customer interactions while improving service efficiency and productivity with intelligent automation.",
    link: "/erp/customer-service",
    image: "/images/erp2.avif",
  },
  {
    title: "Modernize your ERP",
    description:
      "Reinvent operations, enhance productivity, and gain a competitive edge with a next-generation agentic ERP system.",
    link: "/erp/modern-erp",
    image: "/images/erp3.avif",
  },
  {
    title: "Ready your business for growth",
    description:
      "Connect people, processes, and data across your organization to scale faster and smarter.",
    link: "/erp/business-growth",
    image: "/images/erp4.avif",
  },
];

export default function ErpAccordionWithImage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container mx-auto px-4 py-20 overflow-hidden">
      {/* 🔹 Section Header (Above Both Columns) */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
          One Platform. Limitless ERP Possibilities
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Unify sales, service, finance, and operations with a modern,
          AI-powered ERP platform designed for growth.
        </p>
      </div>

      {/* 🔹 Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left: Accordion */}
        <div>
          <ul className="space-y-4">
            {accordionData.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <li
                  key={index}
                  className={`border rounded-xl transition-all duration-300 ${
                    isOpen
                      ? "border-blue-500 shadow-md"
                      : "border-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <ChevronDownIcon
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-blue-600" : "text-gray-600"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden px-5 pb-5">
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>

                      <Link
                        href={item.link}
                        className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
                      >
                        Explore solution →
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Animated Image */}
        <div className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={accordionData[activeIndex].image}
                alt={accordionData[activeIndex].title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
