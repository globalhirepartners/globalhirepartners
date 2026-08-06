import { Link } from "react-router-dom";

function FeaturedServices() {
  const services = [
    {
      title: "Executive Recruitment",
      text: "Finding senior leaders and executives for global organizations.",
    },
    {
      title: "Permanent Hiring",
      text: "Connecting businesses with exceptional long-term talent.",
    },
    {
      title: "Global Talent Search",
      text: "Recruiting professionals across international markets.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Services
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Recruitment solutions designed for modern organizations.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-2xl bg-gray-50 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-8">
                {service.text}
              </p>

              <Link
                to="/services"
                className="text-yellow-600 font-semibold"
              >
                Learn More →
              </Link>

            </div>

          ))}

        </div>

        <div className="text-center mt-14">

          <Link
            to="/services"
            className="bg-yellow-500 px-8 py-4 rounded-xl font-bold text-black hover:bg-yellow-400 transition"
          >
            View All Services
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FeaturedServices;