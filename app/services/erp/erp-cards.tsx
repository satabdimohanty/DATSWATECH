"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const modules = [
  {
    title: "Financial Management",
    description:
      "A full suite of accounting functions and reporting tools, to meet the needs of growing companies",
    image:
      "https://www.acumatica.com/media/2017/03/finance-mgmt-600x400-1-700x0-c-default.jpg?height=270&format=auto",
    link: "https://www.acumatica.com/cloud-erp-software/financial-management/",
  },
  {
    title: "Construction Management",
    description:
      "Acumatica’s Cloud ERP Construction Management software equips firms with powerful business intelligence for complete visibility.",
    image:
      "https://www.acumatica.com/media/2018/01/Construction-700x0-c-default.png?height=270&format=auto",
    link: "https://www.acumatica.com/cloud-erp-software/construction-management/",
  },
  {
    title: "Distribution Management",
    description:
      "Complete suite to boost sales, automate warehouse operations, optimize inventory, and streamline purchasing.",
    image:
      "https://www.acumatica.com/media/2017/03/Distribution-Edition-700x0-c-default.jpg?height=270&format=auto",
    link: "https://www.acumatica.com/cloud-erp-software/distribution-management/",
  },
  {
    title: "Manufacturing Management",
    description:
      "Real-time insights and end-to-end control of production and financials to drive efficiency and growth.",
    image:
      "https://www.acumatica.com/media/2017/03/manufacturing-mgmt-300x200-c-scaled-700x0-c-default.jpg?height=270&format=auto",
    link: "https://www.acumatica.com/cloud-erp-software/manufacturing-management/",
  },
  {
    title: "Professional Services",
    description:
      "Professional Services Management built around the real-world needs of project-based firms.",
    image:
      "https://www.acumatica.com/media/2024/10/professional-services-3x2-1-700x0-c-default.jpg?height=270&format=auto",
    link: "https://www.acumatica.com/cloud-erp-software/professional-services/",
  },
  {
    title: "Retail Management",
    description:
      "End-to-end eCommerce-enabled business management solution that integrates seamlessly.",
    image:
      "https://www.acumatica.com/media/2017/03/eCommerce-Edition-700x0-c-default.jpg?height=270&format=auto",
    link: "https://www.acumatica.com/cloud-erp-software/retail-management/",
  },
];

export default function ERPCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold max-w-3xl mx-auto mb-4">
          All-in-one Cloud ERP Software
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Best-in-class business and industry-specific solutions that can be
          easily tailored to meet the needs of your growing company
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <motion.div
              key={mod.title}
              className="relative w-full h-72 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              whileHover="hover"
            >
              {/* Background Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 1 }}
                variants={{
                  hover: { opacity: 0, transition: { duration: 0.5 } },
                }}
              >
                <Image
                  src={mod.image}
                  alt={mod.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 py-3 px-4">
                <h3 className="text-gray-800 font-semibold">{mod.title}</h3>
              </div>

              {/* White Content Box */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center bg-white p-6 text-left"
                initial={{ y: "100%", opacity: 0 }}
                variants={{
                  hover: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {mod.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{mod.description}</p>
                <a
                  href={mod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 font-medium hover:text-teal-700 hover:underline"
                >
                  View Details →
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
