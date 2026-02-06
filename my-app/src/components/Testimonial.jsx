export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">

        {/* Left Text */}
        <div>
          <span className="text-cyan-600 text-sm font-semibold uppercase tracking-wide">
            Testimonials
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900 leading-snug">
            See how <br /> customers <br />
            <span className="font-extrabold">drive impact</span>
          </h2>

          <button className="mt-6 bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition">
            See case studies
          </button>
        </div>

        {/* Right Card */}
        <div className="relative bg-[#EFFFFD] rounded-xl p-8 shadow-lg">
          
          {/* Image */}
          <img
            src="/testimonial.png"
            alt="Customer"
            className="rounded-lg w-56"
          />

          {/* Play button */}
          <div className="absolute top-24 left-28 bg-cyan-600 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg">
            <span className="text-white text-lg">▶</span>
          </div>

          {/* Text */}
          <div className="mt-6">
            <img src="/paypal.png" alt="Paypal" className="h-6 mb-4" />

            <p className="text-gray-600 text-sm leading-relaxed">
              “I used to have a bunch of different tools I had to pay for,
              with Circle you get everything in one bundle.”
            </p>

            <p className="mt-4 font-semibold text-gray-900 text-sm">
              Michel Dedrick
            </p>
            <p className="text-gray-500 text-xs">
              Senior Conversion Optimizer
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
