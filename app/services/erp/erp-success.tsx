"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ChartBarIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  CubeTransparentIcon,
  AdjustmentsHorizontalIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const stories = [
  {
    title: "Next-gen Learning Chatbot",
    description: [
      "Train sales teams using AI & gamification",
      "Interactive learning modules",
      "Track team performance",
    ],
    image: "/images/success/next-gen.avif",
    icon: <ChartBarIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Tracking & Collision Avoidance",
    description: [
      "AI/ML app to improve pedestrian safety",
      "Predictive analytics for road conditions",
      "Real-time alerts",
    ],
    image: "/images/success/track.avif",
    icon: <Cog6ToothIcon className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Procedure for Data Analytics",
    description: [
      "Structured data analytics process",
      "Identify business insights",
      "Actionable reports",
    ],
    image: "/images/success/data.avif",
    icon: <UserGroupIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Intelligent AI Bot",
    description: [
      "Enhance customer service",
      "Automate repetitive tasks",
      "Personalize user interactions",
    ],
    image: "/images/success/ai-bot.jpg",
    icon: <CubeTransparentIcon className="w-8 h-8 text-pink-600" />,
  },
  {
    title: "ERP Process Optimization",
    description: [
      "Streamline workflows",
      "Improve operational efficiency",
      "Reduce manual errors",
    ],
    image: "/images/success/erp-process.avif",
    icon: <AdjustmentsHorizontalIcon className="w-8 h-8 text-yellow-600" />,
  },
  {
    title: "Real-time Analytics Dashboard",
    description: [
      "Monitor KPIs in real-time",
      "Visualize data with charts",
      "Make faster business decisions",
    ],
    image: "/images/success/real.avif",
    icon: <BoltIcon className="w-8 h-8 text-red-600" />,
  },
];

export default function ErpSuccessStoriesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const width = typeof window !== "undefined" ? window.innerWidth : 1024;
  const offsetDesktop = 360;
  const offsetMobile = 220;
  const offset = width < 768 ? offsetMobile : offsetDesktop;

  return (
    <section className="container mx-auto px-4 py-20">
      {/* Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
        Explore Our ERP Success Stories
      </h2>
      <p className="text-gray-500 text-center mb-12">
        Discover how AI-driven ERP solutions transform business operations across industries.
      </p>

      {/* Carousel */}
      <div className="relative w-full h-[500px] md:h-[520px] lg:h-[550px] flex justify-center items-start overflow-visible">
        {stories.map((story, index) => {
          const diff = index - activeIndex;
          const isActive = index === activeIndex;

          // Show 2 cards on each side for peek effect
          const visible = Math.abs(diff) <= 2;
          if (!visible) return null;

          return (
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50 && activeIndex < stories.length - 1) {
                  setActiveIndex(activeIndex + 1);
                } else if (info.offset.x > 50 && activeIndex > 0) {
                  setActiveIndex(activeIndex - 1);
                }
              }}
              initial={{ opacity: 0 }}
              animate={{
                x: diff * offset,
                scale: isActive ? 1 : 0.85,
                opacity: isActive ? 1 : 0.5,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-white cursor-grab touch-pan-y hover:scale-105 hover:shadow-3xl transition-transform duration-300"
              style={{
                width: width < 640 ? "240px" : width < 1024 ? "300px" : "340px",
                height: "100%",
              }}
            >
              {/* Image */}
              <div className="relative w-full h-[300px] md:h-[320px] lg:h-[350px]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-white/80 rounded-full p-2">
                  {story.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
                <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 flex-1">
                  {story.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-4 mt-6">
        {stories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-4 h-4 rounded-full transition-transform transform hover:scale-125 ${
              index === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
