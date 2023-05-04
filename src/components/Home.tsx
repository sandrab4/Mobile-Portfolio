"use client"
import React from "react";
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi";
import Image from "next/image"

const Home = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left mt-5 md:mt-12">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/picbg.png"
            alt=""
            width={300}
            height={325}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>
        <div className="md:mt-1 md:w-3/5">
          <h1 className="text-2xl font-bold mt-20 md:mt-0 md:text-4xl md:ml-60 text-black">Sandra Barron</h1>
          <p className="md:text-2xl md:ml-60 text-black">Web Developer</p>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce text-black" />
        </Link>
      </div>
    </section>
  );
};

export default Home;
