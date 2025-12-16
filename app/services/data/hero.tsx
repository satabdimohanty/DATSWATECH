// components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  const features = [
    "Global Network Of Experts",
    "Reliable Insights",
    "Easy-to-read Reports",
    "Commitment to Innovation",
    "Tailored Analytics Solutions",
  ];

  return (
    <section className="relative w-full h-[550px] sm:h-[650px] md:h-[750px] lg:h-[800px]">
      {/* Background Images */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <div className="block sm:hidden w-full h-full relative">
          <Image
            src="/images/data-hero-mobile.avif"
            alt="Data Analytics Hero Mobile"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        {/* Tablet */}
        <div className="hidden sm:block md:hidden w-full h-full relative">
          <Image
            src="/images/data-hero-tablet.avif"
            alt="Data Analytics Hero Tablet"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block w-full h-full relative">
          <Image
            src="/images/data-hero.avif"
            alt="Data Analytics Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-center md:text-left text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6">
            Data Analytics Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200">
            Unlock the full potential of your data with Digital is Simple. Gain actionable insights, make informed decisions, and stay ahead in the competitive world.
          </p>

          {/* Features Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
                <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 animate-pulse" />
                <span className="text-gray-100">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="https://digitalissimple.com/contact-us/?utm_source=chatgpt.com"
            className="inline-block bg-blue-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105"
          >
            Connect with Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
