import { Star } from "lucide-react";
import { StarBackground } from "./StarBackground";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";

export const Home = () => {
    return (
        <div className="min-h-screen">

            {/* Background effects */}
            <StarBackground />
            <Navbar />
            <main>
                <Hero />
            </main>
            
        </div>
    );
};