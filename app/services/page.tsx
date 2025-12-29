"use client";

import type React from "react";
import Link from "next/link";
import { Plus, Circle, Hexagon, Check } from "lucide-react";
import Navbar from "@/components/nav-bar";
import FooterSection from "@/components/footer-section";
import Timeline from "./timeline";
import TechStack from "./techla";

import ProcessSteps from "./process-steps";
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-3 py-1 bg-white rounded-full flex items-center gap-2 border border-[#E0E0E0] shadow-sm">
      <div className="w-4 h-4 flex items-center justify-center">{icon}</div>
      <div className="text-[#37322F] text-xs font-semibold">{text}</div>
    </div>
  );
}

export default function ServicesPage() {
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
      image: "images/mobile/4.jpg",
      stats: [
        { value: "2x", label: "Faster Development" },
        { value: "99.9%", label: "App Stability" },
        { value: "5★", label: "User Ratings" },
      ],
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
      image: "/images/web/2.avif",
      stats: [
        { value: "Sub-2s", label: "Load Time" },
        { value: "100%", label: "Responsive" },
        { value: "SEO", label: "Optimized" },
      ],
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
      image: "/images/erp4.avif",
      stats: [
        { value: "10x", label: "Faster Insights" },
        { value: "99.9%", label: "Data Accuracy" },
        { value: "60%", label: "Cost Reduction" },
      ],
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
      image: "/images/erp.avif",
      stats: [
        { value: "40%", label: "Efficiency Gain" },
        { value: "50%", label: "Process Automation" },
        { value: "30%", label: "Cost Savings" },
      ],
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
      image: "/images/cloud/cloud.avif",
      stats: [
        { value: "99.9%", label: "Uptime" },
        { value: "40%", label: "Cost Reduction" },
        { value: "3x", label: "Scalability" },
      ],
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
      image: "/images/consultancy/business.avif",
      stats: [
        { value: "360°", label: "Assessment" },
        { value: "5yr", label: "Roadmap" },
        { value: "ROI", label: "Focused" },
      ],
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
      image: "/images/ai/2.avif",
      stats: [
        { value: "50+", label: "AI Use-Cases Delivered" },
        { value: "100%", label: "ROI-Focused" },
        { value: "Enterprise", label: "Scale-Ready" },
      ],
    },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "Understand client needs." },
    {
      step: "02",
      title: "Strategy",
      description: "Define roadmap & architecture.",
    },
    { step: "03", title: "Development", description: "Agile implementation." },
    { step: "04", title: "Deployment", description: "Launch and support." },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden text-[#37322F]">
      <Navbar />
      {/* Ultra-Advanced Hero Section */}
      <section className="w-full bg-white relative overflow-hidden py-32 px-4 sm:px-6 md:px-8 flex justify-center">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-gray-200/30 to-gray-100/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-300/20 to-orange-300/10 rounded-full blur-3xl pointer-events-none animate-blob"></div>
        <div className="absolute -top-20 -right-40 w-[400px] h-[400px] bg-gradient-to-bl from-yellow-300/15 to-orange-300/5 rounded-full blur-3xl pointer-events-none animate-blob animation-delay-2000"></div>

        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 relative z-10">
          {/* Left Side - Text & Badges */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            {/* Badge */}
            <Badge
              icon={<Plus className="w-4 h-4 stroke-[#37322F]" />}
              text="Our Services"
            />

            {/* Headline */}
            <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#37322F] leading-tight">
              Full-Spectrum IT Solutions
            </h1>

            {/* Description */}
            <p className="mt-4 text-[#37322F]/80 text-lg sm:text-xl leading-8 max-w-lg">
              From mobile apps to AI automation and cloud transformation, we
              provide end-to-end solutions that empower modern enterprises.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-[#37322F] to-[#2A2520] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform hover:shadow-2xl"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-[#37322F] text-[#37322F] font-semibold rounded-full shadow-sm hover:bg-[#F0F0F0] transition-colors"
              >
                Explore Services
              </Link>
            </div>

            {/* Service Badges (interactive) */}
            <div className="mt-12 flex flex-wrap gap-4">
              {services.slice(0, 6).map((service, idx) => (
                <div
                  key={service.id}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer"
                >
                  <Circle className="w-3 h-3 stroke-[#37322F]" />
                  <span className="text-sm font-medium text-[#37322F]">
                    {service.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Full Height Image with Floating Icons */}
          <div className="flex-1 relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/images/it.jpg" // replace with premium image
              alt="IT Solutions Illustration"
              className="w-full h-full object-cover"
            />

            {/* Floating icons over image */}
            <div className="absolute top-10 left-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
              <Plus className="w-5 h-5 stroke-yellow-500" />
            </div>
            <div className="absolute bottom-20 right-16 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
              <Hexagon className="w-6 h-6 stroke-orange-500" />
            </div>
          </div>
        </div>

        {/* Blob animation CSS */}
        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 10s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="w-full flex justify-center mt-16 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-7xl flex flex-col gap-16">
          {services.map((service, i) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="relative group w-full flex flex-col lg:flex-row items-start gap-8 p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transform transition-all hover:scale-105 overflow-hidden"
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-4">
                <Badge
                  icon={<Circle className="w-3 h-3 stroke-[#37322F]" />}
                  text={service.badge}
                />
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#37322F] group-hover:text-[#2A2520] transition-colors">
                  {service.title}
                </h2>
                <p className="text-[#37322F]/80 text-base leading-7">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {service.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#FFD700]/20 to-[#FF8C00]/20 rounded-full text-sm font-medium hover:from-[#FFD700]/40 hover:to-[#FF8C00]/40 transition-all"
                    >
                      <Check className="w-4 h-4 stroke-green-500" /> {feat}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="mt-4 flex flex-wrap gap-3">
                  {service.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#FF8C00]/20 rounded-full flex flex-col items-center text-sm font-semibold hover:from-[#FFD700]/40 hover:to-[#FF8C00]/40 transition-all"
                    >
                      <span className="text-lg text-[#37322F] font-bold">
                        {stat.value}
                      </span>
                      <span className="text-xs text-[#37322F]/70">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image always full height on the right */}
              <div className="flex-1 lg:w-1/2 h-full relative">
                <div className="h-full rounded-3xl overflow-hidden shadow-xl border border-gray-200 group-hover:scale-105 transform transition-all relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>

              {/* Bottom Black-Gray Border */}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-gray-800 to-gray-500 rounded-b-3xl"></div>
            </Link>
          ))}
        </div>
      </section>
      <TechStack />

      <ProcessSteps />

      {/* Timeline Section */}
      <Timeline />

      {/* CTA Section */}
      <section className="w-full py-32 px-4 sm:px-6 md:px-8 text-center relative">
        <div className="bg-white rounded-3xl shadow-xl p-16 flex flex-col items-center">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#37322F]">
            Ready to transform your business?
          </h2>
          <p className="mt-6 text-[#37322F]/80 max-w-xl text-lg leading-8">
            Let’s discuss how our services can accelerate your growth.
          </p>
          <Link
            href="/contact"
            className="mt-12 inline-block px-10 py-4 bg-[#37322F] text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
