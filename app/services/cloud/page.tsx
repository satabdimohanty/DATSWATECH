import NeysaVelocisSection from "./file1";
import FooterSection from "@/components/footer-section";
import CloudHero from "./hero";
import SolutionsSection from "./solution";
import WhoIsItFor from "./who";
import CloudPlatformSection from "./cloud";
import SolutionsSections from "./solution1";
import Navbar from "@/components/nav-bar";

export default function Page() {
  return (
    <>
      <Navbar />
      <CloudHero />
      <SolutionsSection />
      <NeysaVelocisSection />

      <SolutionsSections />
      <WhoIsItFor />
      <CloudPlatformSection />
      <section className="ezy__cta6 light py-14 md:py-24 text-white">
        <div className="container px-4 mx-auto">
          <div className="bg-[#303446] rounded-3xl overflow-hidden max-w-8xl mx-auto">
            <div className="grid grid-cols-12 items-center">
              {/* Left text */}
              <div className="col-span-12 lg:col-span-7">
                <div className="py-12 px-6 sm:px-12">
                  <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
                    Harness the Power of Cloud Solutions
                  </h2>
                  <p className="text-lg opacity-75 mb-12">
                    Build, deploy, and scale your business with secure and
                    reliable cloud infrastructure. Enhance performance, optimize
                    operations, and protect your data with our comprehensive
                    cloud services.
                  </p>
                  <a
                    href="/cloud"
                    className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-8 py-4 rounded-lg"
                  >
                    Explore Cloud Solutions
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="col-span-12 lg:col-span-5 text-end">
                <div className="flex justify-end">
                  <img
                    src="/images/cts.jpg" // replace with cloud-themed image
                    alt="Cloud Solutions"
                    className="rounded-tl-[50%] rounded-tr-[30%] w-full lg:rounded-tr-none lg:rounded-bl-[40%] lg:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
