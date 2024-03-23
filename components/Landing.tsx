"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rotationFactor = 0.35; //
  return (
    <main className="w-full pt-72 sm:pt-84">
      <div className="w-full flex-col  ">
        <h1 className="flex justify-center text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-8xl font-bold">
          CARBON COINS
        </h1>
        <span className="flex justify-center text-2xs sm:text-sm md:text-base lg:text-base  xl:text-base font-medium  ">
          Empowering Sustainability Through Carbon Credits Token
        </span>
      </div>
      <div className="relative">
        <div className="flex justify-center items-end">
          <motion.img
            src="/earth.svg"
            alt="earth"
            height={600}
            width={600}
            style={{
              transform: `rotate(${scrollY * rotationFactor}deg)`, // Rotate based on scroll position
            }}
          />

          <div
            id="howitworks"
            className="flex justify-center text-4xl sm:text-6xl md:text-7xl mb-8 lg:text-7xl  xl:text-8xl 2xl:mb-0 font-bold absolute"
          >
            HOW IT WORKS
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
