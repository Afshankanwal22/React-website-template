export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block text-cyan-600 font-semibold uppercase text-xs tracking-widest 
          border border-cyan-200 rounded-full px-4 py-2 bg-[#effeff]">
            Testimonials
          </span>

          <h2 className="mt-5 text-[40px] leading-[48px] font-bold text-gray-900">
            See how <br />
            customers <br />
            <span className="relative inline-block">
              drive impact
              <span className="absolute inset-0 border-2 border-purple-500 -z-10 translate-x-1 translate-y-1"></span>
            </span>
          </h2>

          <button className="mt-8 bg-cyan-600 text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-cyan-700 transition">
            See case studies
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-8 items-start">

          {/* VIDEO */}
          <div className="relative w-[260px] h-[340px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5KpO5tKJq3M"
              title="PayPal Customer Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* TESTIMONIAL CARD */}
          <div className="bg-[#EFFFFD] rounded-xl p-7 w-[340px] shadow-md">
            <img
              src="https://www.youtube.com/watch?v=a3b6jGzcCoQ&utm_source=chatgpt.com"
              alt="PayPal"
              className="h-6 mb-4"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              “I used to have a bunch of different tools I had to pay for,
              with Circle you get everything in one bundle.”
            </p>

            <div className="mt-6">
              <p className="font-semibold text-gray-900 text-sm">
                Michel Dedrick
              </p>
              <p className="text-gray-500 text-xs">
                Senior Conversion Optimizer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
