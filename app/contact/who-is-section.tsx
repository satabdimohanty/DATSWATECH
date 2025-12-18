import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faNewspaper, faUsers } from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    icon: faHandshake,
    title: "Become a Partner",
    description:
      "Power the future of AI! Join forces with Dawatech to unlock new opportunities to drive innovation in technology.",
    buttonText: "Get in Touch",
    buttonLink: "/partners",
  },
  {
    icon: faNewspaper,
    title: "News & Media",
    description:
      "Stay updated with Dawatech’s latest achievements, innovations, and insights into the tech space.",
    buttonText: "View News",
    buttonLink: "/news",
  },
  {
    icon: faUsers,
    title: "Join Our Team",
    description:
      "Think you’ve got what it takes to accelerate with Dawatech? Join the team where talent meets innovation.",
    buttonText: "Careers",
    buttonLink: "/careers",
  },
];

const DawatechCards = () => {
  return (
    <section className="py-14 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Ready to Get Started with Dawatech?
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            Explore opportunities, news, and careers to accelerate your business with Dawatech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="relative group flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
            >
              {/* Left Border */}
              <span className="absolute left-0 top-0 h-full w-1 bg-blue-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 rounded-l-full"></span>
              {/* Right Border */}
              <span className="absolute right-0 top-0 h-full w-1 bg-blue-500 scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 rounded-r-full"></span>

              <div className="w-16 h-16 flex items-center justify-center mb-4 text-blue-600 text-3xl">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
              <a
                href={card.buttonLink}
                className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-medium hover:from-blue-700 hover:to-indigo-600 transition-all"
              >
                {card.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DawatechCards;
