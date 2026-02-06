export default function Resources() {
  const posts = [
    {
      img: "/blog1.png",
      title: "Excepteur sint occaecat cupidatat non proident",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos.",
    },
    {
      img: "/blog2.png",
      title: "Quis nostrum exercitationem ullam corporis suscipit laboriosam",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    },
    {
      img: "/blog3.png",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Aenean quisque ac elit id enim volutpat fermentum sed ut orci.",
    },
  ];

  return (
    <section className="bg-[#EFFFFD] py-24">
      <div className="text-center mb-16">
         <span className="inline-block text-cyan-600 font-semibold uppercase text-sm tracking-wide 
        border border-cyan-200 rounded-full px-4 py-2 bg-[#effeff]">
          Resources
        </span>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Stay in the know
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.img}
              alt="Blog"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="font-semibold text-gray-900 mb-3">
                {post.title}
              </h3>

              <p className="text-gray-500 text-sm mb-6">
                {post.desc}
              </p>

              <button className="bg-cyan-600 text-white px-4 py-2 text-sm rounded-md hover:bg-cyan-700 transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
