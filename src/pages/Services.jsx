import MainLayout from "../layouts/MainLayout";

function Services() {
  const services = [
    {
      title: "Executive Search",
      description:
        "Identifying and securing senior executives and leadership professionals for critical business positions.",
    },
    {
      title: "Permanent Recruitment",
      description:
        "Helping organizations recruit highly qualified professionals for long-term business success.",
    },
    {
      title: "Contract Staffing",
      description:
        "Flexible staffing solutions for short-term projects, seasonal demand, and specialist expertise.",
    },
    {
      title: "Talent Mapping",
      description:
        "Strategic identification of high-potential professionals to strengthen future hiring pipelines.",
    },
    {
      title: "Recruitment Process Outsourcing",
      description:
        "Scalable recruitment support that integrates seamlessly with your internal hiring team.",
    },
    {
      title: "Workforce Consulting",
      description:
        "Recruitment strategy and workforce planning designed to improve hiring efficiency and business growth.",
    },
  ];

  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-[#081C15] text-white py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Recruitment Services
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Recruitment Solutions Built Around Your Business
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-9">
            We help organizations attract, assess and hire exceptional
            professionals across international markets.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
              Our Services
            </p>

            <h2 className="text-4xl font-bold text-[#081C15] mt-5">
              Comprehensive Recruitment Solutions
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition duration-300"
              >

                <h3 className="text-2xl font-bold text-[#081C15] mb-5">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {service.description}
                </p>

                <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition">
                  Learn More
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#081C15] py-24 text-center text-white">

        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-5xl font-bold">
            Looking for Exceptional Talent?
          </h2>

          <p className="text-xl text-gray-300 mt-8 leading-9">
            Partner with Global Hire Partners to build high-performing
            teams that drive long-term business success.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Book Consultation
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Services;