import Image from "next/image";
import React from "react";
import { Rocket, Cpu, Brain, Zap, Users, ShieldCheck } from "lucide-react";

/* ---------------- MAIN COMPONENT ---------------- */
export default function AIServiceBenefits() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <p className="text-sm uppercase tracking-wider text-pink-600 font-semibold mb-2">
          AI Services Benefits
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 max-w-3xl">
          Unlock the power of AI with our cutting-edge services
        </h2>

        <div className="grid grid-cols-12 gap-8">
          {/* ROW 1 */}
          {/* IMAGE LEFT */}
          <div className="col-span-12 md:col-span-6 rounded-3xl overflow-hidden">
            <Image
              src="/images/ai/2.avif"
              alt="AI Service benefits"
              width={800}
              height={600}
              className="object-cover h-full w-full"
            />
          </div>

          {/* TWO CARDS RIGHT */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-8">
            <BenefitCard
              icon={<Rocket className="w-6 h-6 text-white" />}
              title="Rapid AI Deployment"
              desc="Implement AI solutions quickly and efficiently, accelerating business impact."
              col="col-span-12 md:col-span-6"
            >
              <ul className="mt-4 list-disc list-inside text-gray-700">
                <li>Pre-trained models for fast integration</li>
                <li>Custom AI pipelines tailored to your business</li>
                <li>Minimal downtime and seamless deployment</li>
              </ul>
              <p className="mt-4 text-gray-700">
                Our AI deployment process ensures your team can start leveraging intelligent solutions immediately.
              </p>
            </BenefitCard>

            <BenefitCard
              icon={<Cpu className="w-6 h-6 text-white" />}
              title="Scalable AI Infrastructure"
              desc="Leverage robust AI frameworks and cloud infrastructure for enterprise-grade solutions."
              col="col-span-12 md:col-span-6"
            >
              <ul className="mt-4 list-disc list-inside text-gray-700">
                <li>High-performance cloud environments</li>
                <li>Flexible scaling based on workloads</li>
                <li>Secure and reliable architecture</li>
              </ul>
              <p className="mt-4 text-gray-700">
                Scale your AI initiatives effortlessly, whether for a small project or enterprise-wide deployment.
              </p>
            </BenefitCard>
          </div>

          {/* ROW 2 */}
          {/* FOUR CARDS LEFT */}
          <div className="col-span-12 md:col-span-6 grid grid-cols-12 gap-8">
            <BenefitCard
              icon={<Brain className="w-6 h-6 text-white" />}
              title="Intelligent Automation"
              desc="Automate repetitive tasks with AI to boost efficiency and reduce errors."
              col="col-span-6"
            />

            <BenefitCard
              icon={<Zap className="w-6 h-6 text-white" />}
              title="Predictive Analytics"
              desc="Make data-driven decisions with advanced AI-driven predictions."
              col="col-span-6"
            />

            <BenefitCard
              icon={<Users className="w-6 h-6 text-white" />}
              title="Enhanced User Experience"
              desc="Deliver smarter, personalized experiences using AI insights."
              col="col-span-6"
            />

            <BenefitCard
              icon={<ShieldCheck className="w-6 h-6 text-white" />}
              title="Secure & Compliant AI"
              desc="AI solutions designed with security, privacy, and compliance in mind."
              col="col-span-6"
            />
          </div>

          {/* IMAGE RIGHT */}
          <div className="col-span-12 md:col-span-6 rounded-3xl overflow-hidden">
            <Image
              src="/images/ai/1.avif"
              alt="AI Dashboard and insights"
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
  children?: React.ReactNode;
};

function BenefitCard({
  icon,
  title,
  desc,
  col = "col-span-12",
  children,
}: BenefitCardProps) {
  return (
    <div className={`${col} relative group`}>
      {/* Gradient Outer Border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-400 via-gray-300 to-gray-500 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"></div>

      {/* Inner Glassmorphic Card */}
      <div className="relative h-full bg-white/20 backdrop-blur-md rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
        {/* Icon */}
        <div className="mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600 text-white shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:scale-110">
          {icon}
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>

        {/* Extra content */}
        {children && (
          <div className="mt-4 text-gray-800">{children}</div>
        )}

        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-gray-200/20 via-gray-300/10 to-gray-400/20 opacity-50 blur-2xl"></div>
      </div>
    </div>
  );
}

