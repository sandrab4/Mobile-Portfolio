"use client"
import React from "react";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Misplaced",
    description:
      "Misplaced is a digitalized lost and found platform for TU students to retrieve lost items by posting information through an intuitive React Native UI and connecting with potential finders. Utilizes MERN stack and Google Cloud APIs.",
    video: "/misplacedDemo.mp4",
    github: "https://github.com/misplaced-dev/misplaced",
    link: "https://misplaced.app",
  },
  {
    name: "Debre Tsion Website",
    description: "A website for Debre Tsion Church made by a team of 7 student developers to give back to our childhood church. Created with MEAN stack and TypeScript. (In Progress)",
    video: "/",
    github: "https://github.com/DebreTsionWeb/Website",
    link: "",
  },
  {
    name: "Task App",
    description: "This is a to-do list app that I built using React Native.",
    video: "/taskAppDemo.mp4",
    github: "https://github.com/sandrab4/TaskApp",
    link: "https://task-app-sandrab4.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl text-black">
        Projects
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <div className="video-container rounded-xl">
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          className="video-element"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-black">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 text-black">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .video-container {
          position: relative;
          padding-bottom: 80%;
          overflow: hidden;
        }

        .video-element {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Projects;
