import { Canvas, extend } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import {AboutMe} from "./components/AboutMe";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <color attach="background" args={["#0d0d0d"]} />
      <Hero />
      <AboutMe/>
      <Projects />

    </>
  );
}

export default App;
