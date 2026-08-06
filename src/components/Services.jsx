function Services() {
  return (
    <section
      style={{
        padding: "80px 40px",
        background: "#F8FAFC",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          color: "#0B1F3A",
          marginBottom: "15px",
        }}
      >
        Our Recruitment Services
      </h2>

      <p
        style={{
          color: "#64748B",
          maxWidth: "700px",
          margin: "0 auto 60px",
        }}
      >
        We provide world-class recruitment and workforce solutions for
        employers and professionals globally.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {[
          "Executive Recruitment",
          "Permanent Hiring",
          "Contract Staffing",
          "Global Talent Acquisition",
          "Workforce Solutions",
          "Career Placement",
        ].map((service) => (
          <div
            key={service}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              transition: "0.3s",
            }}
          >
            <h3>{service}</h3>

            <p style={{ color: "#64748B" }}>
              Premium recruitment solution tailored for global businesses.
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "#D4AF37",
                border: "none",
                padding: "12px 28px",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;