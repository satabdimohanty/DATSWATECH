"use client";

import { useState } from "react";

const accordionData = [
  {
    title: "Workshops That Unlock Insight",
    content:
      "At DATSWATECH, we conduct collaborative workshops with your stakeholders and our experts to define business goals, identify opportunities, and ensure alignment before any development begins.",
  },
  {
    title: "Industry & User Research",
    content:
      "We analyze your industry landscape and target audience to shape solutions that are data-driven and grounded in real needs, ensuring your product achieves maximum impact.",
  },
  {
    title: "Technical Assessments",
    content:
      "Our technical and AI readiness assessments evaluate your current systems, identify gaps, and provide actionable recommendations for scalability, efficiency, and innovation.",
  },
  {
    title: "Strategic Roadmap You Can Trust",
    content:
      "DATSWATECH delivers a clear, actionable roadmap balancing speed, cost, and scalability, giving you confidence that your idea will move forward successfully.",
  },
];

export default function ConsultingApproach() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // second accordion open by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-blue-900 py-24 text-white">
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Consulting-First Approach at DATSWATECH
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-8">
              At DATSWATECH, every successful project begins with understanding your
              unique challenges. We uncover critical insights, validate assumptions,
              and define strategic directions before a single line of code is written,
              ensuring reduced risks and higher success rates.
            </p>
          </div>
          <a
            href="https://datswatech.com/consulting-services/"
            target="_blank"
            className="inline-flex items-center gap-3 font-medium text-blue-900 bg-white px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            View Our Consulting Services
          </a>
        </div>

        {/* Right Accordion */}
        <div className="space-y-4">
          {accordionData.map((item, index) => (
            <div
              key={index}
              className="border border-white/20 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                >
                  +
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-200">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
