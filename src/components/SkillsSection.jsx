import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
//   // Frontend
//   { name: "HTML/CSS", level: 95, category: "frontend" },
//   { name: "JavaScript", level: 90, category: "frontend" },
//   { name: "React", level: 90, category: "frontend" },
//   { name: "TypeScript", level: 85, category: "frontend" },
//   { name: "Tailwind CSS", level: 90, category: "frontend" },
//   { name: "Next.js", level: 80, category: "frontend" },

//   // Backend
//   { name: "Node.js", level: 80, category: "backend" },
//   { name: "Express", level: 75, category: "backend" },
//   { name: "MongoDB", level: 70, category: "backend" },
//   { name: "PostgreSQL", level: 65, category: "backend" },
//   { name: "GraphQL", level: 60, category: "backend" },

//   // Tools
//   { name: "Git/GitHub", level: 90, category: "tools" },
//   { name: "Docker", level: 70, category: "tools" },
//   { name: "Figma", level: 85, category: "tools" },
//   { name: "VS Code", level: 95, category: "tools" },

// Frontend + Backend
  { name: "HTML/CSS", level: 95, category: "web development" },
  { name: "JavaScript", level: 90, category: "web development" },
  { name: "React", level: 90, category: "web development" },
  { name: "TypeScript", level: 85, category: "web development" },
  { name: "Tailwind CSS", level: 90, category: "web development" },
  { name: "Next.js", level: 80, category: "web development" },
  { name: "Node.js", level: 80, category: "web development" },
  { name: "Express", level: 75, category: "web development" },
  { name: "MongoDB", level: 80, category: "web development" },
  { name: "PostgreSQL", level: 75, category: "web development" },
  { name: "GraphQL", level: 78, category: "web development" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  // Cybersecurity
  { name: "Network Security", level: 85, category: "cybersecurity" },
  { name: "Cryptography", level: 80, category: "cybersecurity" },
  { name: "Vulnerability Assessment", level: 82, category: "cybersecurity" },
  { name: "Security Monitoring", level: 78, category: "cybersecurity" },
  { name: "Incident Response", level: 80, category: "cybersecurity" },
  { name: "Python", level: 80, category: ["cybersecurity", "pen testing", "osint"]},

  // Pen Testing
  { name: "Port Scanning", level: 85, category: "pen testing" },
  { name: "Metasploit", level: 80, category: "pen testing" },
  { name: "Wireshark", level: 82, category: "pen testing" },
  { name: "Burp Suite", level: 85, category: "pen testing" },
  { name: "Nmap", level: 88, category: "pen testing" },
  

  // OSINT (Open Source Intelligence)
  { name: "Maltego", level: 80, category: "osint" },
  { name: "Shodan", level: 85, category: "osint" },
  { name: "TheHarvester", level: 82, category: "osint" },
  { name: "Recon-ng", level: 78, category: "osint" },
  { name: "Google Dorking", level: 88, category: "osint" },
];

const categories = ["cybersecurity",   "pen testing","osint","web development","tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("cybersecurity");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};