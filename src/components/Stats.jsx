function Stats() {
  const stats = [
    {
      number: "10K+",
      title: "Professionals Supported",
    },
    {
      number: "150+",
      title: "Hiring Partners",
    },
    {
      number: "25+",
      title: "Industries Served",
    },
    {
      number: "Global",
      title: "Recruitment Network",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Trusted by Professionals Worldwide
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Helping exceptional talent connect with outstanding employers across
            international markets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition duration-300"
            >
              <h3 className="text-4xl font-bold text-blue-900">
                {item.number}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;