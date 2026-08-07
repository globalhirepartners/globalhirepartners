import MainLayout from "../layouts/MainLayout";

function Contact() {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="bg-[#081C15] text-white py-28">
        <div className="max-w-6xl mx-auto px-8 text-center">

          <p className="uppercase tracking-[5px] text-yellow-400 font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl font-bold mt-6">
            Let's Build Your Workforce Together
          </h1>

          <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto leading-9">
            Whether you're hiring exceptional talent or exploring your next
            career opportunity, we'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>

            <h2 className="text-4xl font-bold text-[#081C15]">
              Get In Touch
            </h2>

            <p className="text-gray-600 mt-8 leading-8">
              Our consultants are ready to discuss your recruitment needs,
              executive search requirements, or career opportunities.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <h3 className="font-bold text-xl text-[#081C15]">
                  Email
                </h3>

                <p className="text-gray-600">
                  info@globalhirepartners.site
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#081C15]">
                  Recruitment Coverage
                </h3>

                <p className="text-gray-600">
                  North America • Europe • Middle East • Africa • Asia
                </p>
              </div>

              <div>
                <h3 className="font-bold text-xl text-[#081C15]">
                  Response Time
                </h3>

                <p className="text-gray-600">
                  Within 12 Business Hours
                </p>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="bg-[#F8F9FA] rounded-3xl p-10 shadow-lg">

            <h2 className="text-3xl font-bold text-[#081C15] mb-8">
              Send Us A Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full p-4 rounded-xl border"
              />

              <textarea
                rows="6"
                placeholder="Tell us how we can help..."
                className="w-full p-4 rounded-xl border"
              ></textarea>

              <button
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Contact;