"use client";

import { useState } from "react";
import {
  MapPin,
  File,
  Files,
  FileCode,
  Cpu,
  Database,
  TrendingUp,
  Settings,
} from "lucide-react";

// Sidebar services
const services = [
  "AI Consulting",
  "AI Development",
  "Generative AI Consulting",
  "Generative AI Development",
  "Machine Learning",
];

// Cards for each service
const serviceCards: Record<string, { icon: JSX.Element; title: string }[]> = {
  "AI Consulting": [
    { icon: <MapPin />, title: "Strategic AI Roadmaps" },
    { icon: <File />, title: "Feasibility Analysis" },
    { icon: <Files />, title: "Data Assessment" },
    { icon: <Settings />, title: "Change Management Planning" },
  ],
  "AI Development": [
    { icon: <Cpu />, title: "Custom AI Models" },
    { icon: <FileCode />, title: "System Integration" },
    { icon: <Database />, title: "API Development" },
    { icon: <Settings />, title: "Performance Optimization" },
  ],
  "Generative AI Consulting": [
    { icon: <MapPin />, title: "Gen AI Use Case Identification" },
    { icon: <File />, title: "Creative Workflow Design" },
    { icon: <Files />, title: "Data Strategy for Creativity" },
    { icon: <Settings />, title: "Ethical AI Implementation" },
  ],
  "Generative AI Development": [
    { icon: <FileCode />, title: "Custom Generative Models" },
    { icon: <Cpu />, title: "Advanced Architecture" },
    { icon: <Database />, title: "Integration Tools" },
    { icon: <Settings />, title: "Testing & Validation" },
  ],
  "Machine Learning": [
    { icon: <TrendingUp />, title: "Predictive Modeling" },
    { icon: <FileCode />, title: "Data Preprocessing" },
    { icon: <Database />, title: "Feature Engineering" },
    { icon: <Settings />, title: "Model Deployment" },
  ],
};

export default function AISection() {
  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-gray-300 rounded-full opacity-20 blur-3xl animate-[blob_10s_infinite] -z-10"></div>
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-gray-400 rounded-full opacity-15 blur-3xl animate-[blob_12s_infinite] -z-10"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 text-center relative z-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Intelligent AI Services
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Explore our expertise in AI consulting, development, and machine
          learning. We deliver intelligent solutions that drive innovation,
          efficiency, and measurable growth.
        </p>
      </div>
      {/* Section Wrapper - not full width */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Gradient Background Container */}
        <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 rounded-3xl shadow-xl p-8 flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside
            className="w-full lg:w-72 flex flex-col gap-4 rounded-3xl p-7
  bg-gradient-to-b from-zinc-900 to-black
  border border-white/10
  shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <h2 className="text-xl font-semibold text-gray-200 tracking-wide mb-4">
              AI Services
            </h2>

            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActiveTab(service)}
                className="relative w-full flex items-center text-left px-5 py-4 rounded-2xl
      transition-all duration-300 group"
              >
                {/* Vertical Active Line */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-[4px] rounded-full
        transition-all duration-300
        ${
          service === activeTab
            ? "h-10 bg-gray-200 opacity-100"
            : "h-5 bg-gray-600 opacity-30"
        }`}
                />

                {/* Text */}
                <span
                  className={`ml-4 text-base font-medium tracking-wide transition-colors duration-300
        ${
          service === activeTab
            ? "text-white"
            : "text-gray-400 group-hover:text-gray-200"
        }`}
                >
                  {service}
                </span>

                {/* Arrow */}
                <span
                  className={`ml-auto text-lg text-gray-400 transition-all duration-300
        ${
          service === activeTab
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
        }`}
                >
                  →
                </span>
              </button>
            ))}
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col gap-8">
            {/* Tab Title */}
            <h2 className="text-3xl font-bold mb-8 text-gray-800 border-l-4 border-gray-500 pl-5">
              {activeTab} Applications
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceCards[activeTab].map((card) => (
                <div
                  key={card.title}
                  className="bg-gradient-to-br from-gray-200 to-gray-300 backdrop-blur-md border border-gray-300 rounded-3xl p-6 flex flex-col items-start gap-4 shadow-lg
              transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:from-gray-300 hover:to-gray-400"
                >
                  <div className="text-gray-700 text-4xl">{card.icon}</div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {card.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 p-6 rounded-3xl shadow-xl border border-gray-300 relative overflow-hidden hover:shadow-2xl transition-shadow duration-500 hover:from-gray-300 hover:to-gray-400">
              {/* Floating Background Shape */}
              <div className="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-tr from-gray-300 via-gray-400 to-gray-500 rounded-full opacity-20 blur-2xl animate-[blob_8s_infinite] -z-10"></div>

              <h3 className="font-bold mb-3 text-gray-800">// Our Offerings</h3>
              <p className="text-gray-700">
                Unlock the full potential of{" "}
                <span className="underline text-gray-800">{activeTab}</span>{" "}
                with our expert AI services. Our team works closely with your
                business to deliver tailored strategies, innovative solutions,
                and measurable outcomes that drive efficiency and growth.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
