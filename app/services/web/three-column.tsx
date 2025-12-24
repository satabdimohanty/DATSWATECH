import Image from "next/image";

export default function WebDevelopmentSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Web Development That Delivers Real Business Impact
          </h2>
          <p className="text-lg text-gray-600">
            We don’t just build websites — we create fast, scalable, conversion-
            focused digital products that grow your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Slow Website Performance"
            description="Improve speed, usability, and Core Web Vitals for better user engagement."
            points={[
              "Core Web Vitals Optimization",
              "Code Splitting & Lazy Loading",
              "Advanced Caching Strategies",
            ]}
            icon="https://www.pixelcrayons.com/wp-content/uploads/2025/09/dig-02.svg"
          />

          <Card
            title="Unscalable Architecture"
            description="Build future-ready platforms that scale with your business."
            points={[
              "Modern Frontend Frameworks",
              "API-First Architecture",
              "Cloud-Ready Deployments",
            ]}
            icon="https://www.pixelcrayons.com/wp-content/uploads/2025/09/dig-03.svg"
          />

          <Card
            title="Poor User Experience"
            description="Design intuitive interfaces that convert visitors into customers."
            points={[
              "UX/UI Design Systems",
              "Accessibility-First Design",
              "Conversion-Focused Layouts",
            ]}
            icon="https://www.pixelcrayons.com/wp-content/uploads/2025/09/dig-04.svg"
          />

          <Card
            title="Delayed Product Launches"
            description="Ship features faster without sacrificing quality."
            points={[
              "Agile Development Sprints",
              "Continuous Integration",
              "Release Management",
            ]}
            icon="https://www.pixelcrayons.com/wp-content/uploads/2025/09/dig-01.svg"
          />

          <Card
            title="High Development Costs"
            description="Optimize delivery while maintaining engineering excellence."
            points={[
              "Reusable Components",
              "Efficient Codebases",
              "Predictable Pricing Models",
            ]}
            icon="https://www.pixelcrayons.com/wp-content/uploads/2025/09/dig-05.svg"
          />

          <Card
            title="Low Conversion Rates"
            description="Turn traffic into revenue with performance-driven development."
            points={[
              "A/B Testing Support",
              "Analytics Integration",
              "Conversion Tracking",
            ]}
            icon="https://www.pixelcrayons.com/wp-content/uploads/2025/09/dig-06.svg"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* Card Component */
/* -------------------------------- */

function Card({
  title,
  description,
  points,
  icon,
}: {
  title: string;
  description: string;
  points: string[];
  icon: string;
}) {
  return (
    <div className="relative h-full rounded-3xl p-[1.5px]
                    bg-gradient-to-br from-blue-500/50 via-cyan-400/30 to-blue-500/50
                    transition-all duration-500">
      {/* Card Body */}
      <div className="relative h-full rounded-3xl bg-white/95 backdrop-blur-xl p-8
                      shadow-[0_12px_40px_rgba(0,0,0,0.08)]
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:shadow-[0_25px_60px_rgba(59,130,246,0.22)]">

        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center
                        rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-3
                        shadow-lg">
          <img src={icon} alt="" className="w-6 h-6 invert" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-5 leading-relaxed">
          {description}
        </p>

        {/* List */}
        <ul className="space-y-2 text-gray-700 text-sm">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">
          Learn more
          <span className="transition-transform duration-300 hover:translate-x-1">
            →
          </span>
        </div>

        {/* Soft Glow Overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl
                        bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10" />
      </div>
    </div>
  );
}

