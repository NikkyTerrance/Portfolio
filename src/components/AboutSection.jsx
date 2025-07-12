import { Code, EyeOff, ShieldCheck, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Cybersecurity Enthusiast & Application Protector
            </h3>

            <p className="text-muted-foreground">
              With over 5 years of freelance experience in software engineering and web development, 
              I specialize in building responsive, accessible, and high-performance web applications 
              using modern frameworks and technologies. I am passionate about crafting elegant, 
              efficient solutions to complex challenges and continuously expanding my skillset 
              to keep pace with the fast-evolving tech landscape.
            </p>

            <p className="text-muted-foreground">
              I ventured into cybersecurity to deepen my understanding of securing the applications
               I build. With a focus on vulnerability assessment, threat mitigation, and robust security 
               implementation, I am dedicated to protecting systems and data from evolving threats. My goal 
               is to blend secure coding practices with modern development to create applications 
               that are both functional and safe.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Protecting systems and data through vulnerability assessment, 
                    threat analysis, and implementing robust security measures.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cyber Security</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <EyeOff className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Pen tester</h4>
                  <p className="text-muted-foreground">
                    Simulating cyber attacks to identify vulnerabilities before malicious 
                    actors can exploit them, ensuring systems are resilient and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};