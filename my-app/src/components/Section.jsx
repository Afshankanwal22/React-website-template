import React from "react";

const Section = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="text-sm text-teal-500 font-semibold uppercase">
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

          <button className="mt-6 bg-[#0cbbc7] text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-600 transition">
            Get started free
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
