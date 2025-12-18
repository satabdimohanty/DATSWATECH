"use client";

import Hero from "./hero";
import FooterSection from "@/components/footer-section";
import ErpAccordionWithImage from "./erp-accodian";
import ErpSuccessStories from "./erp-success";
import SolutionsGrid from "./soulution-grid";
import ERPCards from "./erp-cards";

export default function DataPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] flex flex-col">
      {/* Hero Section */}
      <Hero />
      <ErpAccordionWithImage />
      <ErpSuccessStories />
      <SolutionsGrid />
      <ERPCards />
      <section className="ezy__cta6 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-white">
        <div className="container px-4 mx-auto">
          <div className="bg-[#303446] rounded-3xl overflow-hidden max-w-8xl mx-auto">
            <div className="grid grid-cols-12 items-center">
              {/* Left text */}
              <div className="col-span-12 lg:col-span-7">
                <div className="py-12 px-6 sm:px-12">
                  <h2 className="text-2xl md:text-[35px] leading-none font-bold mb-6">
                    Streamline Your Business with Modern ERP
                  </h2>
                  <p className="text-lg opacity-75 mb-12">
                    Unify finance, operations, supply chain, and project
                    management with our all-in-one ERP platform. Improve
                    efficiency, optimize resources, and drive business growth.
                  </p>
                  <a
                    href="#contact-us"
                    className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-8 py-4 rounded-lg"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="col-span-12 lg:col-span-5 text-end">
                <div className="flex justify-end">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/cta/cta_6.png"
                    alt="Data Analytics"
                    className="rounded-tl-[50%] rounded-tr-[30%] w-full lg:rounded-tr-none lg:rounded-bl-[40%] lg:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
}
