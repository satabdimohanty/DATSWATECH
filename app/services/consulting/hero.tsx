"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-blue-900 text-white py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between">
        
        {/* Left Text */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Datswatech: Empowering Businesses to Succeed
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            We provide strategic consulting solutions that drive growth, innovation, and measurable results.
          </p>
          <a
            href="#services"
            className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Explore Our Services
          </a>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/images/erp1.avif" // direct reference from public folder
            alt="Consulting Illustration"
            width={500}
            height={400}
            className="transform transition duration-1000 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
