"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const solutions = [
  {
    key: "ai",
    tab: "AI Solutions",
    icon: "🤖",
    title: "Intelligent AI Solutions",
    description: [
      "Harness AI to optimize operations and decision-making",
      "Automate repetitive tasks and boost workforce efficiency",
    ],
    cta: "Discover AI",
    image:
     "/images/erp/ai.jpg",
    gradient: "from-fuchsia-500/20 via-transparent to-transparent",
  },
  {
    key: "automation",
    tab: "Automation",
    icon: "⚙️",
    title: "Smart Automation",
    description: [
      "Streamline processes for higher productivity and accuracy",
      "Enable real-time monitoring and intelligent workflows",
    ],
    cta: "Explore Automation",
    image:
      "/images/erp/automation.jpg",
    gradient: "from-emerald-500/20 via-transparent to-transparent",
  },
  {
    key: "cloud",
    tab: "Cloud Services",
    icon: "☁️",
    title: "Scalable Cloud Infrastructure",
    description: [
      "Deploy secure, resilient, and flexible cloud solutions",
      "Optimize cost, resources, and performance effortlessly",
    ],
    cta: "Learn More",
    image:
      "/images/erp/cloud.avif",
    gradient: "from-sky-500/20 via-transparent to-transparent",
  },
  {
    key: "bi",
    tab: "Data & BI",
    icon: "📊",
    title: "Business Intelligence",
    description: [
      "Turn complex data into actionable insights quickly",
      "Monitor performance and predict trends with confidence",
    ],
    cta: "Explore BI",
    image:
      "/images/erp/erp.jpg",
    gradient: "from-indigo-500/20 via-transparent to-transparent",
  },
  {
    key: "erp",
    tab: "ERP Platform",
    icon: "🏢",
    title: "Modern ERP Platform",
    description: [
      "Integrate finance, operations, supply chain, and more",
      "Manage your enterprise from a single intelligent platform",
    ],
    cta: "Discover ERP",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    gradient: "from-orange-500/20 via-transparent to-transparent",
  },
  {
    key: "security",
    tab: "Cybersecurity",
    icon: "🛡️",
    title: "Cybersecurity & Compliance",
    description: [
      "Protect your data and critical digital assets effectively",
      "Stay compliant while reducing risks across your enterprise",
    ],
    cta: "Explore Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    gradient: "from-red-500/20 via-transparent to-transparent",
  },
];
export default function SolutionsGrid() {
  const [active, setActive] = useState(solutions[2]);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Auto-rotate tabs
  useEffect(() => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActive((prev) => {
          const currentIndex = solutions.findIndex((s) => s.key === prev.key);
          const nextIndex = (currentIndex + 1) % solutions.length;
          return solutions[nextIndex];
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <section
      className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-250px] right-[-200px] w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-250px] left-[-200px] w-[600px] h-[600px] bg-fuchsia-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-12">
        {/* Header + Subheader */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Data That Makes a Difference
          </h2>
          <p className="text-lg text-slate-600">
            Explore our intelligent ERP solutions designed to empower your
            business with AI, Automation, Cloud, BI, ERP, and Security.
          </p>
        </div>

        {/* Modern Horizontal Tabs with New Colors */}
        <div className="relative w-full mb-12">
          <div className="flex relative gap-4 overflow-x-auto scrollbar-none py-2 px-2">
            {solutions.map((item) => (
              <button
                key={item.key}
                onClick={() => setActive(item)}
                className={`flex-1 relative z-10 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold min-w-[140px] transition-all duration-300
          ${
            active.key === item.key
              ? "bg-gradient-to-r from-teal-400 to-purple-500 text-white shadow-lg scale-105"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
          }
        `}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.tab}</span>
              </button>
            ))}

            {/* Sliding Active Tab Pill */}
            <motion.div
              layoutId="tab-pill"
              className="absolute h-12 bg-gradient-to-r from-teal-400 to-purple-500 rounded-xl shadow-lg top-1 left-0 z-0"
              initial={false}
              animate={{
                left: solutions.findIndex((s) => s.key === active.key) * 160,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
        </div>

        {/* Main Card */}
        <div className="relative rounded-[36px] overflow-hidden bg-white/50 backdrop-blur-xl border border-white/30 shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${active.gradient}`}
          />

          <div className="relative grid lg:grid-cols-2 min-h-[520px] items-center">
            {/* Left Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.key}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="p-10 lg:p-16"
              >
                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  {active.title}
                </h3>
                <ul className="space-y-4 mb-10">
                  {active.description.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-indigo-500 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  whileHover={{ x: 6, scale: 1.05 }}
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full bg-indigo-600 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  {active.cta} →
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* Right Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, scale: 0.95, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full min-h-[360px] rounded-tr-[36px] rounded-br-[36px] overflow-hidden"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  priority
                  className="object-cover scale-[1.05] hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
