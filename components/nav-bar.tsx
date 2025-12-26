"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  Smartphone,
  Code2,
  Palette,
  Brain,
  Cloud,
  Cpu,
  BarChart2,
} from "lucide-react";

const services = [
  {
    id: "mobile",
    badge: "Mobility",
    title: "Mobile App Development",
    description:
      "Design and build high-performance mobile applications that deliver seamless user experiences. From concept to launch, we create secure, scalable, and user-centric apps for iOS and Android.",
    features: [
      "iOS & Android App Development",
      "Cross-Platform Apps (React Native / Flutter)",
      "UI/UX Design for Mobile",
      "API & Backend Integration",
      "App Performance Optimization",
      "App Store Deployment & Support",
    ],
    icon: Smartphone,
  },
  {
    id: "web",
    badge: "Development",
    title: "Web Development",
    description:
      "Create stunning, high-performance web applications that engage users and drive results. We specialize in modern frameworks and technologies to build scalable, secure, and beautiful digital experiences.",
    features: [
      "Custom Web Applications",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Development",
      "CMS Solutions",
      "Performance Optimization",
    ],
    icon: Code2,
  },
  {
    id: "data",
    badge: "Core Service",
    title: "Data Solutions & Analytics",
    description:
      "Transform your raw data into powerful business insights. We build comprehensive data infrastructure, analytics pipelines, and visualization dashboards that help you make data-driven decisions with confidence.",
    features: [
      "Data Warehouse Architecture",
      "ETL Pipeline Development",
      "Business Intelligence Dashboards",
      "Real-time Analytics",
      "Data Lake Implementation",
      "Predictive Analytics",
    ],
    icon: BarChart2,
  },
  {
    id: "erp",
    badge: "Enterprise",
    title: "ERP Systems & Integration",
    description:
      "Streamline your entire business operations with custom ERP solutions. We implement, customize, and integrate enterprise resource planning systems that unify your processes and boost efficiency.",
    features: [
      "Custom ERP Development",
      "SAP & Oracle Implementation",
      "Legacy System Migration",
      "Module Customization",
      "Third-party Integration",
      "Training & Support",
    ],
    icon: Palette,
  },
  {
    id: "cloud",
    badge: "Cloud",
    title: "Cloud Solutions",
    description:
      "Design, deploy, and manage secure cloud infrastructures that scale with your business. We help organizations migrate, optimize, and innovate on the cloud to improve performance, reliability, and cost efficiency.",
    features: [
      "Cloud Architecture Design",
      "Cloud Migration & Modernization",
      "AWS, Azure & Google Cloud",
      "DevOps & CI/CD Pipelines",
      "Cloud Security & Compliance",
      "Monitoring & Cost Optimization",
    ],
    icon: Cloud,
  },
  {
    id: "consulting",
    badge: "Strategy",
    title: "IT Consulting & Transformation",
    description:
      "Navigate your digital transformation journey with expert guidance. We provide strategic consulting to help you leverage technology effectively, optimize operations, and achieve sustainable growth.",
    features: [
      "Digital Strategy",
      "Technology Assessment",
      "Process Optimization",
      "Change Management",
      "Vendor Selection",
      "IT Roadmap Planning",
    ],
    icon: Brain,
  },
  {
    id: "ai-solutions",
    badge: "AI",
    title: "AI & GenAI Solutions",
    description:
      "Empower your business with AI-driven strategies and tools. We help you identify high-impact AI use-cases, implement generative AI models, and integrate intelligent automation for measurable outcomes.",
    features: [
      "AI Readiness Assessment",
      "Generative AI Model Selection",
      "Agentic AI Workflow Design",
      "Intelligent Process Automation",
      "Predictive Analytics & Insights",
      "AI Integration & Deployment",
    ],
    icon: Cpu,
  },
];

const gradients = [
  "from-indigo-50 via-indigo-100 to-indigo-200",
  "from-emerald-50 via-emerald-100 to-emerald-200",
  "from-rose-50 via-rose-100 to-rose-200",
  "from-amber-50 via-amber-100 to-amber-200",
  "from-sky-50 via-sky-100 to-sky-200",
  "from-purple-50 via-purple-100 to-purple-200",
  "from-pink-50 via-pink-100 to-pink-200",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center">
      <nav className="w-full max-w-[960px] px-6 sm:px-10 py-3 bg-white/70 backdrop-blur-xl rounded-full shadow-xl border border-white/30 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-gray-800 hover:text-gray-900 transition"
        >
          DATSWATECH
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-6 relative font-bold">
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link href="/services" className="relative">
              <button className="text-sm text-gray-700 hover:text-gray-900 transition font-bold px-2 py-1 rounded-md">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </Link>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className={`fixed top-20 left-1/2 -translate-x-1/2 w-[1200px] p-6
                  bg-gradient-to-br from-white via-gray-100 to-white
                  backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30
                  grid grid-cols-4 gap-5 z-50`}
                >
                  {services.map((s, idx) => {
                    const Icon = s.icon;
                    return (
                      <motion.div
                        key={s.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={`/services/${s.id}`}
                          className={`group relative flex flex-col gap-2 p-5 rounded-3xl
             bg-white hover:bg-gray-50 hover:shadow-2xl hover:scale-105
             transition-transform duration-300 font-bold
             border-b-6 border-transparent hover:border-indigo-500`}
                        >
                          <motion.div
                            className={`w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow`}
                            whileHover={{ scale: 1.3, rotate: 15 }}
                          >
                            <Icon size={24} />
                          </motion.div>

                          <div>
                            <h4 className="text-sm font-bold text-gray-800 group-hover:text-gray-900">
                              {s.title}
                            </h4>
                            <p className="text-xs font-bold text-gray-500 mt-1">
                              {s.description.split(".")[0]}.
                            </p>
                          </div>

                          <ul className="mt-2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1">
                            {s.features.map((f, i) => (
                              <li key={i}>✅ {f}</li>
                            ))}
                          </ul>

                          <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-bold text-gray-700">
                            → Explore
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          {["About", "Portfolio", "Contact"].map((item) => (
            <div key={item} className="relative group">
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-sm text-gray-600 font-bold px-2 py-1 hover:text-gray-800 transition"
              >
                {item}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden sm:inline-block px-5 py-2 bg-gray-800 text-white text-sm font-bold rounded-full shadow hover:shadow-md hover:scale-105 transition hover:bg-gray-900"
        >
          Get Started
        </Link>

        <button
          className="sm:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`sm:hidden fixed top-20 left-1/2 -translate-x-1/2 w-[90%] 
                        bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200
                        backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-6 flex flex-col gap-4 z-40 font-bold max-h-[80vh] overflow-y-auto`}
          >
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-gray-800">Services</h4>
              {services.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className={`flex flex-col gap-2 p-3 rounded-xl bg-white/40 hover:scale-105 hover:shadow-md transition-transform duration-300 font-bold hover:bg-white/60 relative group`}
                  >
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">{s.title}</p>
                      <p className="text-xs font-bold text-gray-600">
                        {s.description.split(".")[0]}.
                      </p>
                    </div>
                    <ul className="mt-1 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-1">
                      {s.features.map((f, i) => (
                        <li key={i}>✅ {f}</li>
                      ))}
                    </ul>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-bold text-gray-700">
                      → Explore
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-2 mt-4">
              {["About", "Portfolio", "Contact"].map((item) => (
                <div key={item} className="relative group">
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-800 text-sm font-bold hover:text-gray-900 transition px-2 py-1"
                  >
                    {item}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-4 px-5 py-2 bg-gray-800 text-white text-sm font-bold rounded-full shadow hover:shadow-md hover:scale-105 transition hover:bg-gray-900 text-center"
            >
              Get Started
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
