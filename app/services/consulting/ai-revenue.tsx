"use client";

import React from "react";

export default function DatswatechStats() {
  const stats = [
    { value: "50+", label: "Projects Delivered Successfully" },
    { value: "30%", label: "Average ROI Improvement" },
    { value: "100%", label: "Client Satisfaction Rate" },
    { value: "25H/week", label: "Time Saved for Clients" },
    { value: "75%", label: "Process Efficiency Boost" },
  ];

  return (
    <section className="p-section py-24 dark:text-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-light mb-12">
          <span className="font-light block">
            Transforming Businesses with
          </span>
          Datswatech Consultancy
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-5xl md:text-6xl font-bold mb-2">
                {stat.value}
              </h3>
              <p className="text-lg md:text-xl font-light">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
