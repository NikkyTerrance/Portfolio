import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Serverless Tor-DHT Encrypted Chat Application",
    description: "A secure, decentralized chat app leveraging the Tor network and Distributed Hash Table (DHT) technology to enable encrypted, peer-to-peer messaging without relying on central servers.",
    image: "/Projects/Project1.png",
    tags: ["TOR", "Python", "Cybersecurity"],
    demoUrl: "#",
    githubUrl: "https://github.com/NikkyTerrance/CloakChat",
  },
  {
    id: 2,
    title: "CryptoGuard",
    description:
      "Inspired by Learning With Errors (LWE), this project integrates double ratcheting to enhance security in a web-based chat application, aiming to provide quantum-resistant encrypted communication for the future.",
    image: "/Projects/Project2.png",
    tags: ["JavaScript", "Encryption", "LWE"],
    demoUrl: "https://cryptoguard-1tfn.onrender.com/",
    githubUrl: "https://github.com/NikkyTerrance/CryptoGuard",
  },
  {
    id: 3,
    title: "Proof of Concept CVE-2020-0796",
    description:
      "Created a proof-of-concept exploit for CVE-2020-0796 (SMBGhost) showing remote code execution on vulnerable Windows 11 systems.",
    image: "/Projects/Project3.png",
    tags: ["Python", "Pentest", "CVE-2020-0796"],
    demoUrl: "#",
    githubUrl: "https://github.com/NikkyTerrance",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
         Here are some of my recent cybersecurity projects. 
          Each one was meticulously developed with a focus on robust security, efficient performance, and seamless user protection.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NikkyTerrance"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};