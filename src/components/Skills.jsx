function Skills({ skills }) {
  return (
    <section className="box">
      <h2>Technical Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;