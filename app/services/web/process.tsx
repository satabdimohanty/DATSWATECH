"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "kickoff",
    title: "Vision Alignment",
    icon: {
      normal: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kik-01.svg",
      hover: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kikhov-01.svg",
    },
    img: "/images/web/vision.jpg",
    description:
      "We start by aligning on goals, understanding your vision, and setting a clear roadmap for success.",
    points: ["Define project vision", "Identify key milestones", "Set expectations & timelines"],
  },
  {
    id: "scoping",
    title: "Scope & Strategy",
    icon: {
      normal: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kik-02.svg",
      hover: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kikhov-02.svg",
    },
    img: "/images/web/scope.jpg",
    description:
      "We define project boundaries, requirements, and deliverables to ensure a smooth development process.",
    points: ["Requirement analysis", "Resource allocation", "Risk assessment & mitigation"],
  },
  {
    id: "build",
    title: "Design & Development",
    icon: {
      normal: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kik-03.svg",
      hover: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kikhov-03.svg",
    },
    img: "/images/web/design.jpg",
    description:
      "Our team develops, tests, and refines solutions iteratively to ensure high-quality and on-time delivery.",
    points: ["Agile development", "Continuous testing", "Iterative improvements"],
  },
  {
    id: "review",
    title: "Feedback & QA",
    icon: {
      normal: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kik-04.svg",
      hover: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kikhov-04.svg",
    },
    img: "/images/web/feedback.jpg",
    description:
      "We present functional demos, gather feedback, and iterate to ensure the solution meets expectations.",
    points: ["Stakeholder demos", "Feedback incorporation", "Quality assurance"],
  },
  {
    id: "launch",
    title: "Seamless Launch",
    icon: {
      normal: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kik-05.svg",
      hover: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kikhov-05.svg",
    },
    img: "/images/web/launch.jpg",
    description:
      "We deploy the solution seamlessly and ensure everything is optimized for performance and scalability.",
    points: ["Deployment", "Performance check", "Monitoring setup"],
  },
  {
    id: "evolve",
    title: "Continuous Growth",
    icon: {
      normal: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kik-02.svg",
      hover: "https://www.pixelcrayons.com/wp-content/uploads/2025/11/kikhov-02.svg",
    },
    img: "/images/web/growth.avif",
    description:
      "We continue improving, optimizing, and scaling solutions to ensure long-term success and ROI.",
    points: ["Continuous optimization", "Regular updates", "Scalable growth"],
  },
];

export default function HorizontalProcessTabs() {
  const [activeStep, setActiveStep] = useState("launch");

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Process: Clarity At Every Step
          </h2>
          <p className="text-gray-600">
            You’ll always know the progress, the people, and the next milestone.
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-gray-50 rounded-2xl p-4 mb-16 shadow-md">
          <ul className="flex justify-between px-4 lg:px-8 gap-6">
            {steps.map((step) => (
              <li
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`group cursor-pointer flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300 justify-center min-w-[130px] ${
                  activeStep === step.id
                    ? "text-white font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-md border-b-4 border-blue-800"
                    : "text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 hover:shadow-sm"
                }`}
              >
                <div className="relative w-10 h-10">
                  <img
                    src={step.icon.normal}
                    alt={step.title}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                      activeStep === step.id ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={step.icon.hover}
                    alt={step.title}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
                      activeStep === step.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
                <span className="text-base font-medium transition-transform duration-300 group-hover:scale-110">
                  {step.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="relative rounded-2xl overflow-hidden shadow-inner mb-12">
          <AnimatePresence mode="wait">
            {steps.map(
              (step) =>
                activeStep === step.id && (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row gap-10 items-center p-6 lg:p-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 rounded-2xl"
                  >
                    <div className="lg:w-1/2">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="rounded-2xl w-full object-cover transform transition-transform duration-500 hover:scale-105 shadow-xl"
                      />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                      <h3 className="text-3xl font-bold mb-4 text-blue-800">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mb-4 text-lg">
                        {step.description}
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                        {step.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
