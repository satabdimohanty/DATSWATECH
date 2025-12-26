"use client";

import type React from "react";
import Navbar from "@/components/nav-bar";
import AboutTimeline from "./about-timeline";
import Link from "next/link";
import FooterSection from "@/components/footer-section";
import MeasurableImpact from "./measurable-impact";
import ConsultingApproach from "./appraoch";
import MilestonesSection from "./milestone";

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

export default function AboutPage() {
  const team = [
    {
      name: "Arjun Mehta",
      role: "Founder & CEO",
      bio: "15+ years in enterprise software with experience at Microsoft and Infosys.",
      image: "/team-member-ceo-professional-portrait.jpg",
    },
    {
      name: "Sneha Rao",
      role: "CTO",
      bio: "Former tech lead at Google with expertise in AI and distributed systems.",
      image: "/team-member-cto-professional-portrait.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Head of Data",
      bio: "Data architect with 12 years experience building analytics platforms.",
      image: "/team-member-data-professional-portrait.jpg",
    },
    {
      name: "Ananya Sharma",
      role: "Head of Design",
      bio: "Award-winning designer passionate about user-centric digital experiences.",
      image: "/team-member-design-professional-portrait.jpg",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            stroke="#37322F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Client Success",
      description:
        "Your success is our success. We measure ourselves by your outcomes.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="#37322F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description: "Clear communication and honest partnerships from day one.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            stroke="#37322F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            stroke="#37322F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description:
        "We deliver nothing less than exceptional quality in every project.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            stroke="#37322F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start">
          {/* Vertical lines */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <Navbar />
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
                  <circle
                    cx="7"
                    cy="7"
                    r="5"
                    stroke="#37322F"
                    strokeWidth="1.5"
                  />
                </svg>
              }
              text="About Us"
            />
            <h1 className="mt-6 max-w-[700px] text-center text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif">
              Building the future of enterprise technology
            </h1>
            <p className="mt-6 max-w-[560px] text-center text-[rgba(55,50,47,0.80)] text-base sm:text-lg font-medium leading-7 font-sans">
              We are a passionate team of technologists, strategists, and
              innovators dedicated to transforming businesses through
              intelligent technology solutions.
            </p>
          </div>
          <AboutTimeline />
          <MeasurableImpact />
          <ConsultingApproach />
          {/* Story Section */}
          <div className="w-full py-20 sm:py-24 md:py-28 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                {/* Text Content */}
                <div className="flex flex-col gap-8 justify-between h-full">
                  <div>
                    <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight font-sans relative">
                      Our Story
                      <span className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"></span>
                    </h2>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-6 text-gray-700 text-base sm:text-lg md:text-lg leading-7 list-disc list-inside flex-1 flex flex-col justify-center">
                    <li className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                      DATSWATECH was founded in 2020 with a mission to make
                      enterprise-grade technology accessible to businesses of
                      all sizes.
                    </li>
                    <li className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                      Our founders, having worked at leading tech companies,
                      brought together expertise in data engineering, enterprise
                      software, and AI to create practical solutions.
                    </li>
                    <li className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                      We have helped over 50 businesses transform operations,
                      from startups scaling efficiently to enterprises
                      modernizing digitally.
                    </li>
                    <li className="bg-white p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition">
                      Our commitment to innovation, quality, and client success
                      drives every project we undertake at DATSWATECH.
                    </li>
                  </ul>
                </div>

                {/* Full Height Image */}
                <div className="relative w-full h-full flex justify-center items-center">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-lg">
                    <img
                      src="/images/about/team.avif"
                      alt="DATSWATECH Team"
                      className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    {/* Floating badge */}
                    <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl shadow-md text-gray-900 font-medium text-sm">
                      DATSWATECH Team
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Leaders / Clients Section */}
          <section className="w-full py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
              <h2 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                Trusted by Leading Brands
              </h2>

              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center w-full">
                {[
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                    alt: "Google",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                    alt: "Microsoft",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
                    alt: "Netflix",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                    alt: "Amazon",
                  },
                  {
                    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                    alt: "Apple",
                  },
                ].map((logo, idx) => (
                  <li key={idx} className="flex justify-center">
                    <figure className="w-32 h-32 flex items-center justify-center bg-white/70 rounded-xl shadow-md hover:shadow-lg transition p-4">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Values Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 bg-blue-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center bg-white/30 rounded-full px-4 py-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M7 1V13M1 7H13"
                      stroke="#37322F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-[#37322F] font-medium uppercase text-sm tracking-wide">
                    Our Values
                  </span>
                </div>
                <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-sans tracking-tight">
                  What drives us
                </h2>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
                  At DATSWATECH, our values shape how we work, innovate, and
                  deliver results for our clients.
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1
                     border-t-2 border-l-2 border-r-2 border-blue-300
                     bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100"
                  >
                    {/* Icon with gradient background */}
                    <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 text-white text-2xl shadow-md">
                      {value.icon}
                    </div>
                    <h3 className="text-[#1E293B] text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-6">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-100 to-gray-700">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
              {/* Section Header */}
              <div className="text-center mb-12">
                <h2 className="text-blue-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Meet the Leadership
                </h2>
                <p className="mt-4 max-w-[600px] mx-auto text-blue-800 text-base leading-7">
                  Experienced professionals passionate about technology and
                  client success.
                </p>
              </div>

              {/* Team Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-2xl border-l-4 border-t-4 border-r-4 border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 text-center flex flex-col justify-between"
                  >
                    <h3 className="text-blue-900 text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-blue-700 text-sm font-medium mt-1">
                      {member.role}
                    </p>
                    <p className="text-blue-800 text-sm leading-6 mt-4">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <MilestonesSection />

          {/* CTA Section */}
          <div className="w-full py-16 sm:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-center">
              <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                Join us on this journey
              </h2>
              <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                Whether you're looking to transform your business or join our
                team, we'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 px-8 bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full items-center justify-center hover:bg-[#2A2520] transition-colors"
                >
                  <span className="text-white text-[15px] font-medium font-sans">
                    Work with us
                  </span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex h-12 px-8 bg-white border border-[rgba(55,50,47,0.20)] rounded-full items-center justify-center hover:bg-[rgba(55,50,47,0.02)] transition-colors"
                >
                  <span className="text-[#37322F] text-[15px] font-medium font-sans">
                    View our work
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    </div>
  );
}
