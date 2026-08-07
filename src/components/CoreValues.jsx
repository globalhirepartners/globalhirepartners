const values = [
  {
    title: "Integrity",
    description:
      "We build lasting partnerships through honesty, transparency and ethical recruitment practices.",
  },
  {
    title: "Excellence",
    description:
      "Every search is executed with precision, professionalism and uncompromising quality.",
  },
  {
    title: "Global Reach",
    description:
      "Connecting exceptional professionals with organizations across international markets.",
  },
  {
    title: "Partnership",
    description:
      "We work as an extension of our clients' hiring teams to achieve long-term success.",
  },
  {
    title: "Innovation",
    description:
      "Using modern recruitment strategies and technology to identify outstanding talent.",
  },
  {
    title: "Results",
    description:
      "Our focus is delivering measurable hiring success that drives business growth.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-yellow-500 font-semibold">
            Our Core Values
          </p>

          <h2 className="text-5xl font-bold text-[#081C15] mt-4">
            The Principles That Define Our Work
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 leading-8">
            Our values shape every client partnership, every candidate experience,
            and every successful placement.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((value) => (

            <div
              key={value.title}
              className="rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-[#081C15] mb-5">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-8">
                {value.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}