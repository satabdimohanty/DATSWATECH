"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import FooterSection from "@/components/footer-section"

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Data", "ERP", "AI", "Web", "App"]

  const projects = [
    {
      title: "FinServe Analytics Platform",
      category: "Data",
      description:
        "Built a comprehensive data analytics platform for a leading financial services company, enabling real-time insights across 50+ data sources.",
      image: "/portfolio-finserve-analytics-dashboard.jpg",
      metrics: ["10x Faster Reporting", "500TB Data Processed", "99.9% Uptime"],
      tags: ["Data Warehouse", "BI Dashboard", "Real-time Analytics"],
    },
    {
      title: "ManufactureX ERP",
      category: "ERP",
      description:
        "Custom ERP implementation for a manufacturing conglomerate, integrating inventory, production, finance, and HR modules.",
      image: "/portfolio-manufacturex-erp-system.jpg",
      metrics: ["40% Efficiency Gain", "30% Cost Reduction", "12 Modules"],
      tags: ["Custom ERP", "SAP Integration", "Process Automation"],
    },
    {
      title: "RetailHub AI Assistant",
      category: "AI",
      description:
        "Developed an AI-powered customer service chatbot handling 80% of queries automatically with natural language understanding.",
      image: "/portfolio-retailhub-ai-chatbot.jpg",
      metrics: ["80% Automation", "24/7 Support", "95% Accuracy"],
      tags: ["NLP", "Chatbot", "Machine Learning"],
    },
    {
      title: "HealthCare Portal",
      category: "Web",
      description:
        "Built a patient management portal for a hospital chain with appointment scheduling, telemedicine, and health records access.",
      image: "/portfolio-healthcare-portal-web.jpg",
      metrics: ["50K+ Users", "Sub-2s Load", "HIPAA Compliant"],
      tags: ["Next.js", "Telemedicine", "Patient Portal"],
    },
    {
      title: "LogiTrack Mobile",
      category: "App",
      description:
        "Cross-platform logistics tracking app for fleet management with real-time GPS tracking and route optimization.",
      image: "/portfolio-logitrack-mobile-app.jpg",
      metrics: ["1M+ Downloads", "4.8 Rating", "Real-time GPS"],
      tags: ["React Native", "GPS Tracking", "Fleet Management"],
    },
    {
      title: "InsureTech Claims AI",
      category: "AI",
      description:
        "Automated claims processing system using computer vision and ML to reduce claim processing time by 70%.",
      image: "/portfolio-insuretech-claims-ai.jpg",
      metrics: ["70% Faster Claims", "90% Accuracy", "₹50Cr Processed"],
      tags: ["Computer Vision", "Claims Automation", "Document AI"],
    },
    {
      title: "EduLearn Platform",
      category: "Web",
      description:
        "E-learning platform with adaptive learning algorithms, video streaming, and progress tracking for 100K+ students.",
      image: "/portfolio-edulearn-platform-web.jpg",
      metrics: ["100K+ Students", "5000+ Courses", "85% Completion"],
      tags: ["LMS", "Video Streaming", "Adaptive Learning"],
    },
    {
      title: "Supply Chain Analytics",
      category: "Data",
      description:
        "End-to-end supply chain visibility platform with predictive demand forecasting and inventory optimization.",
      image: "/portfolio-supply-chain-analytics.jpg",
      metrics: ["25% Inventory Reduction", "Predictive ML", "Global Visibility"],
      tags: ["Supply Chain", "Forecasting", "Optimization"],
    },
  ]

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  const industries = [
    { name: "Financial Services", count: 12 },
    { name: "Healthcare", count: 8 },
    { name: "Manufacturing", count: 10 },
    { name: "Retail & E-commerce", count: 15 },
    { name: "Logistics", count: 6 },
    { name: "Education", count: 5 },
  ]

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start">
          {/* Vertical lines */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Navigation */}
          <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0 relative">
            <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

            <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[780px] lg:w-[780px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
              <div className="flex justify-center items-center">
                <Link href="/" className="flex justify-start items-center">
                  <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                    DATSWATECH
                  </div>
                </Link>
                <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                  <Link href="/services" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Services
                    </div>
                  </Link>
                  <Link href="/about" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      About
                    </div>
                  </Link>
                  <Link href="/portfolio" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-semibold leading-[14px] font-sans">
                      Portfolio
                    </div>
                  </Link>
                  <Link href="/contact" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Contact
                    </div>
                  </Link>
                </div>
              </div>
              <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center"
                >
                  <div className="flex flex-col justify-center text-white text-xs md:text-[13px] font-medium leading-5 font-sans">
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(55,50,47,0.12)]">
            <Badge
              icon={
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="10" height="10" rx="2" stroke="#37322F" strokeWidth="1.5" />
                </svg>
              }
              text="Our Work"
            />
            <h1 className="mt-6 max-w-[700px] text-center text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif">
              Projects that drive real results
            </h1>
            <p className="mt-6 max-w-[560px] text-center text-[rgba(55,50,47,0.80)] text-base sm:text-lg font-medium leading-7 font-sans">
              Explore our portfolio of successful implementations across data, ERP, AI, web, and mobile platforms.
            </p>

            {/* Stats */}
            <div className="mt-12 w-full max-w-[700px] grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "50+", label: "Projects" },
                { number: "30+", label: "Clients" },
                { number: "6", label: "Industries" },
                { number: "98%", label: "Success Rate" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#37322F] text-3xl sm:text-4xl font-semibold font-sans">{stat.number}</div>
                  <div className="text-[rgba(55,50,47,0.60)] text-sm font-medium font-sans mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(55,50,47,0.12)]">
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter
                      ? "bg-[#37322F] text-white"
                      : "bg-white border border-[rgba(55,50,47,0.15)] text-[#49423D] hover:border-[rgba(55,50,47,0.30)]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[rgba(55,50,47,0.12)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg border border-[rgba(55,50,47,0.08)] overflow-hidden hover:border-[rgba(55,50,47,0.20)] transition-all hover:shadow-lg group"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-[rgba(55,50,47,0.05)] text-[#49423D] text-xs font-medium rounded">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-[#37322F] text-xl font-semibold font-sans mb-2">{project.title}</h3>
                    <p className="text-[rgba(55,50,47,0.70)] text-sm leading-6 font-sans mb-4">{project.description}</p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.metrics.map((metric, j) => (
                        <span key={j} className="text-[#37322F] text-sm font-semibold font-sans">
                          {metric}
                        </span>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-[rgba(55,50,47,0.03)] text-[rgba(55,50,47,0.60)] text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)] bg-[rgba(55,50,47,0.02)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="text-center mb-12">
                <Badge
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  }
                  text="Industries"
                />
                <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                  Sectors we serve
                </h2>
                <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                  Deep domain expertise across multiple industries.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-lg border border-[rgba(55,50,47,0.08)] hover:border-[rgba(55,50,47,0.20)] transition-colors flex justify-between items-center"
                  >
                    <span className="text-[#37322F] text-base font-medium font-sans">{industry.name}</span>
                    <span className="text-[rgba(55,50,47,0.50)] text-sm font-medium font-sans">
                      {industry.count} projects
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full py-16 sm:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-center">
              <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                Let's build something great together
              </h2>
              <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                Ready to start your digital transformation journey? Let's discuss your project.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 px-8 bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full items-center justify-center hover:bg-[#2A2520] transition-colors"
              >
                <span className="text-white text-[15px] font-medium font-sans">Start a project</span>
              </Link>
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    </div>
  )
}
