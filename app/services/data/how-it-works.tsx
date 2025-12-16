"use client";

import React from "react";

// Define the structure of each content item
interface Content {
  title: string;
  text: string;
}

// Props for the ContentItem component
interface ContentItemProps {
  item: Content;
  index: number;
}

// The ContentItem component
const ContentItem: React.FC<ContentItemProps> = ({ item, index }) => (
  <div className="xl:p-4 text-center">
    <div className="w-12 h-12 rounded-full text-xl inline-flex justify-center items-center bg-blue-600 text-white mb-4 mx-auto">
      {index}
    </div>
    <h4 className="font-bold text-xl mb-4">{item.title}</h4>
    <p className="opacity-80 mb-0">{item.text}</p>
  </div>
);

// Updated data analytics content
const contents: Content[] = [
  {
    title: "Data Discovery & Collection",
    text: "Identify, gather, and consolidate data from multiple sources including databases, APIs, and IoT devices for analysis.",
  },
  {
    title: "Data Cleaning & Preparation",
    text: "Cleanse, validate, and standardize data to remove inconsistencies, duplicates, and errors for accurate analytics.",
  },
  {
    title: "Data Integration",
    text: "Combine data from different sources into a unified dataset, ensuring seamless integration for advanced analytics.",
  },
  {
    title: "Advanced Analytics & Modeling",
    text: "Apply statistical analysis, predictive modeling, and AI/ML algorithms to uncover insights and forecast trends.",
  },
  {
    title: "Visualization & Reporting",
    text: "Create interactive dashboards, charts, and reports to communicate insights effectively to stakeholders.",
  },
  {
    title: "Optimization & Continuous Monitoring",
    text: "Monitor analytics models, refine algorithms, and optimize processes for improved decision-making and business outcomes.",
  },
];

const HowItWorks2: React.FC = () => {
  return (
    <section className="ezy__howitworks2 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        {/* Header & description centered */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold md:text-[45px] leading-tight mb-4">
            How Our Data Analytics Process Works
          </h1>
          <p className="text-[17px] leading-normal opacity-80 mx-auto max-w-3xl">
            Our structured approach to data analytics ensures that every
            step—from data discovery to actionable insights—is optimized for
            your business goals.
          </p>
        </div>

        {/* Image at top */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/how-it-works.avif"
            alt="Data Analytics Illustration"
            className="max-w-full h-auto rounded-[20px] md:w-[70%] lg:w-[60%]"
          />
        </div>

        {/* Content cards */}
        <div className="grid grid-cols-6 gap-6 justify-center items-center">
          {contents.map((item, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <ContentItem index={i + 1} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks2;
