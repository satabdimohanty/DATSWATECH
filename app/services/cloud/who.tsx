"use client";

import { useState } from "react";
import Image from "next/image";

const faqItems = [
  {
    title: "For Business & Technology Leaders",
    subtitle: "Drive cloud transformation with clarity and control.",
    points: [
      "Align cloud strategy with business goals and growth plans.",
      "Gain cost visibility and optimize cloud investments.",
      "Ensure enterprise-grade security, compliance, and governance.",
      "Adopt flexible cloud models including hybrid and multi-cloud.",
    ],
    image: "/images/cloud/decission.avif",
  },
  {
    title: "For Engineers & Platform Teams",
    subtitle: "Design, deploy, and scale cloud-native applications faster.",
    points: [
      "Automate infrastructure using Infrastructure as Code (IaC).",
      "Build and manage containerized workloads with Kubernetes.",
      "Accelerate deployments with standardized environments.",
      "Monitor performance and scale applications in real time.",
    ],
    image: "/images/cloud/team.avif",
  },
  {
    title: "For IT & Operations Teams",
    subtitle: "Operate secure, resilient, and high-performing cloud systems.",
    points: [
      "Maintain high availability across regions and environments.",
      "Centralized visibility into infrastructure and workloads.",
      "Automate backups, scaling, and disaster recovery processes.",
      "Manage access, roles, and permissions with ease.",
    ],
    image: "/images/cloud/infa1.avif",
  },
];

export default function WhoIsItForCloud() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold text-pink-600 uppercase tracking-wider">
          Who is it for?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Cloud Solutions Built for Every Team
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From business leaders to engineers, our cloud solutions empower teams
          at every level to scale, optimize, and manage workloads efficiently.
        </p>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
        {/* Accordion */}
        <div className="md:w-1/2 pr-2 space-y-4">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-xl overflow-hidden shadow ${
                activeIndex === idx ? "bg-white" : "bg-gray-100"
              }`}
            >
              <button
                className="w-full text-left px-4 py-4 flex justify-between items-center font-semibold text-gray-900"
                onClick={() => setActiveIndex(idx)}
              >
                {item.title}
                <span className="text-2xl">
                  {activeIndex === idx ? "−" : "+"}
                </span>
              </button>

              {activeIndex === idx && (
                <div className="px-4 pb-6">
                  <p className="text-gray-700 mb-4">{item.subtitle}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <img
                          src="https://neysa.stagingsea.com/wp-content/uploads/2025/11/checked.svg"
                          alt="check"
                          className="w-4 mt-1"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="md:w-1/2 pl-2 mt-6 md:mt-0 flex justify-center">
          <Image
            src={faqItems[activeIndex].image}
            alt={faqItems[activeIndex].title}
            width={500}
            height={400}
            className="rounded-xl object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
