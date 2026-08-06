function Hero() {
  return (
    <section className="bg-blue-900 text-white text-center py-24 px-8">

      <p className="text-yellow-400 font-bold tracking-[4px]">
        GLOBAL RECRUITMENT PARTNER
      </p>

      <h1 className="text-6xl font-bold mt-6 leading-tight">
        Connecting Exceptional Talent
        <br />
        With Global Employers
      </h1>

      <p className="max-w-3xl mx-auto mt-8 text-xl leading-9">
        We help professionals discover career opportunities while helping
        organizations hire outstanding talent across multiple industries
        worldwide.
      </p>

      <div className="mt-12 flex justify-center gap-6">

        <button className="bg-yellow-400 text-blue-950 px-8 py-4 rounded-lg font-bold">
          Explore Opportunities
        </button>

        <button className="border-2 border-white px-8 py-4 rounded-lg">
          Employers
        </button>

      </div>

    </section>
  );
}

export default Hero;