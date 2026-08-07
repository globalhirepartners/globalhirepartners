import MainLayout from "../layouts/MainLayout";

function Employers() {
  const benefits = [
    {
      title: "Executive Search",
      text: "Specialized recruitment for senior leadership and business-critical positions.",
    },
    {
      title: "Global Talent Network",
      text: "Access to qualified professionals across international markets and industries.",
    },
    {
      title: "Quality-First Hiring",
      text: "Every candidate is carefully assessed for technical expertise and cultural fit.",
    },
    {
      title: "Faster Recruitment",
      text: "Efficient hiring processes that reduce time-to-hire without compromising quality.",
    },
    {
      title: "Industry Specialists",
      text: "Recruitment expertise across Technology, Finance, Healthcare, Energy and Manufacturing.",
    },
    {
      title: "Long-Term Partnership",
      text: "We become an extension of your hiring team, supporting sustainable business growth.",
    },
  ];

  const process = [
    "Consultation",
    "Search Strategy",
    "Candidate Sourcing",
    "Assessment",
    "Client Interviews",
    "Successful Placement",
  ];

  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-[#081C15] text-white py-28">
        <div className="max-w-7xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Employers
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Build Exceptional Teams with Confidence
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 leading-9">
            We help organizations identify, attract and secure exceptional
            professionals who drive long-term business success.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Book Consultation
          </button>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
              Why Employers Choose Us
            </p>

            <h2 className="text-4xl font-bold text-[#081C15] mt-5">
              Recruitment Built Around Your Business
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold text-[#081C15] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Recruitment Process */}

      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
              Our Recruitment Process
            </p>

            <h2 className="text-4xl font-bold text-[#081C15] mt-5">
              A Proven Hiring Journey
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {process.map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >
                <div className="text-yellow-500 text-5xl font-bold mb-6">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-bold text-[#081C15]">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-24 bg-[#081C15] text-white text-center">

        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-5xl font-bold">
            Ready to Hire Exceptional Talent?
          </h2>

          <p className="text-xl text-gray-300 mt-8 leading-9">
            Partner with Global Hire Partners and build a workforce
            that drives long-term business success.
          </p>

          <button className="mt-10 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold transition">
            Book Consultation
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Employers;