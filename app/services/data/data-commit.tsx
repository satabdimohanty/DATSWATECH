"use client";

import React from "react";

interface CommitmentItem {
  icon: string;
  title: string;
  description: string;
}

const commitments: CommitmentItem[] = [
  {
    icon: "https://digitalissimple.com/wp-content/themes/twentytwenty/images/data-analytics/service-1.svg",
    title: "Data-Driven Decision Making",
    description:
      "We provide clear, actionable insights to remove guesswork, enabling efficient operations, lower risks, and higher profits.",
  },
  {
    icon: "https://digitalissimple.com/wp-content/themes/twentytwenty/images/data-analytics/service-2.svg",
    title: "Improved Business Performance",
    description:
      "Analytics helps identify areas to optimize operations and discover new revenue streams, boosting productivity and sustainable growth.",
  },
  {
    icon: "https://digitalissimple.com/wp-content/themes/twentytwenty/images/data-analytics/service-3.svg",
    title: "Understanding Customers & Tailoring Experiences",
    description:
      "Analyze customer behavior and preferences to design personalized marketing campaigns and enhance customer retention.",
  },
  {
    icon: "https://digitalissimple.com/wp-content/themes/twentytwenty/images/data-analytics/service-4.svg",
    title: "Competitive Market Advantage",
    description:
      "Real-time analytics lets businesses spot trends early, monitor competitors, and make proactive decisions to stay ahead.",
  },
  {
    icon: "https://digitalissimple.com/wp-content/themes/twentytwenty/images/data-analytics/service-5.svg",
    title: "Saving Money and Getting Smarter",
    description:
      "Identify areas of overspending and optimize resource allocation to run business efficiently and reduce costs.",
  },
  {
    icon: "https://digitalissimple.com/wp-content/themes/twentytwenty/images/data-analytics/service-6.svg",
    title: "Lowering Risk and Compliance",
    description:
      "Leverage data to assess risks, detect fraud, strengthen defenses, and comply with regulations effectively.",
  },
];

export default function DataCommitmentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Whatever The Challenge, Our Data Analytics Solutions Show You the Way Forward
          </h2>
          <p className="text-gray-700 text-lg">
            Gather, sort, and leverage your data for results you never saw before for unmatched business growth. Other benefits include:
          </p>
        </div>

        {/* Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 flex flex-col shadow-2xl items-center text-center border-b-4 border-transparent hover:border-blue-500 transition-all duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
              <a
                href="#"
                className="mt-4 font-medium text-gray-700 no-underline hover:no-underline"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
