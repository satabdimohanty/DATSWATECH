"use client";

import { useEffect, useRef } from "react";
import { Globe, Trophy, Users, Layers, Briefcase } from "lucide-react";

function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.max(1, Math.floor(value / 60));
    const interval = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      if (ref.current) ref.current.textContent = `${start}+`;
    }, duration / (value / step));

    return () => clearInterval(interval);
  }, [value]);

  return <span ref={ref}>{value}+ </span>;
}

export default function MeasurableImpact() {
  const cards = [
    {
      icon: <Briefcase className="w-10 h-10 text-blue-400 mb-4" />,
      value: 10,
      label: "Years of Experience",
    },
    {
      icon: <Layers className="w-10 h-10 text-purple-400 mb-4" />,
      value: 3000,
      label: "Solutions Designed And Delivered",
      marquee: true,
    },
    {
      icon: <Users className="w-10 h-10 text-emerald-400 mb-4" />,
      value: 1600,
      label: "Tech Evangelists On Board",
    },
    {
      icon: (
        <Globe className="w-10 h-10 text-cyan-400 mb-4 animate-spin-slow" />
      ),
      value: 70,
      label: "Countries Powered by Tech Innovation",
    },
    {
      icon: <Trophy className="w-10 h-10 text-yellow-400 mb-4" />,
      value: 15,
      label: "Global Recognitions And Awards",
    },
    {
      icon: <Globe className="w-12 h-12 text-red-400 mb-4" />,
      value: 120,
      label: "Global Partnerships & Collaborations",
      colSpan: "md:col-span-3",
      big: true,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-24">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Measurable Impact
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Driving innovation and growth across industries with expertise and
          global partnerships.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 text-center text-white shadow-xl transition-transform hover:scale-105 ${
                card.colSpan ? card.colSpan : idx === 1 ? "md:col-span-2" : ""
              } ${card.big ? "md:py-16 md:px-12" : ""}`}
            >
              {card.icon}
              <h3 className="text-4xl md:text-5xl font-bold mt-4">
                <CountUp value={card.value} />
              </h3>
              <p className="mt-2 text-gray-300 text-lg">{card.label}</p>

              {card.marquee && (
                <div className="mt-6 overflow-hidden whitespace-nowrap text-gray-400 text-sm">
                  <div className="inline-block animate-marquee">
                    FinTech • HealthTech • SaaS • AI • Cloud • E-commerce •
                    Blockchain • IoT •
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-border {
          animation: borderMove 3s linear infinite;
        }
        @keyframes borderMove {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </section>
  );
}
