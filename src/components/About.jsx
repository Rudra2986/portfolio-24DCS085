function About({ college }) {
  return (
    <section className="card">
      <h2>About Me</h2>

      <p>
        Hello! I'm Rudra Patel, a Computer Science Engineering student who loves
        building AI-powered applications and modern web projects.
      </p>

      <p>
        Currently pursuing my degree at <strong>{college}</strong>.
      </p>

      <p>
        My goal is to become an AI/ML Engineer while creating useful software
        that solves real-world problems.
      </p>
    </section>
  );
}

export default About;