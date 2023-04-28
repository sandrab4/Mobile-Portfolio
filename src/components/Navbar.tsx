import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full top-0 bg-white shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-12 px-2 2xl:px-16">
        <div>
          <ul className="hidden md:flex space-x-6 ml-auto justify-end">
            <Link href="/">
              <li className="text-sm uppercase hover:border-b text-black">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b text-black">
                About
              </li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b text-black">
                Skills
              </li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b text-black">
                Projects
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b text-black">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
