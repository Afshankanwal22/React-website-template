export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Looking for a <span className="font-extrabold">solution</span>
            <br /> for your business?
          </h2>

          <p className="mt-4 text-gray-500 max-w-md">
            Check out Sogolytics enterprise feedback and experience management
            platform.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-700 transition">
              Learn more
            </button>

            <button className="border border-cyan-600 text-cyan-600 px-6 py-3 rounded-md font-semibold hover:bg-cyan-50 transition">
              Schedule a consultation
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/section3.png"
            alt="Work desk"
            className="rounded-xl shadow-lg max-w-sm w-full"
          />
        </div>

      </div>
    </section>
  );
}
