function IndustriesGrid() {
  const industries = [
    {
      icon: "💻",
      title: "Technology",
      text: "Software, Cloud, AI, Cybersecurity, DevOps & Engineering.",
    },
    {
      icon: "💰",
      title: "Finance",
      text: "Banking, Accounting, Investment & Financial Services.",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      text: "Medical, Pharmaceutical, Nursing & Clinical Recruitment.",
    },
    {
      icon: "🏗️",
      title: "Engineering",
      text: "Civil, Mechanical, Electrical & Industrial Engineering.",
    },
    {
      icon: "⚡",
      title: "Energy",
      text: "Oil & Gas, Renewable Energy and Utilities.",
    },
    {
      icon: "🏢",
      title: "Executive Search",
      text: "C-Level, Directors and Senior Leadership Recruitment.",
    },
  ];

  return (
    <section className="py-20 bg-white px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Industries We Recruit For
        </h2>

        <p className="text-center text-gray-500 mt-4 mb-16">
          Delivering specialist recruitment solutions across multiple industries worldwide.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {industries.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default IndustriesGrid;