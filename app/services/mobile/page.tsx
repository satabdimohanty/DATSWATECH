"use client";
import FooterSection from "@/components/footer-section";
import TechPhilosophy from "./tech-pholisophy";
import MobileAppProcess from "./mobile-app-process";
import AdvancedFeatures from "./advanced-feature";
import MobileTechSection from "./tech-section";
import ServicesSection from "./service-section";
import MobileAppOutcome from "./mobile-app-outcome";

export default function Page() {
  return (
    <>
      <section className="py-28 px-6 lg:px-20 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-700 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left text-white relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Mobile App Development
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-10">
              We build high-performance mobile applications for iOS, Android,
              and cross-platform frameworks to deliver amazing user experiences.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Right Tech Tags with running border */}
          <div className="lg:w-1/2 relative flex flex-col items-center lg:items-end gap-6 z-10">
            <div className="relative p-6 rounded-3xl overflow-hidden">
              {/* Animated running border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent animate-borderMove pointer-events-none"></div>

              {/* Layered floating tags */}
              <div className="flex flex-col gap-4 relative z-10">
                <div className="bg-gray-700/40 text-white px-5 py-2 rounded-full font-semibold backdrop-blur-md shadow-lg">
                  Cross Platform
                </div>
                <div className="flex gap-4">
                  <div className="bg-gray-700/40 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-md shadow-md">
                    iOS App
                  </div>
                  <div className="bg-gray-700/40 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-md shadow-md">
                    Flutter
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-gray-700/40 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-md shadow-md">
                    React Native
                  </div>
                  <div className="bg-gray-700/40 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-md shadow-md">
                    Android App
                  </div>
                  <div className="bg-gray-700/40 text-white px-4 py-2 rounded-full font-semibold backdrop-blur-md shadow-md">
                    Hybrid App
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating background shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-600/20 rounded-full filter blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-500/20 rounded-full filter blur-2xl -z-10"></div>

        {/* Animated border CSS */}
        <style jsx>{`
          @keyframes borderMove {
            0% {
              border-image-source: linear-gradient(
                90deg,
                #6366f1,
                #ec4899,
                #facc15
              );
              border-image-slice: 1;
            }
            50% {
              border-image-source: linear-gradient(
                270deg,
                #f43f5e,
                #22d3ee,
                #a78bfa
              );
              border-image-slice: 1;
            }
            100% {
              border-image-source: linear-gradient(
                90deg,
                #6366f1,
                #ec4899,
                #facc15
              );
              border-image-slice: 1;
            }
          }

          .animate-borderMove {
            border-width: 4px;
            border-style: solid;
            border-image-slice: 1;
            animation: borderMove 3s linear infinite;
          }
        `}</style>
      </section>
      <TechPhilosophy />
      <ServicesSection />
      <MobileAppProcess />
      <AdvancedFeatures />
      <MobileAppOutcome/>
      <section className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Mobile App Development Services
          </h2>
          <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-700">
            Our Step-by-Step Development Process
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            From concept to launch, we follow a structured process to deliver
            high-quality mobile applications tailored to your business needs.
          </p>
        </div>

        {/* Process Steps */}
        <div className="flex flex-wrap justify-around items-start gap-10 md:gap-0">
          {/* Step 1 - Discovery */}
          <div className="flex flex-col items-center group md:w-1/5">
            <div className="mb-5 transform transition duration-300 ease-in-out group-hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600 group-hover:text-green-500 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3a1 1 0 011 1v2a1 1 0 01-2 0V4a1 1 0 011-1zm-6 6a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm16 0a1 1 0 011 1v1a1 1 0 01-2 0v-1a1 1 0 011-1zm-9 6v6m-4-6h8"
                />
              </svg>
            </div>
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3 font-bold text-lg">
              01
            </div>
            <h6 className="font-semibold mb-2 text-center">Discovery</h6>
            <p className="text-gray-600 text-sm md:text-base text-center">
              Understanding your business goals, target audience, and app
              requirements to define a clear roadmap.
            </p>
          </div>

          {/* Step 2 - Design */}
          <div className="flex flex-col items-center group md:w-1/5">
            <div className="mb-5 transform transition duration-300 ease-in-out group-hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600 group-hover:text-green-500 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"
                />
              </svg>
            </div>
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3 font-bold text-lg">
              02
            </div>
            <h6 className="font-semibold mb-2 text-center">Design</h6>
            <p className="text-gray-600 text-sm md:text-base text-center">
              Crafting intuitive UI/UX designs that enhance user experience and
              reflect your brand identity.
            </p>
          </div>

          {/* Step 3 - Development */}
          <div className="flex flex-col items-center group md:w-1/5">
            <div className="mb-5 transform transition duration-300 ease-in-out group-hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600 group-hover:text-green-500 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                />
              </svg>
            </div>
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3 font-bold text-lg">
              03
            </div>
            <h6 className="font-semibold mb-2 text-center">Development</h6>
            <p className="text-gray-600 text-sm md:text-base text-center">
              Writing clean, scalable code and integrating essential features to
              bring your app to life.
            </p>
          </div>

          {/* Step 4 - Launch & Support */}
          <div className="flex flex-col items-center group md:w-1/5">
            <div className="mb-5 transform transition duration-300 ease-in-out group-hover:scale-125">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 text-blue-600 group-hover:text-green-500 transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19l-3 3v-3h3zm10-10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z"
                />
              </svg>
            </div>
            <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-3 font-bold text-lg">
              04
            </div>
            <h6 className="font-semibold mb-2 text-center">Launch & Support</h6>
            <p className="text-gray-600 text-sm md:text-base text-center">
              Deploying your app on app stores and providing ongoing support to
              ensure optimal performance.
            </p>
          </div>
        </div>
      </section>
      <MobileTechSection />


      <section className="py-16 md:py-24  text-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900/90 rounded-3xl overflow-hidden max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left text */}
              <div className="col-span-1 lg:col-span-7">
                <div className="py-10 px-6 sm:px-8 md:py-16 md:px-12 text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold mb-4 md:mb-6 leading-tight">
                    Mobile App Development
                  </h2>
                  <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-6 md:mb-10">
                    We create high-performance mobile applications for iOS,
                    Android, and cross-platform frameworks. Enhance your
                    business with engaging apps and seamless user experiences.
                  </p>
                  <a
                    href="/mobile-app-development"
                    className="inline-block bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-lg shadow-lg"
                  >
                    Explore Our Services
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="col-span-1 lg:col-span-5 mt-8 lg:mt-0 text-center lg:text-end">
                <div className="flex justify-center lg:justify-end">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/cta/cta_6.png" // Replace with mobile app illustration
                    alt="Mobile App Development"
                    className="rounded-tl-[50%] rounded-tr-[30%] w-full max-w-sm lg:rounded-tr-none lg:rounded-bl-[40%] lg:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
