"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CubeIcon,
  ArrowPathIcon,
  Squares2X2Icon,
  ShieldCheckIcon,
  ServerStackIcon,
  BoltIcon,
  RocketLaunchIcon,
  LightBulbIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    id: "data-management",
    title: "Reliable Data Management",
    icon: ServerStackIcon,
    content: [
      "Ensure your business data is accurate, secure, and accessible.",
      "Implement robust frameworks to maintain data integrity.",
      "Streamline management processes for efficiency.",
      "Monitor data access and permissions for compliance.",
      "Enable easy retrieval and real-time data availability.",
      "Integrate with analytics tools for actionable insights.",
    ],
    image: "/images/1.avif",
  },
  {
    id: "data-warehousing",
    title: "Scalable Warehousing",
    icon: CubeIcon,
    content: [
      "Centralize and unify data from multiple sources.",
      "Enable faster retrieval, analysis, and reporting.",
      "High-performance warehouse for seamless operations.",
      "Support structured and unstructured data storage.",
      "Implement security and backup mechanisms.",
      "Optimize storage for scalability and cost-efficiency.",
    ],
    image: "/images/2.avif",
  },
  {
    id: "data-transformation",
    title: "Smart Data Transformation",
    icon: ArrowPathIcon,
    content: [
      "Transform raw, disparate data into structured insights.",
      "Use advanced ETL processes for optimized analytics.",
      "Prepare data for downstream analysis and visualization.",
      "Validate data accuracy and completeness.",
      "Standardize formats for integration across platforms.",
      "Enable faster decision-making with ready-to-use data.",
    ],
    image: "/images/3.avif",
  },
  {
    id: "data-mapping",
    title: "Accurate Data Mapping",
    icon: Squares2X2Icon,
    content: [
      "Define clear connections between diverse data elements.",
      "Ensure secure and consistent data flow across systems.",
      "Maintain data accuracy and relationships for analytics.",
      "Map source fields to target destinations effectively.",
      "Identify missing or conflicting data for resolution.",
      "Support data lineage and traceability requirements.",
    ],
    image: "/images/4.avif",
  },
  {
    id: "data-quality",
    title: "Premium Data Quality",
    icon: ShieldCheckIcon,
    content: [
      "Validate and enrich data to enhance reliability.",
      "Remove duplicates and inconsistencies.",
      "Prevent errors for accurate analytics outcomes.",
      "Monitor data quality metrics continuously.",
      "Apply automated quality checks and alerts.",
      "Ensure compliance with industry standards.",
    ],
    image: "/images/5.avif",
  },
  {
    id: "daaas",
    title: "Analytics as a Service",
    icon: ServerStackIcon,
    content: [
      "Leverage full-scale analytics without in-house infrastructure.",
      "Visualization to predictive modeling included.",
      "End-to-end solutions for actionable insights.",
      "Reduce costs by using cloud-based analytics.",
      "Enable flexible access to analytics tools anytime.",
      "Support decision-making with real-time data analysis.",
    ],
    image: "/images/6.avif",
  },
  {
    id: "augmented-analytics",
    title: "AI-Powered Analytics",
    icon: BoltIcon,
    content: [
      "Use AI and machine learning to accelerate insights.",
      "Generate interactive visualizations.",
      "Make faster data-driven decisions.",
      "Predict future trends with advanced algorithms.",
      "Automate repetitive analytics tasks.",
      "Enhance operational efficiency across departments.",
    ],
    image: "/images/7.avif",
  },
  {
    id: "data-modernization",
    title: "Modern Data Infrastructure",
    icon: RocketLaunchIcon,
    content: [
      "Upgrade legacy systems to scalable cloud platforms.",
      "Implement modern data processing strategies.",
      "Enable advanced analytics capabilities.",
      "Support hybrid and multi-cloud environments.",
      "Enhance security and performance of data systems.",
      "Prepare infrastructure for future AI & analytics needs.",
    ],
    image: "/images/8.avif",
  },
  {
    id: "data-advisory",
    title: "Strategic Data Advisory",
    icon: LightBulbIcon,
    content: [
      "Receive expert guidance on maximizing business data value.",
      "Optimize existing infrastructure.",
      "Create a roadmap for sustainable growth.",
      "Implement data governance policies.",
      "Identify new opportunities with analytics insights.",
      "Support strategic decision-making and planning.",
    ],
    image: "/images/9.avif",
  },
];

export default function DataServices() {
  const [activeId, setActiveId] = useState("data-transformation");
  const activeService = services.find((s) => s.id === activeId);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Cutting-Edge Data Analytics Services We Offer
        </h2>
        <span className="block w-24 h-1 bg-pink-600 mx-auto rounded-full mb-4"></span>
        <p className="text-gray-700 max-w-2xl mx-auto">
          We offer a comprehensive range of data analytics services to meet your
          unique business needs.
        </p>
      </div>

      <div className="container mx-auto px-4 bg-gradient-to-r from-black/90 to-gray-700 rounded-xl py-8 md:py-12 flex flex-col md:flex-row gap-8">
        {/* Tabs */}
        <div className="md:w-1/3 flex flex-col space-y-2 overflow-y-auto max-h-[600px] pr-2">
          {services.map((service) => (
            <button
              key={service.id}
              className={`text-left px-4 py-3 rounded-lg font-medium transition flex items-center gap-2 ${
                activeId === service.id
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/20"
              }`}
              onClick={() => setActiveId(service.id)}
            >
              <service.icon className="w-8 h-8 text-gray-300" />
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="md:w-2/3 text-white flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            {activeService && (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <activeService.icon className="w-10 h-10 text-gray-300" />
                  {activeService.title}
                </h3>
                <ul className="list-disc list-inside text-gray-100 mt-2 space-y-2">
                  {activeService.content.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="inline-block bg-white text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition mt-4"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Right Illustration */}
          {activeService && (
            <div className="hidden md:flex md:w-1/2 justify-center items-center">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="rounded-xl shadow-lg w-full max-w-md object-cover h-96 md:h-[500px] lg:h-[600px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
