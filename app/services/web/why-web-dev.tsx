"use client"; // for Next.js 13 app directory

import { HiOutlineUserGroup, HiOutlineGlobeAlt } from "react-icons/hi";
import {
  MdTimer,
  MdLanguage,
  MdAttachMoney,
  MdSupportAgent,
  MdUpdate,
  MdWeb,
} from "react-icons/md";

const features = [
  {
    title: "Skilled Web Developers",
    description:
      "Our expert developers build responsive, secure, and scalable websites aligned with your business goals.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Global Project Delivery",
    description:
      "We successfully deliver web projects worldwide with smooth coordination and reliable execution.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "On-Time Delivery",
    description:
      "We follow agile practices to ensure timely delivery without compromising performance or quality.",
    icon: MdTimer,
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Your website will perform flawlessly across all browsers, devices, and screen sizes.",
    icon: MdWeb,
  },
  {
    title: "Multilingual Website Support",
    description:
      "Expand your global reach with multilingual website solutions for diverse audiences.",
    icon: MdLanguage,
  },
  {
    title: "Affordable Web Solutions",
    description:
      "We deliver high-quality web development services at cost-effective pricing.",
    icon: MdAttachMoney,
  },
  {
    title: "Expert Consultation",
    description:
      "Get strategic guidance from our experts to plan, build, and scale your web presence.",
    icon: MdSupportAgent,
  },
  {
    title: "Regular Updates & Maintenance",
    description:
      "We keep your website secure, optimized, and updated with the latest technologies.",
    icon: MdUpdate,
  },
];

export default function WhyChooseWebSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-primary font-bold text-lg mb-2">
            Hire Expert Web Developers at DATSWATECH
          </h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Why Choose DATSWATECH for Web Development
          </h3>
        </div>

        {/* Layout */}
        <div className="lg:flex lg:gap-12 items-stretch">
          {/* Left Image with Glowing Border */}
          <div className="hidden lg:block flex-1">
            <div
              className="relative rounded-2xl p-[3px]
                         bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
                         shadow-[0_0_25px_rgba(59,130,246,0.4)]
                         hover:shadow-[0_0_45px_rgba(59,130,246,0.7)]
                         transition-all duration-500 h-full"
            >
              <img
                src="/images/web/why.png"
                alt="web development"
                className="rounded-2xl w-full h-full object-cover bg-white"
              />

              {/* Overlay Text */}
              <h4 className="absolute top-6 left-6 text-5xl font-bold text-gray-200 leading-snug pointer-events-none">
                Web <br /> Development
              </h4>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group p-5 bg-white rounded-xl shadow-md
                             border-b-2 border-transparent
                             transition-all duration-300
                             hover:shadow-lg hover:border-blue-500 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-5xl text-primary flex-shrink-0
                                 transition-transform duration-300
                                 group-hover:scale-125 group-hover:text-blue-500"
                    >
                      <Icon />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-justify">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
