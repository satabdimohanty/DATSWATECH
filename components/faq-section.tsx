"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What services does DATSWATECH provide?",
    answer:
      "DATSWATECH offers comprehensive IT services including Data Solutions & Analytics, ERP System Implementation, AI Automation, Web Development, Mobile App Development, and IT Consulting. We specialize in digital transformation for businesses of all sizes.",
  },
  {
    question: "How does your ERP implementation process work?",
    answer:
      "Our ERP implementation follows a proven methodology: Discovery & Analysis, Solution Design, Development & Customization, Data Migration, Testing, Training, and Go-Live Support. We ensure minimal disruption to your operations throughout the process.",
  },
  {
    question: "What AI automation solutions do you offer?",
    answer:
      "We offer intelligent chatbots, process automation, predictive analytics, document processing, and custom ML models. Our AI solutions are designed to reduce manual work, improve accuracy, and provide actionable insights for your business.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "We work with businesses of all sizes - from startups to large enterprises. Our solutions are scalable and can be tailored to fit your budget and requirements. We offer flexible engagement models including project-based, retainer, and dedicated team options.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern tech stacks including React, Next.js, Node.js, Python, AWS, Azure, TensorFlow, and various ERP platforms like SAP, Oracle, and Microsoft Dynamics. We choose the best technology based on your specific needs.",
  },
  {
    question: "How do I get started with DATSWATECH?",
    answer:
      "Getting started is simple! Book a free consultation through our website. We'll discuss your requirements, analyze your current systems, and propose a tailored solution with clear timelines and transparent pricing.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Learn more about our services, process,
            <br className="hidden md:block" />
            and how we can help transform your business.
          </div>
        </div>

        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
