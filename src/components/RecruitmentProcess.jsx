const steps = [
  {
    number: "01",
    title: "Discovery",
    text: "We begin by understanding your hiring goals, culture, and business needs.",
  },
  {
    number: "02",
    title: "Talent Search",
    text: "Our recruiters identify and engage high-calibre professionals from our global network.",
  },
  {
    number: "03",
    title: "Assessment",
    text: "Candidates are screened and evaluated to ensure technical ability and cultural fit.",
  },
  {
    number: "04",
    title: "Client Interviews",
    text: "We coordinate interviews and provide guidance throughout the selection process.",
  },
  {
    number: "05",
    title: "Offer Management",
    text: "We assist with negotiations to ensure a smooth hiring experience for both parties.",
  },
  {
    number: "06",
    title: "Successful Placement",
    text: "We continue supporting both client and candidate beyond the hiring stage.",
  },
];

export default function RecruitmentProcess() {
  return (
    <section className="py-24 bg-[#081C15] text-white">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Our Process
          </p>

          <h2 className="text-5xl font-bold mt-4">
            A Structured Recruitment Journey
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {steps.map((step) => (
            <div
              key={step.number}
              className="border border-[#1f4737] rounded-3xl p-8 hover:border-yellow-400 transition duration-300"
            >
              <div className="text-5xl font-bold text-yellow-400 mb-6">
                {step.number}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {step.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}