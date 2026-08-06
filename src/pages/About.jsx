import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">

          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.3em] text-yellow-600 font-semibold mb-4">
              About Global Hire Partners
            </p>

            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
              Connecting Exceptional Talent With Global Opportunities.
            </h1>

            <p className="text-xl text-gray-600 leading-8">
              Global Hire Partners is an international recruitment and talent
              solutions company dedicated to helping organizations hire
              exceptional professionals while supporting candidates in finding
              meaningful careers across global markets.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Our Mission
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                We believe that great businesses are built by exceptional
                people. Our mission is to connect employers with highly skilled
                professionals through a recruitment process built on quality,
                transparency and long-term partnerships.
              </p>

              <p className="text-gray-600 leading-8">
                Whether you're expanding your workforce or searching for your
                next career opportunity, we deliver recruitment solutions that
                create lasting value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">
                  500+
                </h3>
                <p className="text-gray-600">
                  Candidates Placed
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">
                  40+
                </h3>
                <p className="text-gray-600">
                  Industries Served
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">
                  Global
                </h3>
                <p className="text-gray-600">
                  Recruitment Network
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                <h3 className="text-4xl font-bold text-yellow-600 mb-2">
                  Trusted
                </h3>
                <p className="text-gray-600">
                  Recruitment Partner
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </MainLayout>
  );
}

export default About;