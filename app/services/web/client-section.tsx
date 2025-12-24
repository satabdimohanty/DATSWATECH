"use client";
import { motion } from "framer-motion";

const clients = [
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
];

const awards = [
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/dev-img/Google-Partner-PXL.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/dev-img/microsoft-image.svg",
  "https://assets.goodfirms.co/badges/color-badge/top-software-development-companies.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-01.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-02.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-03.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-04.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-05.svg",
  "https://www.pixelcrayons.com/wp-content/themes/pixelcrayons/v3.0/assets/images/aw-06.svg",
];

export default function ClientsSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* Centered Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Leaders in Building Top-Notch Websites
          </h2>
          <p className="text-gray-600 mb-4 text-lg">
            Experience excellence in website development with PixelCrayons,
            where quality, innovation, and efficiency converge.
          </p>
          <p className="text-gray-600 mb-6 text-lg">
            Our team, comprising India’s top 1% IT talent, consists of skilled
            app consultants, programmers, and designers committed to delivering
            secure, resilient, and cost-effective solutions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 bg-blue-50 p-8 rounded-3xl shadow-lg flex flex-col">
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg flex-1">
              <li>Trusted by startups and Fortune 500 companies alike</li>
              <li>From ideation to deployment, we handle every aspect</li>
              <li>Specialized web apps for 25+ industries</li>
              <li>On-time project delivery with no surprises</li>
              <li>Dedicated support for seamless project management</li>{" "}
              {/* New bullet */}
            </ul>
          </div>

          <div className="flex-1 space-y-12 bg-gradient-to-b from-blue-50 via-white to-blue-50 p-8 rounded-3xl shadow-lg flex flex-col">
            {/* Client Logos Carousel */}
            <div className="overflow-hidden flex-1">
              <motion.div
                className="flex gap-16"
                animate={{ x: [0, -900] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              >
                {clients.concat(clients).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Client ${idx + 1}`}
                    className="h-24 md:h-28 object-contain"
                  />
                ))}
              </motion.div>
            </div>

            {/* Awards Section */}
            <div>
              <h5 className="font-semibold text-lg mb-4 text-center">
                Awards & Certifications
              </h5>
              <div className="flex flex-wrap gap-6 items-center justify-center">
                {awards.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Award ${idx + 1}`}
                    className="h-16 md:h-20 object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
