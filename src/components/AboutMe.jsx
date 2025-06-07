import React from "react";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <section className="about-wrapper">
      {/* UI Layer */}
      <div className="about-ui">
        <h1 className="about-title">About Me</h1>
        <p className="about-desc">
          I’m Nikshiterance — a Cybersecurity student and 3D Web Developer.<br />
          Passionate about building immersive, secure digital worlds through modern technologies.<br />
          Skilled in ethical hacking, serverless apps, and creative web experiences.
        </p>
      </div>
    </section>
  );
};
