import React from "react";
import reactIcon from "./reactIcon.png";
import nextjsIcon from "./nextjsIcon.png";
import nodejsIcon from "./nodejsIcon.png";
import typescriptIcon from "./typescriptIcon.png";
import javascriptIcon from "./javascriptIcon.png";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl text-black">Skills</h1>
        <div className="flex justify-center space-x-12 md:space-x-20 flex-wrap">
          <div className="text-center text-black">
            <img src="reactIcon.png" alt="React Icon" style={{ width: "100px", height: "90px" }} />
            <p>React</p>
          </div>
          <div className="text-center text-black">
            <img src="nextjsIcon.png" alt="Nextjs Icon" style={{ width: "100px", height: "90px" }} />
            <p>Next.js</p>
          </div>
          <div className="text-center text-black">
            <img src="nodejsIcon.png" alt="Nodejs Icon" style={{ width: "100px", height: "90px" }} />
            <p>Node.js</p>
          </div>
          <div className="text-center text-black">
            <img src="typescriptIcon.png" alt="Typescript Icon" style={{ width: "100px", height: "90px" }} />
            <p>TypeScript</p>
          </div>
          <div className="text-center text-black">
            <img src="javascriptIcon.png" alt="Javascript Icon" style={{ width: "100px", height: "90px" }} />
            <p>JavaScript</p>
          </div>
        </div>
        <p>SMALL ICONS git, expo, figma, tailwind css, html, css blender, xcode</p>
      </div>
    </section>
  );
};

export default Skills;
