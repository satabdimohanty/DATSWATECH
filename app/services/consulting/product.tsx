"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    title: "Business Strategy",
    description:
      "We help clients define clear objectives, craft actionable roadmaps, and align resources for maximum impact and growth.",
    image: "/images/consultancy/business.avif",
  },
  {
    title: "Technology Consulting",
    description:
      "Our experts implement cutting-edge solutions tailored to your business needs, ensuring efficiency, scalability, and ROI.",
    image: "/images/consultancy/tech.avif",
  },
  {
    title: "Data Analytics",
    description:
      "Leverage data-driven insights to optimize operations, improve decision-making, and uncover new growth opportunities.",
    image: "/images/consultancy/data.avif",
  },
  {
    title: "Process Optimization",
    description:
      "We streamline workflows, reduce redundancies, and enhance operational efficiency through process improvements.",
    image: "/images/consultancy/process.avif",
  },
  {
    title: "Custom Integrations",
    description:
      "Integrate your systems and tools seamlessly to enhance productivity without disrupting existing workflows.",
    image: "/images/consultancy/custom.avif",
  },
  {
    title: "Risk & Compliance",
    description:
      "Ensure your business adheres to industry regulations and best practices, minimizing risk while maintaining operational excellence.",
    image: "/images/consultancy/compilance.avif",
  },
];

export default function ConnectedTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabPositions, setTabPositions] = useState<
    { top: number; height: number }[]
  >([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const tabsEl = Array.from(
        containerRef.current.querySelectorAll<HTMLButtonElement>("button")
      );
      const positions = tabsEl.map((el) => ({
        top: el.offsetTop,
        height: el.offsetHeight,
      }));
      setTabPositions(positions);
    }
  }, []);

  const activeTab = tabPositions[activeIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">
          Our Consultancy Services
        </h2>
        <p className="mt-4 text-black text-lg max-w-4xl mx-auto">
          At Datswatech Consultancy, we combine strategy, technology, and
          expertise to deliver measurable results and empower your business for
          sustainable growth.
        </p>
      </div>

      {/* Tabs + Content with gradient background */}
      <div className="flex flex-col md:flex-row gap-12 p-8 rounded-3xl bg-gradient-to-r from-gray-800 via-gray-900 to-black relative">
        {/* Tabs */}
        <div
          className="relative md:w-1/3 flex flex-col gap-6 pl-8"
          ref={containerRef}
        >
          {/* Full vertical line (white) */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-white rounded-full z-0"></div>

          {/* Active tab blue portion */}
          {activeTab && (
            <motion.div
              layout
              className="absolute left-4 w-1 bg-blue-600 rounded-full z-0"
              style={{
                top: activeTab.top,
                height: activeTab.height,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}

          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="relative flex items-center gap-4 text-left p-3 hover:text-blue-400 transition-colors duration-300 z-10"
            >
              <h3
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeIndex === index ? "text-blue-400" : "text-gray-200"
                }`}
              >
                {tab.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 flex flex-col items-center justify-center relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full max-w-prose text-left" // limit width to match text
          >
            <img
              src={tabs[activeIndex].image}
              alt={tabs[activeIndex].title}
              className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg" // width now matches parent
            />
            <p className="text-gray-300 text-lg">
              {tabs[activeIndex].description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
