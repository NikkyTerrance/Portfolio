import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* UI Layer */}
      <div className="hero-ui">
        <h1 className="hero-title">Nikshiterance</h1>
        <p className="hero-desc">
          Cybersecurity & 3D Web Developer <br />
          Building immersive, secure digital worlds.
        </p>
      </div>

      {/* 3D Avatar Layer */}
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 10 }}>
        <color attach="background" args={["#0d0d0d"]} />
        <Experience />
      </Canvas>
    </section>
  );
};
