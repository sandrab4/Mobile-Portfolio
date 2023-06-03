import React from "react";

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <div className="my-12 pb-12 md:pt-16 md:pb-48 mb-80">
        <h1 className="text-center font-bold text-4xl text-black">Skills</h1>
        <div className="flex justify-center items-center md:space-x-10 flex-wrap mt-20">
          <div className="text-center text-black">
            <img src="reactIcon.png" alt="React Icon" style={{ width: "100%", height: "90px" }} />
            <p className="mt-2">React</p>
          </div>
          <div className="text-center text-black">
            <img src="reactIcon.png" alt="React Icon" style={{ width: "100%", height: "90px" }} />
            <p className="mt-2">React Native</p>
          </div>
          <div className="text-center text-black">
            <img src="nextjsIcon.png" alt="Next.js Icon" style={{ width: "100%", height: "90px" }} />
            <p className="mt-2">Next.js</p>
          </div>
          <div className="text-center text-black">
            <img src="angularIcon.svg" alt="Angular Icon" style={{ width: "100%", height: "90px" }} />
            <p className="mt-2">Angular</p>
          </div>
          <div className="text-center text-black">
            <img src="typescriptIcon.png" alt="TypeScript Icon" style={{ width: "100%", height: "90px" }} />
            <p className="mt-2">TypeScript</p>
          </div>
          <div className="text-center text-black">
            <img src="javascriptIcon.png" alt="JavaScript Icon" style={{ width: "100%", height: "90px" }} />
            <p className="mt-2">JavaScript</p>
          </div>
        </div>
        <div className="flex justify-center space-x-5 md:space-x-10 mt-8">
        <div className="text-center text-black">
            <img src="nodejsIcon.png" alt="Node.js Icon" style={{ width: "50px", height: "50px" }} />
            <p>Node.js</p>
          </div>
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
            <p>Tailwind</p>
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
