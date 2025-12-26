"use client";

import React from "react";
import { ArrowRight, Send } from "lucide-react";

export default function AiHero() {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Gradient Background: Gray to Black */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Transform Your Business with AI-Powered Solutions
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            Leverage cutting-edge artificial intelligence to automate processes, gain actionable insights, and enhance customer experiences across all channels.
          </p>

          <div className="flex gap-4 mt-4 flex-wrap">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-6 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Chatbot (Wider) */}
        <div className="flex-1 lg:flex-[1.2] flex justify-center lg:justify-end">
          <div className="w-full max-w-xl bg-gray-900 rounded-3xl shadow-xl p-6 flex flex-col gap-4">
            {/* Chat messages */}
            <div className="flex flex-col gap-3">
              <div className="self-start bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl max-w-xs">
                Hello! How can I help you today?
              </div>
              <div className="self-end bg-blue-600 text-white px-4 py-2 rounded-2xl max-w-xs">
                I want to learn about AI solutions.
              </div>
              <div className="self-start bg-gray-700 text-gray-100 px-4 py-2 rounded-2xl max-w-xs">
                Sure! We provide enterprise-grade AI solutions to automate workflows, analyze data, and improve decision-making.
              </div>
            </div>

            {/* Input area */}
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-2xl focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-2xl hover:bg-blue-700 transition">
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
