function About() {
  return (
    <section
      style={{
        padding: "100px 60px",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* LEFT */}

        <div>
          <p
            style={{
              color: "#D4AF37",
              letterSpacing: "3px",
              fontWeight: "bold",
            }}
          >
            ABOUT GLOBAL HIRE PARTNERS
          </p>

          <h2
            style={{
              fontSize: "46px",
              color: "#0B1F3A",
              marginTop: "20px",
            }}
          >
            Connecting Talent.
            <br />
            Empowering Businesses.
          </h2>

          <p
            style={{
              marginTop: "30px",
              color: "#64748B",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            Global Hire Partners is a modern recruitment and talent acquisition
            company dedicated to connecting exceptional professionals with
            leading employers worldwide.

            <br /><br />

            From executive recruitment and workforce solutions to international
            hiring and career placement, we help organizations build stronger
            teams while helping professionals discover meaningful opportunities.
          </p>

          <button
            style={{
              marginTop: "40px",
              background: "#D4AF37",
              color: "#0B1F3A",
              border: "none",
              padding: "15px 35px",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>

        {/* RIGHT */}

        <div
          style={{
            background: "#E8EEF9",
            borderRadius: "20px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "26px",
            color: "#0B1F3A",
            fontWeight: "bold",
          }}
        >
          Company Image Here
        </div>
      </div>
    </section>
  );
}

export default About;