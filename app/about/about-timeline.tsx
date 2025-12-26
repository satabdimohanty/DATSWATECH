"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

/**
 * Timeline data must always be a non-empty array.
 * Each item MUST contain year, title, desc, and image.
 */
const timelineData = [
  {
    year: 2016,
    title: "Foundation of Datswatech",
    desc: "Datswatech was founded with a clear mission to deliver reliable, scalable, and future-ready digital solutions for modern businesses.",
    image: "/images/about/1.avif",
  },
  {
    year: 2017,
    title: "Early Client Success",
    desc: "Successfully delivered initial web and software projects, building long-term trust with early clients.",
    image: "/images/about/2.avif",
  },
  {
    year: 2018,
    title: "Service Expansion",
    desc: "Expanded offerings into mobile app development, UI/UX design, and cloud-based solutions.",
    image: "/images/about/3.avif",
  },
  {
    year: 2019,
    title: "Team Growth",
    desc: "Scaled the engineering and design teams to support larger and more complex digital products.",
    image: "/images/about/4.jpg",
  },
  {
    year: 2021,
    title: "Enterprise Solutions",
    desc: "Delivered enterprise-grade applications with a strong focus on performance, security, and scalability.",
    image: "/images/about/5.jpg",
  },
  {
    year: 2023,
    title: "Innovation & AI Focus",
    desc: "Integrated AI-driven solutions, automation, and data intelligence to help clients stay ahead of the curve.",
    image: "/images/about/6.avif",
  },
];

export default function AboutTimeline() {
  // ✅ Always clamp index to avoid undefined access
  const [activeIndex, setActiveIndex] = useState(0);

  const safeIndex = useMemo(() => {
    if (!Array.isArray(timelineData) || timelineData.length === 0) return 0;
    return Math.min(Math.max(activeIndex, 0), timelineData.length - 1);
  }, [activeIndex]);

  const active = timelineData[safeIndex];

  // ✅ Hard guard: prevents runtime crashes like `Cannot read properties of null`
  if (!active) {
    return null;
  }

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-[320px] md:h-[420px] rounded-2xl overflow-hidden  shadow-2xl">
            <Image
              src={active.image || "/timeline/fallback.jpg"}
              alt={String(active.year)}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="relative">
            <h2 className="text-[120px] md:text-[160px] font-extrabold leading-none text-blue-500">
              {active.year}
            </h2>
            <p className="max-w-md text-gray-300 mt-4">{active.desc}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <div className="relative h-[2px] bg-gray-700">
            <div
              className="absolute left-0 top-0 h-[2px] bg-blue-500 transition-all duration-500"
              style={{
                width: `${
                  timelineData.length > 1
                    ? (safeIndex / (timelineData.length - 1)) * 100
                    : 0
                }%`,
              }}
            />
          </div>

          <div className="flex justify-between mt-6">
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center group"
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                    index <= safeIndex
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-500"
                  }`}
                />
                <span
                  className={`mt-2 text-sm transition-colors ${
                    index === safeIndex ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item.year}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
