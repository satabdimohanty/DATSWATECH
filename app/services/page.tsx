"use client";

import type React from "react";

import Link from "next/link";
import FooterSection from "@/components/footer-section";

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">
        {icon}
      </div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const services = [
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
      image: "/data-analytics-infrastructure-visualization.jpg",
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
      image: "/erp-system-modules-integration-enterprise.jpg",
      stats: [
        { value: "40%", label: "Efficiency Gain" },
        { value: "50%", label: "Process Automation" },
        { value: "30%", label: "Cost Savings" },
      ],
    },
    {
      id: "ai",
      badge: "Innovation",
      title: "AI Automation & Intelligence",
      description:
        "Harness the power of artificial intelligence to automate processes and gain competitive advantage. From intelligent chatbots to predictive models, we build AI solutions that transform your business.",
      features: [
        "Intelligent Chatbots",
        "Process Automation (RPA)",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Maintenance",
      ],
      image: "/ai-automation-neural-network-visualization.jpg",
      stats: [
        { value: "80%", label: "Task Automation" },
        { value: "24/7", label: "Availability" },
        { value: "95%", label: "Accuracy Rate" },
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
      image: "/modern-web-development-code-interface.jpg",
      stats: [
        { value: "Sub-2s", label: "Load Time" },
        { value: "100%", label: "Responsive" },
        { value: "SEO", label: "Optimized" },
      ],
    },
    {
      id: "app",
      badge: "Mobile",
      title: "App Development",
      description:
        "Build native and cross-platform mobile applications that users love. We create intuitive, feature-rich apps for iOS and Android that extend your business reach and enhance customer engagement.",
      features: [
        "iOS Native Development",
        "Android Native Development",
        "Cross-platform (React Native)",
        "UI/UX Design",
        "App Store Optimization",
        "Maintenance & Updates",
      ],
      image: "/mobile-app-development-devices-showcase.jpg",
      stats: [
        { value: "4.8+", label: "App Rating" },
        { value: "1M+", label: "Downloads" },
        { value: "60%", label: "User Retention" },
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
      image: "/it-consulting-strategy-planning-session.jpg",
      stats: [
        { value: "360°", label: "Assessment" },
        { value: "5yr", label: "Roadmap" },
        { value: "ROI", label: "Focused" },
      ],
    },
  ];

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
                  <Link
                    href="/services"
                    className="flex justify-start items-center"
                  >
                    <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-semibold leading-[14px] font-sans">
                      Services
                    </div>
                  </Link>
                  <Link
                    href="/about"
                    className="flex justify-start items-center"
                  >
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      About
                    </div>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex justify-start items-center"
                  >
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
                      Portfolio
                    </div>
                  </Link>
                  <Link
                    href="/contact"
                    className="flex justify-start items-center"
                  >
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
              text="Our Services"
            />
            <h1 className="mt-6 max-w-[700px] text-center text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif">
              Full-spectrum IT solutions for modern enterprises
            </h1>
            <p className="mt-6 max-w-[560px] text-center text-[rgba(55,50,47,0.80)] text-base sm:text-lg font-medium leading-7 font-sans">
              From data infrastructure to AI automation, we deliver end-to-end
              technology solutions that drive growth and operational excellence.
            </p>
          </div>

          {/* Services List */}
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)] flex flex-col lg:flex-row items-center gap-8 lg:gap-12 cursor-pointer transition-all hover:scale-[1.01] hover:bg-[rgba(55,50,47,0.03)] ${
                index % 2 === 1
                  ? "lg:flex-row-reverse bg-[rgba(55,50,47,0.02)]"
                  : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 flex flex-col gap-6">
                <Badge
                  icon={
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6"
                        cy="6"
                        r="5"
                        stroke="#37322F"
                        strokeWidth="1.5"
                      />
                    </svg>
                  }
                  text={service.badge}
                />
                <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-sans tracking-tight">
                  {service.title}
                </h2>
                <p className="text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] shadow-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Link>
          ))}

          {/* Process Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
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
                        d="M7 1L12 4V10L7 13L2 10V4L7 1Z"
                        stroke="#37322F"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  text="Our Process"
                />
                <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                  How we deliver excellence
                </h2>
                <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                  Our proven methodology ensures successful project delivery
                  every time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery",
                    description:
                      "Deep dive into your business needs, challenges, and goals.",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    description:
                      "Craft a tailored solution architecture and roadmap.",
                  },
                  {
                    step: "03",
                    title: "Development",
                    description:
                      "Agile implementation with continuous feedback loops.",
                  },
                  {
                    step: "04",
                    title: "Deployment",
                    description:
                      "Smooth launch with training and ongoing support.",
                  },
                ].map((phase, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-lg border border-[rgba(55,50,47,0.08)] hover:border-[rgba(55,50,47,0.20)] transition-colors"
                  >
                    <div className="text-[rgba(55,50,47,0.30)] text-4xl font-semibold font-sans mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-[rgba(55,50,47,0.70)] text-sm leading-6 font-sans">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full py-16 sm:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-center">
              <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                Ready to get started?
              </h2>
              <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                Let's discuss how our services can help transform your business.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex h-12 px-8 bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full items-center justify-center hover:bg-[#2A2520] transition-colors"
              >
                <span className="text-white text-[15px] font-medium font-sans">
                  Book a consultation
                </span>
              </Link>
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}
