export default function Trusted() {
  return (
    <section className="relative pt-40 pb-20 text-center bg-white">
      
      {/* Label */}
      <span className="text-cyan-600 font-semibold uppercase text-sm tracking-wide">
        Our Customers
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900 max-w-2xl mx-auto">
        Trusted by <span className="text-cyan-600">100,000+</span> customers
        in <span className="whitespace-nowrap">90+ countries</span>
      </h2>

      {/* Logos */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70">
        {[
          "/img1.png",
          "/img2.png",
          "/img3.png",
          "/img4.png",
          "/img5.png",
          "/img6.png",
        ].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Customer logo"
            className="h-8 md:h-10 object-contain
            grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
}
