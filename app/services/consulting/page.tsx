"use client";

import Hero from "./hero";
import FooterSection from "@/components/footer-section";
import OmnichannelAI from "./datswatech-ai";
import AIRevenueWorkforce from "./ai-revenue";
import WhyChooseUs from "./why-choose-us";
import ProductAccordion from "./product";
import HowWeHelpClients from "./how-we-help";
import Navbar from "@/components/nav-bar";

export default function DataPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <Hero />
      <HowWeHelpClients />
      <WhyChooseUs />
      <OmnichannelAI />
      <ProductAccordion />
      <AIRevenueWorkforce />
      <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#eff4fd] dark:bg-[#1c293a] rounded-3xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-12">
              {/* Image */}
              <div className="col-span-12 lg:col-span-6 bg-black bg-opacity-5 text-center p-4 flex items-center justify-center">
                <img
                  src="https://cdn.easyfrontend.com/pictures/cta/cta_8.png"
                  alt="Consultancy Illustration"
                  className="max-w-full h-auto"
                />
              </div>

              {/* Text Content */}
              <div className="col-span-12 lg:col-span-6 flex items-center">
                <div className="py-12 px-6 sm:px-12">
                  <h2 className="text-2xl md:text-[40px] font-bold leading-snug mb-6">
                    Partner with Us to Drive Business Success
                  </h2>
                  <p className="text-lg opacity-80 mb-12 lg:mr-12">
                    Our consultancy team provides tailored strategies, market
                    insights, and operational solutions to help your business
                    grow, optimize performance, and stay ahead of the
                    competition.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-7 py-3 min-w-[120px] bg-transparent border border-blue-600 text-blue-600 font-semibold hover:text-white hover:bg-blue-600 transition">
                      Learn More
                    </button>
                    <button className="px-7 py-3 min-w-[120px] bg-blue-600 border border-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                      Get a Quote
                    </button>
                  </div>
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
