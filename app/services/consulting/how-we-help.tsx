import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faChartLine, faSearch, faCogs } from "@fortawesome/free-solid-svg-icons";

interface Feature {
  img: string;
  number: number;
  title: string;
  description: string;
  icon: any;
}

const features: Feature[] = [
  {
    img: "https://cdn.easyfrontend.com/pictures/featured/feature1.jpg",
    number: 1245,
    title: "Business Strategy",
    description:
      "We help you define clear objectives and implement effective strategies that maximize growth and ROI for your organization.",
    icon: faChartLine,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/featured/feature2.jpg",
    number: 987,
    title: "Market Analysis",
    description:
      "Leverage data-driven insights to understand your market, identify opportunities, and stay ahead of competitors.",
    icon: faSearch,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/featured/feature3.jpg",
    number: 3560,
    title: "Operational Excellence",
    description:
      "Optimize business processes and workflows to increase efficiency, reduce costs, and deliver better outcomes.",
    icon: faCogs,
  },
];

interface FeatureItemProps {
  feature: Feature;
  index: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ feature, index }) => {
  const [count, setCount] = useState(0);

  // Number animation
  useEffect(() => {
    let start = 0;
    const end = feature.number;
    const duration = 1500;
    let increment = Math.ceil(end / (duration / 30));
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(start);
    }, 30);
    return () => clearInterval(counter);
  }, [feature.number]);

  return (
    <div className="grid grid-cols-12 mb-8 md:mb-16 gap-4 items-center">
      {/* Image */}
      <div className={`col-span-12 md:col-span-6 relative ${index % 2 === 0 ? "" : "md:order-2"}`}>
        <div
          className="bg-cover bg-center h-80 md:h-[400px] w-full rounded-xl shadow-xl overflow-hidden relative group"
          style={{ backgroundImage: `url(${feature.img})` }}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
        </div>
      </div>

    <div className="col-span-12 md:col-span-6">
  <div className="relative group">
   {/* Card */}
<div className="bg-gradient-to-t from-gray-700/60 to-gray-800/30 rounded-xl shadow-xl p-6 md:p-12 flex flex-col justify-center transform transition-all duration-500 hover:scale-100">
  <div className="flex items-start mb-4">
    {/* Icon */}
    <FontAwesomeIcon 
      icon={feature.icon} 
      className="text-black text-3xl md:text-4xl mr-4 flex-shrink-0" 
    />
    
    {/* Text Block */}
    <div className="flex flex-col">
      <span className="text-4xl md:text-[45px] font-bold leading-tight">
        {count.toLocaleString()}
      </span>
      <span className="text-sm md:text-base uppercase font-bold mt-1 text-black">
        {feature.title}
      </span>
      <p className="text-black mt-2 text-sm md:text-base leading-relaxed">
        {feature.description}
      </p>
    </div>
  </div>
</div>


    {/* Animated Border */}
    <span className="absolute inset-0 rounded-xl border-3 border-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
  </div>
</div>

    </div>
  );
};

const ConsultancyFeatures: React.FC = () => (
  <section className="py-16 md:py-28 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Consultancy Services That Drive Results
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Our consultancy solutions are tailored to help your business grow, optimize operations, and make smarter decisions.
        </p>
      </div>

      {features.map((feature, i) => (
        <FeatureItem feature={feature} index={i} key={i} />
      ))}
    </div>
  </section>
);

export default ConsultancyFeatures;
