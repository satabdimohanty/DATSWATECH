"use client"; // for Next.js 13 app directory
import { HiOutlineUserGroup, HiOutlineGlobeAlt } from "react-icons/hi";
import {
  MdTimer,
  MdLanguage,
  MdAttachMoney,
  MdSupportAgent,
  MdUpdate,
} from "react-icons/md";

const features = [
  {
    title: "Skilled App Developers",
    description:
      "Our expert developers craft apps tailored to your business goals, delivering high-performance and scalable solutions.",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Worldwide Project Delivery",
    description:
      "We handle projects across continents, ensuring smooth execution and timely delivery no matter where you are.",
    icon: HiOutlineGlobeAlt,
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect deadlines. Our team ensures every project milestone is met promptly without compromising quality.",
    icon: MdTimer,
  },
  {
    title: "Global Collaboration",
    description:
      "Work seamlessly with our teams across multiple time zones for uninterrupted development and communication.",
    icon: MdLanguage,
  },
  {
    title: "Multilingual App Support",
    description:
      "Reach wider audiences by integrating multiple languages into your apps for a truly global experience.",
    icon: MdLanguage,
  },
  {
    title: "Affordable Solutions",
    description:
      "We provide high-quality app development at competitive pricing, giving you maximum value within your budget.",
    icon: MdAttachMoney,
  },
  {
    title: "Expert Consultation",
    description:
      "Get professional guidance and clear strategies from our experts to shape your app development roadmap.",
    icon: MdSupportAgent,
  },
  {
    title: "Frequent Updates",
    description:
      "Keep your app fresh and competitive with regular updates featuring the latest technologies and improvements.",
    icon: MdUpdate,
  },
];


export default function WhyChooseSection() {
  return (
  <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    {/* Header and Subheader */}
    <div className="text-center mb-12">
      <h2 className="text-primary font-bold text-lg mb-2">
        Hire Expert App Developers at DATSWATECH
      </h2>
      <h3 className="text-3xl lg:text-4xl font-extrabold">
        Why Choose DATSWATECH for Mobile & Software Development
      </h3>
    </div>

    {/* Two Column Layout */}
    <div className="lg:flex lg:gap-12 items-stretch">
      {/* Left Side Image */}
      <div className="hidden lg:block flex-1 h-full">
        <div className="relative h-full">
          <img
            src="/images/mobile/why.png"
            alt="mobile app development"
            className="rounded-xl shadow-xl w-full h-full object-cover"
          />
          <h4 className="absolute top-4 left-4 text-5xl font-bold text-gray-200 leading-snug">
            Mobile <br /> App <br /> Development
          </h4>
        </div>
      </div>

      {/* Right Side Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group flex flex-col justify-between gap-4 p-5 bg-white rounded-xl shadow-md border-b-2 border-transparent transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:border-blue-500 h-full"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-5xl text-primary transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:text-blue-500">
                  <Icon />
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-justify">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</section>


  );
}
