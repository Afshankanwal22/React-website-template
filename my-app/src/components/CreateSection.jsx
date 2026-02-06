export default function CreateSection() {
  return (
    <section className="bg-[#EFFFFD] py-24">
      
      {/* Top Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
         <span className="inline-block text-cyan-600 font-semibold uppercase text-sm tracking-wide 
        border border-cyan-200 rounded-full px-4 py-2 bg-[#effeff]">
          Built for people
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Easy for beginners. <span className="font-extrabold">Powerful for experts.</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mt-10 text-gray-400">
          <span className="text-cyan-600 border-b-2 border-cyan-600 pb-2 cursor-pointer">
            Create
          </span>
          <span>Distribute</span>
          <span>Collect</span>
          <span>Analyze</span>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        
        {/* Text */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Create
          </h3>
          <p className="text-sm font-semibold text-gray-900 mb-3">
            Advanced research software
          </p>
          <p className="text-gray-500 leading-relaxed mb-6">
            Ask the right questions and get the answers you need with the most
            secure and collaborative survey platform on the market featuring
            powerful logic, sophisticated analytics, and built-in automation and
            integration.
          </p>

 <button className="mt-10 bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-700 transition shadow-lg">            Get started for free
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/section2.png"
            alt="Create feature"
            className="rounded-xl shadow-xl max-w-md w-full"
          />
        </div>

      </div>
    </section>
  );
}
