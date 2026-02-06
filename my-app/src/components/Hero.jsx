export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative pt-28 pb-80 px-4 bg-cyan-50 bg-no-repeat bg-center bg-cover"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-cyan-50/80"></div>

        {/* Content */}
        <div className="relative text-center max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            A powerful online engagement tool <br />
            that’s intuitive and simple to use.
          </h1>

          <p className="text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
            With stellar one-click reports and unmatched support,
            see how Circle will make a difference in your business.
          </p>

          <button className="mt-10 bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-700 transition shadow-lg">
            Get started free
          </button>
        </div>

        {/* IMAGE */}
        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-full flex justify-center z-20">
          <img
            src="/Hero.png"
            alt="Hero"
            className="max-w-5xl w-full px-6 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* NEXT SECTION FIX */}
      <section className="pt-64 bg-white">
        {/* next section content */}
      </section>
    </>
  );
}
