import React from "react";

const Section = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
           <span className="inline-block text-cyan-600 font-semibold uppercase text-sm tracking-wide 
        border border-cyan-200 rounded-full px-4 py-2 bg-[#effeff]">
            Our Promise
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Tool built for people.
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Whether you want to edit your Google Docs, resolve Jira issues,
            or collaborate over Zoom.
          </p>

          <p className="text-gray-600 mt-3 leading-relaxed">
            Circle has 100+ integrations with tools you already use and love.
          </p>
 <button className="mt-10 bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-cyan-700 transition shadow-lg">            Get started free
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/section.png"
            alt="Team work"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Section;
