import MainLayout from "../layouts/MainLayout";

function Industries() {
  const industries = [
    {
      title: "Technology",
      description:
        "Connecting innovative companies with software engineers, cloud specialists, cybersecurity professionals, data experts and technology leaders.",
    },
    {
      title: "Healthcare",
      description:
        "Recruiting healthcare professionals, clinical specialists, administrators and healthcare executives.",
    },
    {
      title: "Finance",
      description:
        "Supporting financial institutions with experienced accounting, banking, investment and finance professionals.",
    },
    {
      title: "Engineering",
      description:
        "Providing engineering talent across civil, mechanical, electrical, construction and industrial disciplines.",
    },
    {
      title: "Manufacturing",
      description:
        "Helping manufacturers hire operations leaders, production specialists and technical professionals.",
    },
    {
      title: "Energy",
      description:
        "Recruitment solutions for oil & gas, renewable energy, utilities and infrastructure organizations.",
    },
    {
      title: "Professional Services",
      description:
        "Supporting consulting firms and corporate organizations with experienced professionals.",
    },
    {
      title: "Executive Leadership",
      description:
        "Executive search for C-suite, directors, senior managers and business leaders.",
    },
  ];

  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-[#081C15] text-white py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Industries
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Recruitment Expertise Across Multiple Industries
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-9">
            Our recruiters understand the unique hiring challenges of different
            industries, allowing us to deliver talent that drives business success.
          </p>

        </div>
      </section>

      {/* Industries Grid */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {industries.map((industry) => (
              <div
                key={industry.title}
                className="border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-[#081C15] mb-5">
                  {industry.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {industry.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#081C15] text-white text-center">

        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-5xl font-bold">
            Looking for Industry-Specific Talent?
          </h2>

          <p className="text-xl text-gray-300 mt-8 leading-9">
            Our consultants understand your market and can connect you with
            professionals who deliver measurable results.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Book Consultation
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Industries;