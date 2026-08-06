function ServicesPreview() {
  const services = [
    {
      title: "Executive Recruitment",
      description:
        "Helping organizations hire senior leaders and executives who drive business growth.",
    },
    {
      title: "Permanent Hiring",
      description:
        "Connecting employers with highly qualified professionals for long-term success.",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible recruitment solutions for short-term and project-based workforce needs.",
    },
    {
      title: "Global Talent Acquisition",
      description:
        "Sourcing exceptional professionals across international markets.",
    },
    {
      title: "Workforce Solutions",
      description:
        "Strategic recruitment services tailored to your organization's hiring goals.",
    },
    {
      title: "Career Placement",
      description:
        "Helping professionals discover meaningful career opportunities worldwide.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Recruitment Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Helping organizations hire exceptional talent while supporting
            professionals in building successful global careers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 p-10"
            >
              <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl">
                ★
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {service.description}
              </p>

              <button className="mt-8 bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;