"use client"

import type React from "react"

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
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: "Your success is our success. We measure ourselves by your outcomes.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      description: "We deliver nothing less than exceptional quality in every project.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  ]

  const milestones = [
    {
      year: "2020",
      title: "Founded",
      description: "DATSWATECH was born with a vision to democratize enterprise tech.",
    },
    {
      year: "2021",
      title: "First Enterprise Client",
      description: "Delivered our first major ERP implementation project.",
    },
    { year: "2022", title: "AI Division", description: "Launched dedicated AI and automation practice." },
    { year: "2023", title: "50+ Projects", description: "Reached milestone of 50 successful project deliveries." },
    { year: "2024", title: "Regional Expansion", description: "Expanded operations across South Asia." },
    { year: "2025", title: "Innovation Lab", description: "Opened R&D center for emerging technologies." },
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
                    <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[13px] font-semibold leading-[14px] font-sans">
                      About
                    </div>
                  </Link>
                  <Link href="/portfolio" className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#37322F] transition-colors">
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
                  <circle cx="7" cy="7" r="5" stroke="#37322F" strokeWidth="1.5" />
                </svg>
              }
              text="About Us"
            />
            <h1 className="mt-6 max-w-[700px] text-center text-[#37322F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight font-serif">
              Building the future of enterprise technology
            </h1>
            <p className="mt-6 max-w-[560px] text-center text-[rgba(55,50,47,0.80)] text-base sm:text-lg font-medium leading-7 font-sans">
              We are a passionate team of technologists, strategists, and innovators dedicated to transforming
              businesses through intelligent technology solutions.
            </p>
          </div>

          {/* Story Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                <div className="flex-1">
                  <h2 className="text-[#37322F] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight font-sans tracking-tight">
                    Our Story
                  </h2>
                  <div className="mt-6 space-y-4 text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                    <p>
                      DATSWATECH was founded in 2020 with a simple yet ambitious mission: to make enterprise-grade
                      technology accessible to businesses of all sizes. We saw a gap in the market where powerful tools
                      like ERP systems, advanced analytics, and AI automation were only available to large corporations
                      with massive budgets.
                    </p>
                    <p>
                      Our founders, having worked at leading tech giants, brought together their expertise in data
                      engineering, enterprise software, and artificial intelligence to create solutions that are both
                      powerful and practical.
                    </p>
                    <p>
                      Today, we have helped over 50 businesses transform their operations, from startups looking to
                      scale efficiently to established enterprises seeking digital modernization. Our commitment to
                      innovation, quality, and client success remains at the core of everything we do.
                    </p>
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08)] shadow-lg">
                    <img
                      src="/modern-tech-office-team-collaboration.jpg"
                      alt="DATSWATECH Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)] bg-[rgba(55,50,47,0.02)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="text-center mb-12">
                <Badge
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  }
                  text="Our Values"
                />
                <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                  What drives us
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-lg border border-[rgba(55,50,47,0.08)] hover:border-[rgba(55,50,47,0.20)] transition-colors"
                  >
                    <div className="w-12 h-12 bg-[rgba(55,50,47,0.05)] rounded-lg flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans mb-2">{value.title}</h3>
                    <p className="text-[rgba(55,50,47,0.70)] text-sm leading-6 font-sans">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="text-center mb-12">
                <Badge
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="5" r="3" stroke="#37322F" strokeWidth="1.5" />
                      <path d="M2 13c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="#37322F" strokeWidth="1.5" />
                    </svg>
                  }
                  text="Our Team"
                />
                <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                  Meet the leadership
                </h2>
                <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                  Experienced professionals passionate about technology and client success.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, i) => (
                  <div
                    key={i}
                    className="p-6 bg-white rounded-lg border border-[rgba(55,50,47,0.08)] hover:border-[rgba(55,50,47,0.20)] transition-colors text-center"
                  >
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-[#37322F] text-lg font-semibold font-sans">{member.name}</h3>
                    <p className="text-[rgba(55,50,47,0.60)] text-sm font-medium font-sans mt-1">{member.role}</p>
                    <p className="text-[rgba(55,50,47,0.70)] text-sm leading-6 font-sans mt-3">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Milestones Section */}
          <div className="w-full py-16 sm:py-20 md:py-24 border-b border-[rgba(55,50,47,0.12)] bg-[rgba(55,50,47,0.02)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
              <div className="text-center mb-12">
                <Badge
                  icon={
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1V13M1 7H13" stroke="#37322F" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  }
                  text="Our Journey"
                />
                <h2 className="mt-6 text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                  Key milestones
                </h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[rgba(55,50,47,0.12)] transform md:-translate-x-1/2"></div>

                <div className="space-y-8">
                  {milestones.map((milestone, i) => (
                    <div
                      key={i}
                      className={`relative flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                        <div className="bg-white p-6 rounded-lg border border-[rgba(55,50,47,0.08)]">
                          <div className="text-[rgba(55,50,47,0.50)] text-sm font-semibold font-sans">
                            {milestone.year}
                          </div>
                          <h3 className="text-[#37322F] text-lg font-semibold font-sans mt-1">{milestone.title}</h3>
                          <p className="text-[rgba(55,50,47,0.70)] text-sm leading-6 font-sans mt-2">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      {/* Timeline dot */}
                      <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-[#37322F] rounded-full transform -translate-x-1/2"></div>
                      <div className="flex-1 hidden md:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full py-16 sm:py-20 border-b border-[rgba(55,50,47,0.12)]">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 text-center">
              <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-sans tracking-tight">
                Join us on this journey
              </h2>
              <p className="mt-4 max-w-[500px] mx-auto text-[rgba(55,50,47,0.80)] text-base leading-7 font-sans">
                Whether you're looking to transform your business or join our team, we'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 px-8 bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full items-center justify-center hover:bg-[#2A2520] transition-colors"
                >
                  <span className="text-white text-[15px] font-medium font-sans">Work with us</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex h-12 px-8 bg-white border border-[rgba(55,50,47,0.20)] rounded-full items-center justify-center hover:bg-[rgba(55,50,47,0.02)] transition-colors"
                >
                  <span className="text-[#37322F] text-[15px] font-medium font-sans">View our work</span>
                </Link>
              </div>
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    </div>
  )
}
