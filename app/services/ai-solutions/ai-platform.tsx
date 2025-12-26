"use client";
import Image from "next/image";
import React from "react";

export default function AIPlatformHero() {
  const platform = {
    title: "AI App & Website Builder",
    desc: "Build Android/iOS apps and SEO-ready websites faster using AI. Simply describe what you want to create, and Appy Pie’s AI-powered tools transform your idea into a fully functional product ready to customize and publish.",
    img: "/images/ai/app.png",
    link: "https://www.appypie.com/ai-website-builder",
    cta: "Create with AI →",
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-100 via-white to-gray-50 py-32 overflow-hidden">
      {/* Floating Background Gradients */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-300/30 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-purple-300/30 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
          AI-Powered App & Website Creation
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-lg md:text-xl leading-relaxed">
          Build apps and websites faster using AI. Simply describe what you want to create, and Appy Pie’s AI-powered tools transform your idea into a fully functional product ready to customize and publish.
        </p>

        {/* Hero Card */}
        <div className="relative max-w-5xl mx-auto rounded-3xl shadow-2xl overflow-hidden bg-white/30 backdrop-blur-lg hover:shadow-3xl transition">
          {/* Image */}
          <div className="relative w-full h-[550px] md:h-[650px]">
            <Image
              src={platform.img}
              alt={platform.title}
              fill
              className="object-cover rounded-t-3xl"
            />
          </div>

          {/* Text Content Below Image */}
          <div className="p-10 flex flex-col items-center text-center animate-fadeInUp">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 drop-shadow-lg">
              {platform.title}
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-6 max-w-2xl leading-relaxed">
              {platform.desc}
            </p>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-4 px-10 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              {platform.cta}
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-700 mt-20 max-w-2xl mx-auto text-lg">
          Best for users who want speed, automation, and instant results powered by AI.
        </p>
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
