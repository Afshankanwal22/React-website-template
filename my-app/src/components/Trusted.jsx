import { TiTick } from "react-icons/ti";

export default function Trusted() {
  const logos = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
    "/img6.png",
  ];

  const stats = [
    { icon: <TiTick />, text: "18,281 signed up last month" },
    {icon: <TiTick />, text: "GDPR & CCAP-ready" },
    {icon: <TiTick />, text: "Leader @ G2 Summer" },
  ];

  return (
    <section className="relative pt-40 pb-20 text-center bg-white">
      
      {/* Label */}
      <span className="inline-block text-cyan-600 font-semibold uppercase text-sm tracking-wide 
        border border-cyan-200 rounded-full px-4 py-2 bg-[#effeff]">
        Our Customers
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 max-w-2xl mx-auto">
        Trusted by <span className="text-cyan-600">100,000+</span> customers in{" "}
        <span className="whitespace-nowrap">90+ countries</span>
      </h2>

      {/* Logos */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Customer logo"
            className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-gray-700">
        {stats.map((stat, index) => (
          <p key={index} className="flex items-center gap-2 text-sm md:text-base">
            {stat.icon && <span className="text-[#2ac3ce]">{stat.icon}</span>}
            <span className={stat.icon ? "text-gray-900 font-medium" : "text-[#2ac3ce]"}>{stat.text}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
