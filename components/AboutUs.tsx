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
  const FAST = 25;
  const SLOW = 75;
  const [duration, setDuration] = useState(FAST);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  // Dynamically adjust gap size based on screen width
  useEffect(() => {
    const updateGapSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1536) setGapSize(40);
      else if (screenWidth >= 1280) setGapSize(24);
      else if (screenWidth >= 1024) setGapSize(8);
      else if (screenWidth >= 768) setGapSize(-7);
      else if (screenWidth >= 640) setGapSize(-20);
      else setGapSize(-26);
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

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
  }, [xTranslation, width, gapSize, duration, rerender, mustFinish]); // Add gapSize as a dependency

  return (
    <section className="mt-40 lg:mt-80 object-contain">
      <header className="flex justify-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-8xl ">
        ABOUT US
      </header>

      <div className="flex flex-col space-y-8 justify-center items-center">
        <span className="text-center justify-center w-11/12  mt-10 ">
          We are 3rd year Digital Engineering students at Prince of Songkla
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
        className="bg-white w-[350vw]  md:w-[220vw] left-0 flex pr-20 gap-7 mt-16 sm:gap-10 md:mt-20 md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-40"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST);
        }}
        onClick={() => {
          setMustFinish(true);
          setDuration((prevDuration) => (prevDuration === SLOW ? FAST : SLOW));
        }}
      >
        {[...imgCarousel, ...imgCarousel].map((item, index) => (
          <Card image={item.path} key={index} link={item.link} />
        ))}
      </motion.div>
    </section>
  );
};

export default AboutMe;
