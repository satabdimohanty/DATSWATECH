"use client";
import React from "react";
import Image from "next/image";

const outcomes = [
  "You get a clear app development plan with no hidden surprises.",
  "You launch faster through structured and parallel workflows.",
  "You start with a strong technical base that supports scale.",
  "You build with security and compliance in place from the first sprint.",
  "You gain predictable progress through disciplined execution.",
  "You keep improving your app with continuous optimization.",
];

export default function MobileAppOutcome() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-gray-100 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-16 p-6 md:p-12 relative">
          {/* Left Content with enhancements */}
          <div className="lg:w-6/12 relative z-10 flex flex-col justify-center">
            <div className="bg-gradient-to-r from-indigo-600/10 via-indigo-400/5 to-indigo-600/10 p-6 rounded-2xl mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug">
                Why <span className="text-indigo-600">DATSWATECH</span>’s Mobile
                App Process{" "}
                <span className="text-indigo-500">
                  Delivers Better Outcomes
                </span>
              </h2>
            </div>

            <ul className="space-y-4 mb-6">
              {outcomes.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-1 bg-indigo-600 rounded-full mt-1 transition-all group-hover:h-6"></div>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-base sm:text-lg mb-6">
              This process helps you cut risk, speed up delivery, improve
              quality, and turn your mobile app into a long-term business asset.
            </p>
          </div>

          {/* Right Image - Bigger */}
          <div className="lg:w-6/12 flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-[32rem] lg:w-[36rem] lg:h-[40rem]">
              <Image
                src="/images/mobile/outcome.png"
                alt="Better Outcomes"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full border-4 border-indigo-600 rounded-3xl animate-pulse-slow pointer-events-none"></div>
            </div>
          </div>

          {/* Floating gradient shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
