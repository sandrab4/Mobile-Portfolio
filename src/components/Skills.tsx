import React from "react";
import reactIcon from "./reactIcon.png";
import nextjsIcon from "./nextjsIcon.png";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-black">Skills</h1>
        <img src="reactIcon.png" alt="React Icon" style={{ width: "100px", height: "90px" }}  />
        <p className="text-black">
          React icon, Next.js icon, Node.js icon, TypeScript icon, JavaScript icon
        </p>
        <p>SMALLICONS git, expo, figma, tailwind css, html, css blender, xcode</p>
      </div>
    </section>
  );
};

export default Skills;