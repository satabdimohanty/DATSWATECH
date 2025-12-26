import { CloudUpload, Settings, User, Expand, Cpu, Lock } from "lucide-react";

const services = [
  { icon: <CloudUpload className="w-8 h-8 text-white" />, title: "Developing cloud-native software solutions" },
  { icon: <Settings className="w-8 h-8 text-white" />, title: "Upgrading complex legacy systems" },
  { icon: <User className="w-8 h-8 text-white" />, title: "Monitoring and maintaining software performance" },
  { icon: <Expand className="w-8 h-8 text-white" />, title: "Crafting a scalable and secure infrastructure" },
  { icon: <Cpu className="w-8 h-8 text-white" />, title: "Building intelligent, AI-powered platforms" },
  { icon: <Lock className="w-8 h-8 text-white" />, title: "Protecting sensitive data and enterprise systems" },
];

export default function SoftwareServices() {
  return (
    <section className=" text-black py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Software Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver modern, scalable, and secure software solutions to help your business thrive in a digital world.
          </p>
        </div>

        {/* Outer Box */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="relative rounded-lg overflow-visible">
                {/* Always-visible blue background */}
                <div className="absolute inset-0 bg-blue-600 rounded-lg z-0"></div>

                {/* Inner White Box */}
                <div className="relative z-10 bg-white rounded-lg p-6 flex flex-col items-center shadow-md border border-gray-200 w-full h-48 flex justify-center m-2">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="font-semibold text-center">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Contact Us to Transform Your Business
          </button>
        </div>
      </div>
    </section>
  );
}
