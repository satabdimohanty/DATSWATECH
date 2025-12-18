import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact.avif" // replace with your background image path
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center h-full">
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Intelligent, Scalable Solutions with <span className="text-blue-400">DatswaTech</span>
          </h1>
          <p className="mt-6 text-lg max-w-xl text-gray-200">
            From strategy to execution, we help businesses unlock growth and innovation through
            AI, cloud, and enterprise-grade technology solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="px-6 py-3 border border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-black/30 transition"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Right Illustration/Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/images/hero-illustration.svg" // optional illustration on right
            alt="DatswaTech Illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
