import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import "./Hero.css";
import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const [cameraPos, setCameraPos] = useState([0, 2, 5]);
  const [cameraFov, setCameraFov] = useState(10);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        // smaller screens: move camera further back and increase FOV for better view
        setCameraPos([0, 2, 8]);
        setCameraFov(8);
      } else {
        // default desktop
        setCameraPos([0, 2, 8]);
        setCameraFov(8);
      }
    }

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="hero-wrapper" id="hero">


       {/* 3D Avatar Layer */}
      {/* <Canvas shadows camera={{ position: [0, 2, 5], fov: 10 }}> */}
      <Canvas shadows camera={{ position: cameraPos, fov: cameraFov }}>

        {/* <color attach="background" args={["#0d0d0d"]} /> */}
        <Experience />
      </Canvas>


      {/* UI Layer */}
      <div className="hero-ui text-center">
        <h1 className="hero-title">Nikshiterance</h1>
        <p className="hero-desc text-center">
          Cybersecurity & 3D Web Developer <br />
          Building immersive, secure digital worlds.
        </p>
      </div>

    
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

     
    </section>
  );
};
