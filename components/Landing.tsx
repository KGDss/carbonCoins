"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const Landing = () => {
  const { scrollY } = useScroll();
  return (
    <main className="">
      <div className="w-full pt-72 sm:pt-84">
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
                rotate: scrollY,
              }}
            />
            <div className="flex justify-center text-4xl sm:text-6xl md:text-7xl mb-8 lg:text-7xl  xl:text-8xl 2xl:mb-0 font-bold absolute">
              HOW IT WORKS
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Landing;
