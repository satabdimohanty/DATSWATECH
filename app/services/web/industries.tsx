"use client";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Artificial Intelligence",
    subtitle: "Innovate Smarter. Faster.",
    description:
      "Implement AI solutions to automate tasks, improve decision-making, and enhance customer experiences.",
    image: "/images/web/artificial.avif",
    link: "/ai-solutions",
  },
  {
    title: "Cloud Computing",
    subtitle: "Scale Without Limits.",
    description:
      "Leverage cloud platforms to achieve flexibility, reduce costs, and ensure seamless scalability.",
    image: "/images/web/cloud.avif",
    link: "/cloud-computing",
  },
  {
    title: "FinTech",
    subtitle: "Secure. Fast. Reliable.",
    description:
      "Build digital financial solutions that empower businesses and customers with safety and efficiency.",
    image: "/images/web/fin.avif",
    link: "/fintech-solutions",
  },
];

export default function IndustriesCards() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Expertise Across Industries
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We deliver innovative technology solutions to help businesses stay
          ahead of the curve.
        </p>
      </div>

      <div className="mx-auto max-w-8xl px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer h-[600px]"
              whileHover="hover"
            >
              {/* Image with hover animation */}
              <motion.img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover absolute top-0 left-0"
                initial={{ opacity: 1, x: 0, y: 0 }}
                variants={{
                  hover:
                    idx % 2 === 0
                      ? { y: 50, opacity: 0, transition: { duration: 0.6 } }
                      : { x: -50, opacity: 0, transition: { duration: 0.6 } },
                }}
              />

              {/* Overlay background for better readability */}
              <div className="absolute inset-0 bg-black/40 z-10 rounded-3xl"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col justify-start pt-8 p-10 z-20">
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                  {industry.title}
                </h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  variants={{
                    hover: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.5, duration: 0.5 },
                    },
                  }}
                >
                  <p className="text-xl mb-2 text-white">{industry.subtitle}</p>
                  <p className="text-base mb-4 text-gray-200">
                    {industry.description}
                  </p>
                  <a
                    href={industry.link}
                    className="text-sm font-medium underline text-white hover:text-gray-200"
                  >
                    Learn More →
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
