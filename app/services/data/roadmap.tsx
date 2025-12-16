"use client";

import Image from "next/image";
import { FaSearch, FaDatabase, FaCog, FaChartLine, FaRegChartBar, FaHandsHelping } from "react-icons/fa";

const steps = [
  {
    title: "Business Discovery & Goal Setting",
    description:
      "We collaborate with stakeholders to understand business challenges, define objectives, and prioritize key performance indicators to align analytics solutions with your goals.",
    icon: <FaSearch size={24} />,
  },
  {
    title: "Data Acquisition & Integration",
    description:
      "Collecting structured and unstructured data from multiple sources including CRM, ERP, IoT devices, and social platforms, ensuring smooth integration for further processing.",
    icon: <FaDatabase size={24} />,
  },
  {
    title: "Data Cleansing & Transformation",
    description:
      "Raw data is cleaned, standardized, and transformed into consistent formats, removing duplicates and errors to create high-quality datasets for accurate analysis.",
    icon: <FaCog size={24} />,
  },
  {
    title: "Advanced Analytics & Modeling",
    description:
      "Leveraging machine learning, AI, and statistical methods, we generate predictive and prescriptive models that provide actionable insights for informed decision-making.",
    icon: <FaChartLine size={24} />,
  },
  {
    title: "Visualization & Reporting",
    description:
      "Our experts design intuitive dashboards, charts, and interactive reports that make complex analytics easily understandable for stakeholders at all levels.",
    icon: <FaRegChartBar size={24} />,
  },
  {
    title: "Optimization & Continuous Support",
    description:
      "We provide ongoing monitoring, fine-tuning of models, and support to ensure analytics solutions remain accurate, efficient, and aligned with evolving business needs.",
    icon: <FaHandsHelping size={24} />,
  },
];

export default function Roadmap() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left sticky text + image */}
          <div className="sticky top-24 self-start text-center md:text-left space-y-6">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/images/roadmap.avif"
                alt="Roadmap"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold mb-4">
                Our Step-by-Step Data Analytics Roadmap
              </h3>
              <p className="mb-6 text-gray-700">
                We follow a structured approach to deliver end-to-end data analytics solutions. Each step ensures data is transformed into actionable insights that drive measurable business outcomes.
              </p>
              <a
                href="#contact-us"
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow flex items-start gap-4">
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                {/* Title with icon */}
                <div>
                  <h4 className="text-xl font-semibold flex items-center gap-2 mb-2">
                    {step.icon}
                    {step.title}
                  </h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
