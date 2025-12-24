import React from "react";

const contents = [
  {
    badge: "Automation",
    title: "Seamless Cloud Deployment",
    text: "Deploy your AI workloads effortlessly across multiple cloud environments. Automation ensures minimal downtime and peak performance.",
  },
  {
    badge: "Optimization",
    title: "Resource Efficiency",
    text: "Optimize compute, storage, and networking resources automatically. Reduce costs while maintaining high reliability for critical applications.",
  },
  {
    badge: "Insights",
    title: "Real-Time Analytics",
    text: "Monitor your cloud workloads with intelligent dashboards. Gain insights into performance, usage, and cost to make data-driven decisions.",
  },
];

const HowItWorksCloud = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="text-center mb-8">
            {/* Subheader / Badge */}
            <span className="mt-2 inline-block bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              Enterprise-ready & Scalable
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
              How Our Cloud Works
            </h2>
            {/* Subheader */}
            <p className="mt-2 text-lg md:text-xl text-gray-600 font-medium">
              Optimized for speed, reliability, and scalable AI workloads
            </p>
          </div>

          <div className="mt-4 w-24 mx-auto border-t border-dashed border-indigo-500" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Dotted vertical line */}
          <div
            className="absolute left-8 md:left-1/2 top-0 h-full w-1
    bg-[repeating-linear-gradient(to_bottom,rgba(99,102,241,1),rgba(99,102,241,1)_6px,transparent_6px,transparent_12px)]
    md:-translate-x-1/2"
          />

          <div className="space-y-16 md:space-y-24">
            {contents.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:items-center"
              >
                {/* Step Badge */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10">
                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-full 
                    bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg"
                  >
                    <span className="absolute inset-[-6px] rounded-full border-2 border-dashed border-indigo-500 opacity-90" />
                    <span className="relative text-lg font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`bg-gradient-to-b from-gray-700 to-black text-white rounded-xl shadow-lg p-6 md:p-10 w-full md:w-1/2
                  border-b-4 border-indigo-500
                  ${
                    index % 2 === 0
                      ? "md:ml-auto md:pl-12"
                      : "md:mr-auto md:pr-12"
                  }`}
                >
                  {/* Badge */}
                  <span className="inline-block mb-2 px-3 py-1 bg-indigo-500 text-white text-xs font-semibold rounded-full uppercase">
                    {item.badge}
                  </span>

                  <h4 className="text-xl md:text-2xl font-semibold mb-3">
                    {item.title}
                  </h4>
                  <p className="text-base md:text-lg">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCloud;
