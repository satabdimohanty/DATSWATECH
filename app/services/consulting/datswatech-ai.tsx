"use client";

import React from "react";
import {
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

export default function OmnichannelAI() {
  return (
    <section className="flex flex-col items-center justify-center py-24 dark:bg-gray-900 text-gray-900 dark:text-white">
      
      {/* ---------------- Heading Section ---------------- */}
      <div className="text-center max-w-4xl mb-12">
        <div className="text-sm font-semibold uppercase mb-2 text-purple-600">
          DATSWATECH CONSULTANCY
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Transforming Businesses with Smart Solutions
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          We help businesses grow smarter by combining strategy, technology, and insights.  
          Our solutions are practical, tailored, and designed to help your business succeed.
        </p>
      </div>

      {/* ---------------- Illustration with SVG and Icons ---------------- */}
      <div className="relative flex justify-center items-center w-full max-w-3xl h-[400px]">
        
        {/* Main SVG */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 580 358"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_4685_35533)">
            <path
              d="M290 0.647461C427.68 0.647626 539.294 112.549 539.294 250.59C539.294 388.63 427.68 500.532 290 500.532C152.321 500.532 40.7057 388.631 40.7056 250.59C40.7056 112.549 152.32 0.647461 290 0.647461Z"
              fill="#F2E8FF"
              fillOpacity={0.1}
              stroke="#E7E7E7"
              strokeWidth={1.3}
            />
            <path
              d="M290 38.2031C407.657 38.2031 503.034 133.293 503.034 250.589C503.034 367.885 407.657 462.976 290 462.976C172.343 462.975 76.9666 367.884 76.9666 250.589C76.9668 133.293 172.343 38.2033 290 38.2031Z"
              fill="#F2E8FF"
              fillOpacity={0.1}
              stroke="#E7E7E7"
              strokeWidth={1.3}
            />
            <circle
              cx={289.353}
              cy={250.589}
              r={176.125}
              fill="#F2E8FF"
              fillOpacity={0.2}
              stroke="#E7E7E7"
              strokeWidth={1.3}
            />
            <rect
              x={229.471}
              y={189.29}
              width={121.304}
              height={121.304}
              rx={16.3043}
              fill="#D9D9D9"
              fillOpacity={0.24}
              stroke="white"
              strokeWidth={1.3}
            />
          </g>
          <defs>
            <clipPath id="clip0_4685_35533">
              <rect width="580" height="358" fill="white" />
            </clipPath>
          </defs>
        </svg>

        {/* Icons around the circle */}
        <PhoneIcon
          className="absolute h-10 w-10 text-purple-600 dark:text-purple-400"
          style={{ top: "10%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        <ChatBubbleLeftRightIcon
          className="absolute h-10 w-10 text-purple-600 dark:text-purple-400"
          style={{ top: "50%", left: "90%", transform: "translate(-50%, -50%)" }}
        />
        <EnvelopeIcon
          className="absolute h-10 w-10 text-purple-600 dark:text-purple-400"
          style={{ top: "90%", left: "50%", transform: "translate(-50%, -50%)" }}
        />
        <GlobeAltIcon
          className="absolute h-10 w-10 text-purple-600 dark:text-purple-400"
          style={{ top: "50%", left: "10%", transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* ---------------- User-Friendly Explanation ---------------- */}
      <div className="mt-12 max-w-2xl text-center text-gray-700 dark:text-gray-300 text-lg">
        <p>
          Connect with us in multiple ways – call, chat, email, or visit our website.  
          Our team is ready to help you implement smart business solutions that work.
        </p>
      </div>
    </section>
  );
}
