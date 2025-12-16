"use client";

import Hero from "./hero";
import FooterSection from "@/components/footer-section";
import ErpAccordionWithImage from "./erp-accodian";
import ErpSuccessStories from "./erp-success";

export default function DataPage() {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F3] flex flex-col">
      {/* Hero Section */}
      <Hero />
      <ErpAccordionWithImage />
          <ErpSuccessStories />
      <FooterSection />
    </div>
  );
}
