import React from 'react';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

const Contact = () => {
  return (
    <section id="contact" className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl text-black transform hover:scale-110 transition-all duration-300">
        Contact Me!
      </h1>
      <div className="flex justify-center pt-20">
        <a href="https://mail.google.com/mail?view=cm&fs=1&to=barrongsandra@gmail.com&su=Draft" target="_blank">
          <AiOutlineMail className="w-16 h-16 text-black hover:text-white duration-300 hover:-translate-y-1 transition-transform cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/sandrabarron4/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-14 hover:-translate-y-1 transition-transform cursor-pointer"
        >
          <AiOutlineLinkedin className="w-16 h-16 text-black hover:text-white transition-all duration-300"/>
        </a>
        <a
          href="https://github.com/sandrab4"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-1 hover:-translate-y-1 transition-transform cursor-pointer"
        >
          <AiOutlineGithub className="w-16 h-16 text-black hover:text-white transition-all duration-300"/>
        </a>
      </div>
    </section>
  );
};

export default Contact;
