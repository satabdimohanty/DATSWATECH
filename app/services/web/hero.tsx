import Image from "next/image";

export default function WebDevHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-700 text-white">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="text-pink-500 font-semibold uppercase tracking-wider mb-2 text-sm">
            WEB DEVELOPMENT
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building Stunning Websites for Your Business
          </h1>
          <p className="text-lg md:text-xl mb-8">
            DatswaTech Web Development crafts responsive, high-performance websites and web apps tailored to your brand, helping you engage users and scale online efficiently.
          </p>      
        </div>

        {/* Right Content - Image */}
        <div className="md:w-1/2 relative">
          <Image
            src="/images/web/fin.avif"
            alt="Web development illustration"
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
