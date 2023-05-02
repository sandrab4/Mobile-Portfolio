import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-screen h-14 bg-black">
      <ul className="flex justify-end items-center pt-5">
        <li id="navbar-home" className="flex-shrink px-5">
          <a href="/" id="home">Home</a>
        </li>
        <li id="navbar-experience" className="flex-shrink px-5">
          <a href="/" id="experience">Skills</a>
        </li>
        <li id="navbar-projects" className="flex-shrink px-5">
          <a href="/" id="projects">Projects</a>
        </li>
        <li id="navbar-contact" className="flex-shrink px-5">
          <a href="/" id="contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
