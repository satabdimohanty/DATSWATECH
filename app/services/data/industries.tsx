"use client";
import { useState, useRef, useEffect } from "react";
import {
  ServerStackIcon,
  CubeIcon,
  BoltIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
}

const services: Service[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Healthcare organizations and doctors can use data analytics to analyze patient data, predict diseases, accelerate research, personalize plans, and reduce healthcare costs.",
    icon: <ServerStackIcon className="w-6 h-6" />,
    link: "#",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    description:
      "Retail and e-commerce businesses can use analytics to understand customers, optimize inventory, pricing, and personalize shopping experiences.",
    icon: <CubeIcon className="w-6 h-6" />,
    link: "#",
  },
  {
    id: "finance",
    title: "Finance & Banking",
    description:
      "Finance and banking companies can leverage analytics for risk management, fraud detection, customer segmentation, and personalized financial products.",
    icon: <BoltIcon className="w-6 h-6" />,
    link: "#",
  },
  {
    id: "insurance",
    title: "Insurance",
    description:
      "Analytics helps insurance companies with risk assessment, policy personalization, and claims processing by analyzing customer and environmental data.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    link: "#",
  },
  {
    id: "modernization",
    title: "Data Modernization",
    description:
      "We help modernize legacy systems to cloud platforms, implement modern processing, and make data infrastructure future-ready.",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    link: "#",
  },
  {
    id: "advisory",
    title: "Data Advisory",
    description:
      "We provide strategic guidance to utilize business data, assess infrastructure, identify gaps, and create a roadmap for growth.",
    icon: <LightBulbIcon className="w-6 h-6" />,
    link: "#",
  },
];

export default function ServicesHoverTabsTop() {
  const [active, setActive] = useState(services[0].id);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLUListElement>(null);

  const activeService = services.find((s) => s.id === active);

  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs) return;
    const activeTab = tabs.querySelector<HTMLLIElement>(`li[data-id='${active}']`);
    if (activeTab) {
      setUnderlineStyle({ left: activeTab.offsetLeft, width: activeTab.offsetWidth });
    }
  }, [active]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Industries with Cutting-Edge Data Analytics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-700 text-lg">
            We empower industries to leverage business data for actionable insights—optimizing operations, understanding customers, and forecasting trends to maximize ROI.
          </p>
        </div>

        {/* Tabs */}
        <ul
          ref={tabsRef}
          className="flex flex-wrap justify-center gap-4 relative mb-8 border-b border-gray-200 pb-2"
        >
          {services.map((service) => (
            <li
              key={service.id}
              data-id={service.id}
              className={`flex flex-col items-center cursor-pointer transition-transform duration-300
                ${active === service.id ? "scale-105" : "hover:scale-105"}
              `}
              onMouseEnter={() => setActive(service.id)}
            >
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                  active === service.id
                    ? "bg-gradient-to-r from-gray-500 to-purple-800 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-200/50"
                } transition-all duration-300`}
              >
                <span className="p-2 bg-white rounded-full text-gray-900 shadow">
                  {service.icon}
                </span>
                <span className="font-medium">{service.title}</span>
              </div>
            </li>
          ))}

          {/* Sliding underline */}
          <span
            className="absolute bottom-0 h-1 bg-gradient-to-r from-gray-500 to-purple-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          ></span>
        </ul>

        {/* Content */}
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300">
          {activeService && (
            <div className="text-center md:text-left max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 flex items-center justify-center md:justify-start gap-3">
                <span className="p-2 bg-gray-500 rounded-full text-white">{activeService.icon}</span>
                {activeService.title}
              </h3>
              <p className="text-gray-700 mb-6">{activeService.description}</p>
              <a
                href={activeService.link || "#"}
                className="inline-block bg-gray-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-pink-600 transition"
              >
                Get Started
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
