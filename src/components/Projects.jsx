import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Serverless Chat App",
    description: "A privacy-focused messaging app using DHT & Tor, with self-destructing messages and metadata stripping.",
    github: "https://github.com/yourname/serverless-chat-app",
  },
  {
    title: "Lattice-Based Encryption",
    description: "A JavaScript-based encryption algorithm using LWE with custom scrambling steps.",
    github: "https://github.com/yourname/lattice-encryption",
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div className="meteor-layer">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="meteor" />
        ))}
      </div>



      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">
              <div className="card-front">
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="card-back">
                <p className="project-desc">{project.description}</p>
                <a
                  className="project-btn"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
