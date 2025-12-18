"use client";

import React from "react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Guidance",
      desc: "Our experienced consultants provide tailored strategies to help your business thrive in a competitive landscape.",
      img: "https://thestartupconsultancy.com/wp-content/uploads/2020/12/h1_ask-5-1.png",
    },
    {
      title: "Dedicated Support",
      desc: "We ensure consistent support to address your business challenges and help you implement effective solutions.",
      img: "https://thestartupconsultancy.com/wp-content/uploads/2020/12/h1_ask-5-3.png",
    },
    {
      title: "Proven Results",
      desc: "Our consultancy projects are backed by measurable outcomes, guaranteeing value and satisfaction for our clients.",
      img: "https://thestartupconsultancy.com/wp-content/uploads/2020/12/h1_ask-5-2.png",
    },
    {
      title: "Technical Expertise",
      desc: "Our skilled technical team leverages the latest tools and methodologies to optimize processes and drive efficiency.",
      img: "https://thestartupconsultancy.com/wp-content/uploads/2020/12/h1_ask-5.png",
    },
  ];

  return (
    <section className="py-24 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        {/* Heading - centered */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
            Why Choose <span className="text-blue-600">Datswatech</span>{" "}
            Consultancy
          </h2>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            <span>We combine strategy, technology, and expertise</span>
            <span className="block">to deliver measurable results</span>
            <span className="block">
              and empower your business for sustainable growth.
            </span>
          </p>
          <hr className="border-t border-gray-300 dark:border-gray-700 mt-6 w-24 mx-auto" />
        </div>

        {/* Left-Right Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Left: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src="https://thestartupconsultancy.com/wp-content/uploads/2020/12/Untitled-1-2.png"
              alt="Datswatech Consultancy"
              className="w-full max-w-md"
            />
          </div>

          {/* Right: Features */}
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center md:items-start text-center md:text-left p-4"
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mb-4 w-24 h-24"
                />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
