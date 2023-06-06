"use client";
import { useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';

const ParallaxComponent = () => {
  const { y } = useWindowScroll();
  const parallaxRef = useRef<HTMLImageElement>(null); 

  useEffect(() => {
    const parallax = parallaxRef.current;

    const parallaxEffect = () => {
      if (parallax) {
        parallax.style.transform = `translateY(${y * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', parallaxEffect);
    return () => {
      window.removeEventListener('scroll', parallaxEffect);
    };
  }, [y]);

  return (
    <div className="relative">
      <div ref={parallaxRef} className="absolute top-0 left-0 w-full h-full">
        <img
          className="absolute top-0 left-0 w-full h-auto"
          src="left.png"
          alt="Cherry Blossom Branch 1"
        />
        <img
          className="relative w-full h-auto"
          src="right.png"
          alt="Cherry Blossom Branch 2"
        />
      </div>
    </div>
  );
};

export default ParallaxComponent;
