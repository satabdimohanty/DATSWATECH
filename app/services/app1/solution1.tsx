import Image from "next/image";

export default function SolutionsSections() {
  return (
    <section className="px-4 md:px-16 py-20 bg-gray-100 text-gray-700 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="inline-block mb-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            DATSWATECH CLOUD
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-900 mb-4">
            Cloud Solutions Built for Modern Enterprises
          </h1>

          <p className="text-2xl max-w-4xl text-gray-600">
            Secure, scalable, and intelligent cloud services designed to help
            organizations innovate faster, optimize operations, and scale with
            confidence.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Large Card */}
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden h-[36rem]">
            <Image
              src="/images/cloud/cloud1.avif"
              alt="DATSWATECH Cloud Platform"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="uppercase text-sm mb-2">Cloud Platform</p>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Design, deploy, and manage cloud-native workloads using a
                secure, resilient, and enterprise-ready cloud platform.
              </h3>
              <a
                href="/cloud"
                className="inline-flex items-center font-semibold hover:underline"
              >
                Explore platform →
              </a>
            </div>
          </div>

          {/* Right Column – 2x2 Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 auto-rows-fr h-[36rem]">
            <InfoCard
              title="Cloud Compute"
              description="Scalable and high-performance compute for any workload"
              link="/cloud/compute"
              icon="https://cs-us.uicdn.net/fileadmin/ionos-core/Icons/Mosaic-Blue-on-light/34664-online-shop.svg"
            />
            <InfoCard
              title="Monitoring & Observability"
              description="Real-time insights into performance, health, and usage"
              link="/cloud/monitoring"
              icon="https://cs-us.uicdn.net/fileadmin/ionos-core/Icons/Mosaic-Blue-on-light/35113-ranking-coach-icon-responsive.svg"
            />
            <InfoCard
              title="Managed Applications"
              description="Fully managed platforms optimized for performance and reliability"
              link="/cloud/managed-services"
              icon="https://cs-us.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-wordpress-hosting-managed.svg"
            />
            <InfoCard
              title="Backup & Disaster Recovery"
              description="Automated backups and recovery to protect critical data"
              link="/cloud/backup-recovery"
              icon="https://cs-us.uicdn.net/fileadmin/user_upload/Icons/on-light/icon-product-cloud-backup.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  title,
  description,
  link,
  icon,
  className = "",
}: {
  title: string;
  description: string;
  link: string;
  icon: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-white rounded-2xl p-10 flex flex-col h-full shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-blue-500 duration-300 ${className}`}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-full">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      <p className="uppercase text-sm font-bold text-gray-900 mb-2">
        {title}
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        {description}
      </h3>
    </div>
  );
}
