function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Vite.",
      technologies: ["React", "CSS", "Vite"]
    },
    {
      id: 2,
      title: "Machine Learning Model",
      description: "A predictive model for house prices.",
      technologies: ["Python", "Scikit-Learn", "Pandas"]
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A full-stack app for managing daily tasks.",
      technologies: ["MERN Stack", "Express", "Node.js"]
    }
  ];

  return (
    <div className="container projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
