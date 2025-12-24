import Image from "next/image";
import React from "react";
import {
  Rocket,
  ShieldCheck,
  BarChart3,
  Users,
  BadgeCheck,
} from "lucide-react";

/* ---------------- MAIN COMPONENT ---------------- */

export default function ServiceBenefits() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <p className="text-sm uppercase tracking-wider text-pink-600 font-semibold mb-2">
          Service Benefits
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 max-w-3xl">
          What you can achieve with our custom application development services
        </h2>

        <div className="grid grid-cols-12 gap-8">
          {/* ROW 1 */}
          {/* IMAGE LEFT */}
          <div className="col-span-12 md:col-span-6 rounded-3xl overflow-hidden">
            <Image
              src="/images/web/2.avif"
              alt="Service benefits"
              width={800}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>

          {/* TWO CARDS RIGHT */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-8">
            <BenefitCard
              icon={<Rocket className="w-6 h-6" />}
              title="Faster Time to Market"
              desc="Accelerate launches with agile processes, automation, and CI/CD."
              col="col-span-12 md:col-span-6"
            />

            <BenefitCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Reduced Delivery Risk"
              desc="Transparent workflows and milestone-driven execution."
              col="col-span-12 md:col-span-6"
            />
          </div>

          {/* ROW 2 */}
          {/* FOUR CARDS LEFT */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-8">
            <BenefitCard
              icon={<BarChart3 className="w-6 h-6" />}
              title="Data-Driven Insights"
              desc="Real-time analytics to track performance and growth."
              col="col-span-6"
            />

            <BenefitCard
              icon={<Users className="w-6 h-6" />}
              title="Product Ownership"
              desc="Teams aligned with your business vision and outcomes."
              col="col-span-6"
            />

            <BenefitCard
              icon={<BadgeCheck className="w-6 h-6" />}
              title="Enterprise Expertise"
              desc="Certified engineers and enterprise-grade architecture."
              col="col-span-6"
            />

            <BenefitCard
              icon={<ShieldCheck className="w-6 h-6" />}
              title="Reduced Delivery Risk"
              desc="Transparent workflows and milestone-driven execution."
              col="col-span-6"
            />
          </div>

          {/* IMAGE RIGHT */}
          <div className="col-span-12 md:col-span-6 rounded-3xl overflow-hidden">
            <Image
              src="/images/web/1.avif"
              alt="Team collaboration"
              width={800}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  col?: string;
};

function BenefitCard({
  icon,
  title,
  desc,
  col = "col-span-12",
}: BenefitCardProps) {
  return (
    <div
      className={`${col} relative h-full rounded-3xl p-[1.5px]
                  bg-gradient-to-br from-blue-500/60 via-cyan-400/40 to-blue-500/60`}
    >
      {/* Card Body */}
      <div
        className="relative h-full rounded-3xl bg-white/90 backdrop-blur-xl p-6
                   -translate-y-2
                   shadow-[0_25px_60px_rgba(59,130,246,0.25)]"
      >
        {/* Icon */}
        <div
          className="mb-5 inline-flex items-center justify-center
                     rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-3
                     text-white shadow-lg scale-110"
        >
          {icon}
        </div>

        {/* Title */}
        <h4 className="text-lg font-semibold text-blue-600 mb-3">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {desc}
        </p>

        {/* Subtle Glow Overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl
                     bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10"
        />
      </div>
    </div>
  );
}

