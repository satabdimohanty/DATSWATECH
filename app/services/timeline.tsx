"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCircle, Bolt, Cpu, Database, Cloud } from "lucide-react";

interface TimelineStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const timelineData: TimelineStep[] = [
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
    title: "Discovery & Strategic Planning",
    description:
      "We analyze your business goals, identify technical challenges, and define a roadmap for scalable and secure solutions.",
  },
  {
    icon: <Bolt className="w-6 h-6 text-blue-500" />,
    title: "Ideation & Rapid Prototyping",
    description:
      "We transform concepts into interactive prototypes, validating ideas with stakeholders and ensuring technical feasibility.",
  },
  {
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    title: "Design & Architecture",
    description:
      "We craft intuitive UI/UX and robust technical architecture, balancing modern design with existing systems and API constraints.",
  },
  {
    icon: <Database className="w-6 h-6 text-blue-500" />,
    title: "Secure Integration & Compliance",
    description:
      "We integrate systems with end-to-end security, following industry compliance standards and best practices for data management.",
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-500" />,
    title: "Agile Development & Testing",
    description:
      "We deliver iterative, high-quality software with continuous testing, monitoring, and security measures built in from day one.",
  },
];

export default function ScrollTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    Array(timelineData.length).fill(false)
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;

      const scrollMid = window.scrollY + window.innerHeight / 2;
      const progress = scrollMid - timelineTop;
      setProgressHeight(Math.max(0, Math.min(progress, timelineHeight)));

      const stepsInView = timelineData.map((_, idx) => {
        const stepEl = document.getElementById(`timeline-step-${idx}`);
        if (!stepEl) return false;
        const rect = stepEl.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.8;
      });
      setVisibleSteps(stepsInView);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 md:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full font-semibold text-sm">
          Our Process
        </span>
        <h2 className="mt-6 text-4xl sm:text-5xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          How We Deliver Full-Spectrum IT Solutions
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl leading-relaxed">
          From consulting and prototyping to cloud integration, development, and
          AI solutions, we follow a structured, transparent, and results-driven
          methodology to ensure your enterprise technology projects succeed.
        </p>
      </div>

      {/* Timeline Component */}
      <div className="max-w-6xl mx-auto relative" ref={timelineRef}>
        {/* Full timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full rounded-full"></div>

        {/* Scroll progress line */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 rounded-full origin-top transition-all duration-150"
          style={{ height: `${progressHeight}px` }}
        ></div>

        {/* Timeline items */}
        <div className="flex flex-col space-y-32 relative">
          {timelineData.map((step, idx) => (
            <div
              key={idx}
              id={`timeline-step-${idx}`}
              className="flex flex-row items-start justify-between relative"
            >
              {/* Left: Title + Icon */}
              <div className="flex flex-col items-end w-1/2 pr-8">
                <div className="flex items-center gap-4">
                  {step.icon}
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 z-10 shadow-md"></div>

              {/* Right: Description card */}
              <div
                className={`w-1/2 pl-8 transition-all duration-700 ${
                  visibleSteps[idx]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-20"
                }`}
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all">
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
