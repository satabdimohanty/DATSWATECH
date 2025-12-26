"use client";

import React, { useState } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Enterprise-Ready Mobile Platforms",
    description:
      "We build mobile platforms capable of handling millions of daily transactions, optimized for performance, scalability, and reliability across healthcare, fintech, and logistics sectors.",
  },
  {
    number: "02",
    title: "Accelerated Time-to-Market",
    description:
      "Through Agile methodologies and DevOps-driven workflows, we cut development timelines by 40%+, delivering secure and enterprise-grade applications faster without compromising quality.",
  },
  {
    number: "03",
    title: "Top-Tier Security & Compliance",
    description:
      "Our solutions feature HSM-backed key management, certificate pinning, runtime protection, and zero-trust access, ensuring compliance with PCI DSS, HIPAA, and other regulatory standards.",
  },
  {
    number: "04",
    title: "Data-Driven Growth & ROI",
    description:
      "We combine smart UI/UX design with predictive analytics to boost user engagement and retention, achieving high app store ratings and measurable improvements in Lifetime Value (LTV).",
  },
];

export default function StackCardsHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  const next = () =>
    setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-3">
        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Empowering Businesses with Intelligent AI Solutions
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            We design and deploy AI-powered platforms that drive smarter
            decisions, automate workflows, and deliver measurable business
            impact. Transform your data into actionable insights with
            cutting-edge AI technologies.
          </p>
        </div>

        {/* Stacked cards with gradient background and border */}
        <div
          className="relative h-[900px] md:h-[1000px] flex justify-center items-center 
                rounded-3xl p-6"
          style={{
            background: "linear-gradient(135deg, #171a1dff, #34373fff)", // gray-black gradient
            border: "2px solid #374151", // subtle darker border
          }}
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex;
            const offset = (idx - activeIndex) * 50; // vertical stack spacing
            const scale = isActive ? 1 : 0.95;
            const zIndex = isActive ? 20 : 10 - Math.abs(idx - activeIndex);

            return (
              <div
                key={idx}
                className="absolute w-11/12 md:w-4/5 lg:w-3/4 h-[450px] md:h-[500px] p-10 rounded-3xl shadow-2xl transition-all duration-500"
                style={{
                  transform: `translateY(${offset}px) scale(${scale})`,
                  zIndex,
                  opacity: isActive ? 1 : 0.85,
                  background: "linear-gradient(135deg, #1e1f20ff, #111827)", // card gradient
                }}
              >
                <div className="flex gap-6">
                  <div className="text-blue-400 font-bold text-4xl md:text-5xl">
                    {step.number}
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <h3 className="font-bold text-2xl md:text-3xl text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-200 text-base md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Navigation */}
          <div className="absolute bottom-0 flex justify-center gap-4 w-full mt-8">
            <button
              onClick={prev}
              className="p-4 bg-gray-300 rounded-full hover:bg-gray-400 transition text-2xl"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="p-4 bg-gray-300 rounded-full hover:bg-gray-400 transition text-2xl"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
