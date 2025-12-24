"use client";
import Image from "next/image";

const features = [
  {
    title: "Real-Time Monitoring",
    description:
      "Track your app’s performance and user activity in real time to ensure seamless operations and instant insights for smarter decisions.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910765.png",
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage predictive analytics to forecast trends, optimize workflows, and anticipate user needs before they occur.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910786.png",
  },
  {
    title: "Data Visualization",
    description:
      "Transform complex datasets into easy-to-understand charts and dashboards for actionable insights at a glance.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
  },
  {
    title: "Security & Compliance",
    description:
      "Ensure your data is secure and compliant with industry standards, protecting both user information and company integrity.",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910769.png",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-primary font-bold text-lg mb-2">
            DATSWATECH Solutions from India
          </h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-4">
            Advanced Data Monitoring & Analytics
          </h3>
          <p className="text-gray-600 text-lg">
            Our services empower businesses to monitor, analyze, and visualize critical data to make informed decisions with speed and precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-700 to-gray-300 text-white flex flex-col transition-all duration-300 hover:shadow-3xl"
            >
              {/* Top content: Icon and Title */}
              <div className="flex flex-col items-center pt-12 z-20">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="mb-5"
                />
                <h5 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
                  {feature.title}
                </h5>
              </div>

              {/* Bottom content: Description */}
              <div className="bg-white text-gray-700 p-6 rounded-t-3xl transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <p className="text-center text-base sm:text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
