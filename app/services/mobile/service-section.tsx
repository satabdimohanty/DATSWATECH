"use client";
import Image from "next/image";

const services = [
  {
    title: "Custom Mobile App Development",
    description:
      "We build tailor-made mobile apps for Android and iOS that deliver excellent user experiences and high performance.",
    image: "/images/mobile/1.avif",
  },
  {
    title: "Cross-Platform App Development",
    description:
      "Create apps that run seamlessly on multiple platforms with a single codebase, saving time and cost.",
    image: "/images/mobile/2.jpg",
  },
  {
    title: "AR/VR & Immersive Apps",
    description:
      "Engage users with interactive AR/VR applications, creating immersive experiences and virtual environments.",
    image: "/images/mobile/3.jpg",
  },
  {
    title: "App Maintenance & Support",
    description:
      "Ensure your app stays up-to-date, secure, and fully optimized with our ongoing maintenance and support services.",
    image: "/images/mobile/4.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-36">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-indigo-600 font-semibold uppercase tracking-widest mb-2">
            Our Expertise
          </h4>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 mb-4">
            Mobile App Development Services
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg sm:text-xl">
            We create innovative, high-performance mobile applications tailored
            for Android, iOS, and cross-platform environments. Our services
            ensure engaging experiences, seamless performance, and long-term
            support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative group overflow-hidden rounded-3xl shadow-2xl cursor-pointer bg-white transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="w-full h-80 sm:h-96 md:h-[32rem] relative overflow-hidden transition-all duration-500 group-hover:h-[36rem]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 flex flex-col justify-end items-center text-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg">{service.description}</p>
              </div>

              {/* Bottom title with full-width gradient */}
              <div className="absolute bottom-0 left-0 right-0 
                bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600
                text-white py-5 text-center text-xl sm:text-2xl font-semibold 
                shadow-lg backdrop-blur-md bg-opacity-90 
                transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
