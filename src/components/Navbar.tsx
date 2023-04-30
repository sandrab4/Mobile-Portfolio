import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-screen h-16 bg-black">
      <ul className="flex justify-end items-center pt-4">
        <Link href="/">
          <li className="mr-6 text-white uppercase hover:text-gray-500">
            Home
          </li>
        </Link>
        <Link href="/about">
          <li className="mr-6 text-white uppercase hover:text-gray-500">
            About
          </li>
        </Link>
        <Link href="/skills">
          <li className="mr-6 text-white uppercase hover:text-gray-500">
            Skills
          </li>
        </Link>
        <Link href="/projects">
          <li className="mr-6 text-white uppercase hover:text-gray-500">
            Projects
          </li>
        </Link>
        <Link href="/contact">
          <li className="mr-6 text-white uppercase hover:text-gray-500">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
