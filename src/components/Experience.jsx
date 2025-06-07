
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar.jsx";
import React from "react";

export const Experience = () => {
  return (
    <>
      
     <group position-y={-1.5}> 
      <Avatar />
      </group>
      <ambientLight intensity={1} />
      <directionalLight position={[0.5, 1.5, 2.5]} intensity={1} />
    </>
  );
};
