"use client"
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Skills",
    page: "skills",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.pageYOffset > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed flex-row top-0 z-50 shadow ${
        scrolling ? "bg-black bg-opacity-80" : "bg-black"
      }`}
    >
      <div className="flex flex-row justify-between items-center md:flex md:py-5">
        <div>
          <div className="flex justify-end">
            <Link to="home">
              <div className="container flex items-center"></div>
            </Link>
            <div className="md:hidden">
              <button
                className="pt-5 pl-5 text-white py-5"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            id="fontSize"
            className={`flex flex-shrink items-center md:block ${
              navbar ? "block" : "hidden"}`}
          >
            <div className="flex items-center flex-row">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "inline-block hover:text-neutral-500 text-neutral-100 px-3 md:px-3"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
