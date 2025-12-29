"use client";

import React from "react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  points?: string[];
}

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text }) => (
  <div className="inline-flex items-center space-x-2 text-sm font-semibold text-[#37322F]">
    {icon}
    <span>{text}</span>
  </div>
);

const MilestonesSection: React.FC = () => {
  const milestones: Milestone[] = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "DATSWATECH started with a vision to democratize tech solutions.",
      points: ["Core team established", "Initial funding secured"],
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Launched our first enterprise solution.",
      points: ["Beta testing with 5 clients", "Positive market feedback"],
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Entered 3 new international markets.",
      points: [
        "Offices in USA, UK, and Canada",
        "Partnerships with key enterprises",
      ],
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded multiple accolades for innovation and excellence.",
      points: ["Top 50 startups recognition", "AI innovation award"],
    },
  ];

  return (
    <div className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-10 via-blue-10 to-gray-400">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            icon={
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1V13M1 7H13"
                  stroke="#37322F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            }
            text="Our Journey"
          />
          <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
            Milestones that shaped our technology journey.
          </h2>
          <p className="mt-2 text-base sm:text-lg text-black max-w-2xl mx-auto">
            A timeline of innovation, growth, and impactful digital solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Dotted timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-[rgba(55,50,47,0.3)] transform md:-translate-x-1/2"></div>

          <div className="space-y-16">
            {milestones.map((milestone, i) => (
              <div
                key={i}
                className={`relative flex items-start md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  } pl-12 md:pl-0`}
                >
                  <div className="bg-gradient-to-tr from-white via-blue-50 to-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition-all">
                    <div className="text-blue-500 text-sm font-bold font-sans">
                      {milestone.year}
                    </div>
                    <h3 className="text-[#37322F] text-xl md:text-2xl font-bold font-sans mt-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[rgba(55,50,47,0.75)] text-sm md:text-base leading-6 font-sans mt-3">
                      {milestone.description}
                    </p>

                    {/* Optional bullet points */}
                    {milestone.points && (
                      <ul className="mt-4 list-disc list-inside space-y-1 text-blue-700 font-medium">
                        {milestone.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-blue-500 rounded-full border-2 border-white transform -translate-x-1/2 top-8 md:top-auto md:translate-y-0 shadow-lg"></div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestonesSection;
