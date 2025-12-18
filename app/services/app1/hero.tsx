import Image from "next/image";

export default function CloudHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-pink-500 font-semibold uppercase tracking-wider mb-2 text-sm">
            CLOUD SOLUTIONS
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Scalable Cloud Platform for Every Business
          </h1>
          <p className="text-lg md:text-xl mb-8">
            DatswaTech Cloud offers enterprise-grade cloud infrastructure, AI-powered services, and data management solutions, empowering your business to innovate and scale seamlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition">
              Get Started
            </button>
            <button className="border border-white hover:bg-white hover:text-black text-white font-semibold px-6 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 relative">
          <Image
            src="/images/cloud/cloud.avif"
            alt="Cloud computing illustration"
            width={600}
            height={500}
            className="rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>

      {/* Optional Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 opacity-20 rounded-full translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
}
