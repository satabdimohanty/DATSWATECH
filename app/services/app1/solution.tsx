import Image from "next/image";

const solutions = [
  {
    badge: "Cloud Infrastructure",
    title: "Build on Reliable Cloud Infrastructure",
    description: [
      "High-performance cloud compute optimized for scale",
      "Flexible virtual machines for growing businesses",
      "Dedicated resources for mission-critical workloads",
      "Secure and customizable infrastructure environments",
      "Cost-efficient compute with predictable pricing",
    ],
    image: "/images/cloud/infa.avif",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    badge: "Enterprise Solutions",
    title: "Enterprise-Grade Cloud & Security",
    description: [
      "Private and hybrid cloud architectures",
      "Business continuity and disaster recovery",
      "Seamless migration from on-prem to cloud",
      "Secure multi-cloud connectivity",
      "Compliance-ready solutions for sensitive data",
      "Managed virtualization and cloud operations",
    ],
    image: "/images/cloud/enterprise.avif",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    badge: "Cloud & AI",
    title: "Launch Your Cloud & AI Initiatives",
    description: [
      "Managed Kubernetes and container platforms",
      "Scalable compute and storage services",
      "Modern data platforms and analytics",
      "AI and machine learning workloads",
      "Usage-based pricing for flexibility",
      "End-to-end AI deployment support",
    ],
    image: "/images/cloud/cloud.avif",
    gradient: "from-pink-400 to-red-500",
  },
  {
    badge: "Digital Solutions",
    title: "Strengthen Your Digital Presence",
    description: [
      "Domain and DNS management",
      "Modern website and application hosting",
      "Performance optimization and SEO readiness",
      "Secure integrations with digital platforms",
      "Real-time monitoring and insights",
      "Advanced security, SSL, and backup solutions",
    ],
    image: "/images/cloud/online.avif",
    gradient: "from-green-400 to-teal-500",
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <span className="inline-block text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
          DATSWATECH Cloud Solutions
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Cloud solutions designed to power{" "}
          <span className="text-indigo-600">modern business growth</span>
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mb-4">
          From secure infrastructure to enterprise-grade platforms, DATSWATECH
          delivers cloud solutions that help organizations build, scale, and
          innovate with confidence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${solution.gradient} p-1 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300`}
            >
              <div className="bg-white rounded-3xl flex flex-col h-full">
                {/* Full-width image */}
                <div className="relative w-full h-64 md:h-72 lg:h-80">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                </div>

                {/* Content below image */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Badge/Subheader */}
                  <span className="inline-block text-indigo-800 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
                    {solution.badge}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <ul className="list-disc list-inside space-y-2 text-gray-700 flex-1">
                    {solution.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
