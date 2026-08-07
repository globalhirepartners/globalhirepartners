import MainLayout from "../layouts/MainLayout";

function Candidates() {
  const benefits = [
    {
      title: "Exclusive Opportunities",
      description:
        "Access career opportunities that are not always publicly advertised.",
    },
    {
      title: "International Careers",
      description:
        "Connect with employers across North America, Europe, the Middle East, Africa, and Asia.",
    },
    {
      title: "Confidential Search",
      description:
        "Your career transition is handled with complete discretion and professionalism.",
    },
    {
      title: "Career Guidance",
      description:
        "Receive practical advice and support throughout your recruitment journey.",
    },
    {
      title: "Personalized Matching",
      description:
        "We align your skills, experience, and aspirations with the right employers.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "Our relationship continues beyond placement as we support your long-term career growth.",
    },
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Engineering",
    "Manufacturing",
    "Energy",
    "Professional Services",
    "Executive Leadership",
  ];

  const journey = [
    "Submit Your CV",
    "CV Review",
    "Recruiter Consultation",
    "Employer Introduction",
    "Interview Support",
    "Successful Placement",
  ];

  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-[#081C15] text-white py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Candidates
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Helping Professionals Build Meaningful Careers
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-9">
            Whether you're pursuing your next leadership role or exploring
            international opportunities, we're here to connect you with employers
            who value exceptional talent.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Submit Your CV
          </button>

        </div>
      </section>

      {/* Why Candidates Choose Us */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
              Why Candidates Choose Us
            </p>

            <h2 className="text-4xl font-bold text-[#081C15] mt-5">
              Your Career Is More Than Your Next Job
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-[#081C15] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Industries */}

      <section className="py-24 bg-[#F8F9FA]">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
              Industries
            </p>

            <h2 className="text-4xl font-bold text-[#081C15] mt-5">
              Opportunities Across Multiple Industries
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center"
              >
                <h3 className="font-semibold text-lg text-[#081C15]">
                  {industry}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Candidate Journey */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
              Candidate Journey
            </p>

            <h2 className="text-4xl font-bold text-[#081C15] mt-5">
              Your Recruitment Journey
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {journey.map((step, index) => (
              <div
                key={step}
                className="border rounded-3xl p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl font-bold text-yellow-500 mb-6">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-semibold text-[#081C15]">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#081C15] py-24 text-center text-white">

        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-5xl font-bold">
            Ready for Your Next Career Move?
          </h2>

          <p className="text-xl text-gray-300 mt-8 leading-9">
            Submit your CV today and let Global Hire Partners connect you
            with exceptional career opportunities.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Submit Your CV
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Candidates;