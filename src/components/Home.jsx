import { Contact, Star } from "lucide-react";
import { StarBackground } from "./StarBackground";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./footer";


export const Home = () => {
    return (
        <div className="min-h-screen">

            {/* Background effects */}
            <StarBackground />
            <Navbar />
            <main>
                <Hero />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            <Footer />
            
        </div>
    );
};