"use client";
import { imgCarousel } from "@/constants";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";

const AboutMe = () => {
  const handleClick = () => {};
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [gapSize, setGapSize] = useState(64); // Default gap size

  // Dynamically adjust gap size based on screen width
  useEffect(() => {
    const updateGapSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1536) setGapSize(80);
      else if (screenWidth >= 1280) setGapSize(64);
      else if (screenWidth >= 1024) setGapSize(48);
      else if (screenWidth >= 768) setGapSize(32);
      else if (screenWidth >= 640) setGapSize(20);
      else setGapSize(14);
    };

    // Call once and set up resize event listener
    updateGapSize();
    window.addEventListener("resize", updateGapSize);

    // Clean up event listener
    return () => window.removeEventListener("resize", updateGapSize);
  }, []);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - gapSize; // Use gapSize from state
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
  }, [xTranslation, width, gapSize]); // Add gapSize as a dependency

  return (
    <section className="mt-40 lg:mt-80">
      <header className="flex justify-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-8xl ">
        ABOUT US
      </header>

      <div className="flex flex-col space-y-8 justify-center items-center">
        <span className="text-center justify-center w-11/12  mt-10 ">
          I am a 3rd year Digital Engineering studenta at Prince of Songkla
          Univerysity, Phuket Campus working on this Carbon Coins application
          hoping it would be able to help fight climate change !!
        </span>
        <button
          className="hover:text-hover-green underline"
          onClick={handleClick}
        >
          LEARN MORE
        </button>
      </div>

      <motion.div
        className="bg-white  absolute left-0 flex pr-20 gap-7 mt-16 sm:gap-10 md:mt-20 md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-40"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...imgCarousel, ...imgCarousel].map((item, index) => (
          <Card image={item} key={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default AboutMe;
