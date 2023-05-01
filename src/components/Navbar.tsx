import Link from "next/link";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen h-14 bg-black">
      <ul className="flex justify-end items-center pt-5">
        <li className="mr-12 text-white uppercase hover:text-gray-500">
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </li>
        <li className="mr-12 text-white uppercase hover:text-gray-500">
          <ScrollLink to="skills" smooth={true} duration={500}>
            Skills
          </ScrollLink>
        </li>
        <li className="mr-12 text-white uppercase hover:text-gray-500">
          <ScrollLink to="projects" smooth={true} duration={500}>
            Projects
          </ScrollLink>
        </li>
        <li className="mr-12 text-white uppercase hover:text-gray-500">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
