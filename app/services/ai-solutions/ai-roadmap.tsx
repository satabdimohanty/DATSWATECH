"use client";

import { useState } from "react";
import { Lightbulb, Database, Cpu, Code } from "lucide-react";

type Phase = {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: React.ReactNode;
};

const phases: Phase[] = [
  {
    id: "1",
    title: "Ideation & Discovery",
    description: "Define business goals and AI use cases.",
    bullets: [
      "Identify pain points",
      "Stakeholder workshops",
      "Feasibility study",
      "Use case prioritization",
    ],
    icon: <Lightbulb className="w-6 h-6" />,
  },
  {
    id: "2",
    title: "Data Strategy & Collection",
    description: "Prepare and manage data for AI solutions.",
    bullets: [
      "Data audit & quality check",
      "Data integration from multiple sources",
      "Data labeling & annotation",
      "Compliance & governance",
    ],
    icon: <Database className="w-6 h-6" />,
  },
  {
    id: "3",
    title: "AI Solution Design",
    description: "Architect the AI system and create prototypes.",
    bullets: [
      "Select AI/ML models",
      "Design architecture & pipelines",
      "Build PoC/Prototype",
      "Choose technology stack",
    ],
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "4",
    title: "Model Development & Training",
    description: "Train and optimize AI models.",
    bullets: [
      "Data preprocessing & feature engineering",
      "Model training",
      "Hyperparameter tuning",
      "Validation & evaluation",
    ],
    icon: <Code className="w-6 h-6" />,
  },
];

export default function AIRoadmap() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="bg-gray-900 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">
          AI Solution Development Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="relative rounded-3xl border border-gray-700 bg-gray-800/40 backdrop-blur-md p-6 cursor-pointer
                         transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              onClick={() => setActiveId(activeId === phase.id ? null : phase.id)}
            >
              {/* Title + Description */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700/60 text-white shadow-md flex-shrink-0">
                  {phase.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                  <p className="text-gray-300 mt-1">{phase.description}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeId === phase.id ? "max-h-96 mt-4" : "max-h-0"
                }`}
              >
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {phase.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* Glow overlay behind content */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-gray-700/10 to-gray-800/10 opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
