import FooterSection from "@/components/footer-section";
import AnimatedServicesTabs from "./service-tabs";
import ITServicesTabs from "./it-services";
import GenerativeAISection from "./ai-sol";
import AIPlatformSection from "./ai-platform";
import AIWhyChooseUs from "./ai";
import AIServiceBenefits from "./ai-ser.ben";
import AiHero from "./hero";
import SoftwareServices from "./software-dev";
import Navbar from "@/components/nav-bar";
import StickySteps from "./sticky-steps ";

export default function Page() {
  return (
    <>
      <Navbar />
      <AiHero />
      <StickySteps />
      <AnimatedServicesTabs />
      <ITServicesTabs />
      <GenerativeAISection />
      <AIServiceBenefits />
      <AIWhyChooseUs />
      <SoftwareServices />
      <AIPlatformSection />
      <section className="ezy__cta6 light py-14 md:py-24 text-white">
        <div className="container px-4 mx-auto">
          <div className="bg-[#303446] rounded-3xl overflow-hidden max-w-8xl mx-auto">
            <div className="grid grid-cols-12 items-center">
              {/* Left text */}
              <div className="col-span-12 lg:col-span-7">
                <div className="py-12 px-6 sm:px-12">
                  <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
                    Build High-Performance Web Applications
                  </h2>

                  <p className="text-lg opacity-75 mb-12">
                    Design, develop, and launch modern websites that deliver
                    exceptional user experiences. From responsive UI to scalable
                    backend solutions, we build secure, fast, and
                    conversion-driven web applications tailored to your business
                    goals.
                  </p>

                  <a
                    href="/web-development"
                    className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-8 py-4 rounded-lg"
                  >
                    Explore Web Development Services
                  </a>
                </div>
              </div>

              {/* Right image */}
              <div className="col-span-12 lg:col-span-5 text-end">
                <div className="flex justify-end">
                  <img
                    src="https://cdn.easyfrontend.com/pictures/cta/cta_6.png" // replace with web development image
                    alt="Web Development"
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
