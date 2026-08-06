function WhyChooseUs() {
  const reasons = [
    {
      title: "Global Network",
      description:
        "Access to exceptional professionals and employers across multiple international markets.",
    },
    {
      title: "Industry Expertise",
      description:
        "Specialized recruitment solutions across technology, finance, healthcare, engineering and more.",
    },
    {
      title: "Fast Hiring",
      description:
        "Efficient recruitment processes that reduce hiring time without compromising quality.",
    },
    {
      title: "Trusted Partnership",
      description:
        "Building long-term relationships with employers and professionals worldwide.",
    },
  ];

  return (
    <section className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Why Choose Global Hire Partners
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-16">
          Delivering world-class recruitment solutions built on trust,
          expertise and global reach.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((item, index) => (

            <div
              key={index}
              className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl mb-6">
                ✓
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-6">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;