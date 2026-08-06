function TrustedBy() {
  const industries = [
    "Technology",
    "Finance",
    "Healthcare",
    "Engineering",
    "Energy",
    "Executive Search",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <p className="text-center uppercase tracking-[5px] text-yellow-600 font-semibold mb-5">
          Industries We Serve
        </p>

        <h2 className="text-center text-4xl font-bold text-gray-900 mb-14">
          Recruitment Expertise Across Multiple Industries
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {industries.map((industry) => (

            <div
              key={industry}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >

              <h3 className="font-semibold text-gray-700">
                {industry}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedBy;