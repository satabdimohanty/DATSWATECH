"use client";

import { useState } from "react";
import { ChevronDown, Smartphone, Laptop, Cpu, Headset } from "lucide-react";

const items = [
  {
    id: "01",
    title: "Custom Software Solutions",
    icon: <Cpu className="w-6 h-6 text-white" />,
    content:
      "DATSWATECH delivers tailor-made software solutions to address unique business challenges, ensuring efficiency, scalability, and innovation across all digital operations.",
  },
  {
    id: "02",
    title: "Mobile App Development",
    icon: <Smartphone className="w-6 h-6 text-white" />,
    content:
      "We design and develop intuitive mobile applications for both iOS and Android, providing seamless user experiences and robust performance.",
  },
  {
    id: "03",
    title: "Web Development & Design",
    icon: <Laptop className="w-6 h-6 text-white" />,
    content:
      "Our team creates responsive, high-performing websites with modern designs that enhance brand presence and drive engagement.",
  },
  {
    id: "04",
    title: "AI & Automation Services",
    icon: <Cpu className="w-6 h-6 text-white" />,
    content:
      "DATSWATECH leverages AI and automation to streamline business processes, improve decision-making, and deliver intelligent solutions for enterprises.",
  },
  {
    id: "05",
    title: "Dedicated Support & Maintenance",
    icon: <Headset className="w-6 h-6 text-white" />,
    content:
      "We provide ongoing support and maintenance services to ensure your applications and systems run smoothly and stay up-to-date with latest technologies.",
  },
];

export default function AIWhyChooseUs() {
  // Track only a single active ID
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id)); // Collapse others when opening one
  };

  return (
    <section className="py-28 ">
      <div className="max-w-8xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
          {/* LEFT CONTENT */}
          <div className="relative bg-gradient-to-br from-blue-700 via-blue-900 to-black p-14 lg:p-20 text-white flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full text-3xl animate-pulse">
                💻
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Why Choose DATSWATECH as Your Technology Partner?
            </h2>

            <p className="text-gray-200 text-lg leading-relaxed max-w-md">
              DATSWATECH empowers businesses with innovative software, mobile,
              and web solutions. Our dedicated team ensures every project is
              delivered with excellence, scalability, and a focus on real
              business impact.
            </p>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="bg-gradient-to-b from-gray-300 via-gray-400 to-gray-500 p-10 lg:p-16">
            {items.map((item) => (
              <div
                key={item.id}
                className="mb-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white"
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between py-6 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-lg gap-4 rounded-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <span className="bg-blue-600 p-3 rounded-full flex items-center justify-center">
                      {item.icon}
                    </span>
                    <span>
                      <span className="text-gray-500 mr-1">{item.id}/</span>
                      {item.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-500 ${
                      activeId === item.id ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {/* ANSWER CONTENT */}
                <div
                  className={`px-8 py-6 bg-gray-50 text-gray-700 text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                    activeId === item.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
