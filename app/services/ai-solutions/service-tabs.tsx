"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface AISolution {
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  image: string;
  link: string;
}

const aiSolutions: AISolution[] = [
  {
    title: "Chatbots",
    subtitle: "Conversational AI",
    badge: "Popular",
    description:
      "Build intelligent chatbots that provide instant support and enhance customer engagement across multiple platforms.",
    image: "/images/ai/chatbot.jpg",
    link: "/services/chatbots",
  },
  {
    title: "Predictive Analytics",
    subtitle: "Data-Driven Insights",
    badge: "Top Service",
    description:
      "Leverage AI to forecast trends, improve decision-making, and optimize business processes with accurate predictive models.",
    image: "/images/ai/analysis.jpg",
    link: "/services/predictive-analytics",
  },
  {
    title: "Computer Vision",
    subtitle: "Image & Video Analysis",
    description:
      "Utilize AI-powered computer vision to detect, classify, and track objects in images and videos for smarter automation.",
    image: "/images/ai/vision.jpg",
    link: "/services/computer-vision",
  },
  {
    title: "Natural Language Processing",
    subtitle: "Text & Speech AI",
    badge: "New",
    description:
      "Analyze, interpret, and generate human language using AI models to enhance communication and automate processes.",
    image: "/images/ai/nlp.avif",
    link: "/services/nlp",
  },
];

export default function HorizontalScrollAISolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (!horizontalRef.current || !containerRef.current) return;
      const scrollWidth = horizontalRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      setContainerHeight(
        scrollWidth - viewportWidth + window.innerHeight + 250
      ); // extra space
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !horizontalRef.current) return;

      const top = containerRef.current.offsetTop;
      const scroll = window.scrollY - top;

      if (scroll >= 0 && scroll <= containerHeight) {
        horizontalRef.current.style.transform = `translateX(-${scroll}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [containerHeight]);

  return (
    <section
      ref={containerRef}
      style={{ height: `${containerHeight}px` }}
      className="relative bg-gray-50"
    >
      {/* Top Header */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Our AI Solutions
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our intelligent AI services designed to transform your
          business operations and customer experiences.
        </p>
      </div>

      {/* Sticky horizontal scroll */}
      <div className="sticky top-0 left-0 w-full h-[550px] flex items-center overflow-hidden">
        <div ref={horizontalRef} className="flex gap-12 px-8">
          {aiSolutions.map((solution, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[500px] relative flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Full top image with gray gradient border */}
              <div
                className="relative w-full h-64 sm:h-80 lg:h-96 rounded-t-2xl overflow-hidden
                      bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 p-1"
              >
                <div className="w-full h-full rounded-t-2xl overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 flex flex-col justify-between">
                {/* Header + Subheader */}
                <div>
                  <h3 className="text-2xl font-bold mb-1">{solution.title}</h3>
                  <h4 className="text-sm text-gray-500 mb-3">
                    {solution.subtitle}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{solution.description}</p>

                {/* Link */}
                <a
                  href={solution.link}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
