import React from "react";
import reactIcon from "./reactIcon.png";
import nextjsIcon from "./nextjsIcon.png";
import nodejsIcon from "./nodejsIcon.png";
import typescriptIcon from "./typescriptIcon.png";
import javascriptIcon from "./javascriptIcon.png";
import gitIcon from "./gitIcon.png";
import expoIcon from "./expoIcon.png";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 mb-80">
        <h1 className="text-center font-bold text-4xl text-black">Skills</h1>
        <div className="flex justify-center space-x-10 md:space-x-20 flex-wrap">
          <div className="text-center text-black">
            <img src="reactIcon.png" alt="React Icon" style={{ width: "100px", height: "90px" }} />
            <p>React</p>
          </div>
          <div className="text-center text-black">
            <img src="nextjsIcon.png" alt="Next.js Icon" style={{ width: "100px", height: "90px" }} />
            <p>Next.js</p>
          </div>
          <div className="text-center text-black">
            <img src="nodejsIcon.png" alt="Node.js Icon" style={{ width: "100px", height: "90px" }} />
            <p>Node.js</p>
          </div>
          <div className="text-center text-black">
            <img src="typescriptIcon.png" alt="TypeScript Icon" style={{ width: "100px", height: "90px" }} />
            <p>TypeScript</p>
          </div>
          <div className="text-center text-black">
            <img src="javascriptIcon.png" alt="JavaScript Icon" style={{ width: "100px", height: "90px" }} />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="flex justify-center space-x-10 md:space-x-20 mt-8">
          <div className="text-center text-black">
            <img src="gitIcon.png" alt="Git Icon" style={{ width: "50px", height: "50px" }} />
            <p>Git</p>
          </div>
          <div className="text-center text-black">
            <img src="expoIcon.png" alt="Expo Icon" style={{ width: "50px", height: "50px" }} />
            <p>Expo</p>
          </div>
          <div className="text-center text-black">
            <img src="figmaIcon.png" alt="Figma Icon" style={{ width: "50px", height: "50px" }} />
            <p>Figma</p>
          </div>
          <div className="text-center text-black">
            <img src="tailwindcssIcon.png" alt="Tailwind Css Icon" style={{ width: "50px", height: "50px" }} />
            <p>Tailwind Css</p>
          </div>
          <div className="text-center text-black">
            <img src="htmlIcon.png" alt="Html Icon" style={{ width: "50px", height: "50px" }} />
            <p>Html</p>
          </div>
          <div className="text-center text-black">
            <img src="cssIcon.png" alt="Css Icon" style={{ width: "50px", height: "50px" }} />
            <p>Css</p>
          </div>
          <div className="text-center text-black">
            <img src="blenderIcon.png" alt="Blender Icon" style={{ width: "50px", height: "50px" }} />
            <p>Blender</p>
          </div>
          <div className="text-center text-black">
            <img src="xcodeIcon.png" alt="Xcode Icon" style={{ width: "50px", height: "50px" }} />
            <p>Xcode</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
