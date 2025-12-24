"use client";
import Image from "next/image";

const technologies = [
  {
    title: "Kotlin",
    description: "Build modern, secure Android apps with concise and maintainable code.",
    icon: "https://invoidea.com/service08/assets/inv-images/icons/kotlin-icon.webp",
  },
  {
    title: "Java",
    description: "Develop stable and scalable Android applications with industry-standard support.",
    icon: "https://invoidea.com/service08/assets/inv-images/icons/java-logo.webp",
  },
  {
    title: "Dart",
    description: "Create fast, expressive cross-platform apps with high performance and flexibility.",
    icon: "https://invoidea.com/service08/assets/inv-images/icons/dart-icon.webp",
  },
  {
    title: "Flutter",
    description: "Deliver beautiful, high-performance apps from a single codebase for Android & iOS.",
    icon: "https://invoidea.com/service08/assets/inv-images/icons/flutter-icon.webp",
  },
  {
    title: "React Native",
    description: "Build native-like apps using reusable JavaScript components for multi-platform deployment.",
    icon: "https://invoidea.com/service08/assets/inv-images/icons/react-native-icon.webp",
  },
  {
    title: "Python",
    description: "Power backend systems, APIs, and data-driven logic to support robust mobile apps.",
    icon: "https://invoidea.com/service08/assets/inv-images/icons/python-outlined-icon.webp",
  },
];

export default function MobileTechSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-primary font-bold text-lg mb-2">
            Top Mobile App Development Services in India
          </h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gray-800">
            Technologies We Use at DATSWATECH
          </h3>
          <p className="text-gray-700 text-lg">
            At DATSWATECH, we leverage cutting-edge technologies and tools to develop innovative, high-performance, and feature-rich mobile applications for Android, iOS, and cross-platform solutions.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="flex flex-col items-center text-center p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">
                <Image
                  src={tech.icon}
                  alt={tech.title}
                  width={60}
                  height={60}
                  className="mx-auto"
                />
              </div>
              <h5 className="text-lg font-semibold mb-2">{tech.title}</h5>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
