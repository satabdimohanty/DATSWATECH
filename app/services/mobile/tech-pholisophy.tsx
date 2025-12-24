// components/TechPhilosophy.tsx
import Image from "next/image";

const TechPhilosophy = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            DATSWATECH Mobile Technology Philosophy
          </h2>

          {/* Tagline */}
          <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-4">
            Innovation-driven development. Secure architectures. Design-first
            thinking. Performance that scales.
          </h3>

          {/* Intro */}
          <p className="text-base text-gray-600 mb-10 max-w-3xl mx-auto">
            At DATSWATECH, we build mobile solutions by combining innovation,
            security, intuitive design, and high-performance engineering to
            create apps that deliver real business impact.
          </p>

          {/* Image */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/mobile/philosophy.png"
              alt="DATSWATECH Mobile Technology Philosophy"
              title="DATSWATECH Mobile Technology Philosophy"
              width={826}
              height={322}
              className="w-full max-w-4xl h-auto"
              priority
            />
          </div>

          {/* Conclusion */}
          <p className="text-base text-gray-600 max-w-4xl mx-auto">
            Our technology stack is carefully selected to ensure secure data
            handling, exceptional user experience, optimized performance, and
            future-ready scalability—so your mobile product grows seamlessly
            with your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechPhilosophy;
