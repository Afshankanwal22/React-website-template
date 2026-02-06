export default function Awards() {
  const awards = [
    {
      img: "/award1.png",
      text: "Market leader across\n18 categories",
      bg: "bg-[#FFF4F0]",
    },
    {
      img: "/award2.png",
      text: "Most loved SaaS tool\nin 2021",
      bg: "bg-[#FFF1FA]",
    },
    {
      img: "/award3.png",
      text: "Category leader in\n2022",
      bg: "bg-[#ECFEFC]",
    },
    {
      img: "/award4.png",
      text: "Most recommended\ntool in 2021",
      bg: "bg-[#F5F3FF]",
    },
    {
      img: "/award5.png",
      text: "Champion in survey\ntool 2022",
      bg: "bg-[#FFFBEB]",
    },
    {
      img: "/award6.png",
      text: "Top performer spring\n2021",
      bg: "bg-[#FFF7ED]",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white text-center">
      
      {/* Small label */}
      <span className="inline-block text-cyan-600 font-semibold uppercase text-sm tracking-wide 
        border border-cyan-200 rounded-full px-4 py-2 bg-[#effeff]">
        Awards
      </span>

      {/* Heading */}
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
        An award winning platform,{" "}
        <span className="font-extrabold">loved by customers.</span>
      </h2>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {awards.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} rounded-xl p-10 flex flex-col items-center justify-center
            hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-lg`}
          >
            <img
              src={item.img}
              alt="Award"
              className="h-20 object-contain"
            />

            <p className="mt-6 text-gray-900 font-medium whitespace-pre-line">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
