function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      text: "Global Hire Partners helped us recruit exceptional talent quickly and professionally.",
    },
    {
      name: "David Williams",
      role: "Software Engineer",
      text: "The recruitment process was smooth, transparent, and resulted in an amazing opportunity.",
    },
    {
      name: "Emily Brown",
      role: "Operations Manager",
      text: "Professional, responsive, and committed to finding the right fit for our organization.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-4">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Building long-term partnerships through trust and excellence.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <p className="text-gray-600 italic mb-6">
                "{review.text}"
              </p>

              <h3 className="font-bold text-lg">
                {review.name}
              </h3>

              <p className="text-yellow-600 text-sm">
                {review.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;