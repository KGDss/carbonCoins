/* eslint-disable react/no-unescaped-entities */
"use client";
import { imgCarousel } from "@/constants";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import useMeasure from "react-use-measure";
import { animate, motion, useMotionValue } from "framer-motion";
import Link from "next/link";

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

    updateGapSize();
    window.addEventListener("resize", updateGapSize);
    return () => window.removeEventListener("resize", updateGapSize);
  }, []);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - gapSize;

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
    <section id="aboutus" className="mt-40 lg:mt-80 object-contain">
      <header className="flex justify-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-8xl ">
        ABOUT US
      </header>

      <div className="flex flex-col space-y-8 justify-center items-center">
        <span className="text-center justify-center w-11/12  mt-10 text-xl leading-relaxed">
          {/* Hi, I am Nicki Julius Hartmann, a 4th year Digital Engineering student
          at Prince of Songkhla University,Phuket Campus, working on this Carbon
          Coins application hoping it would be able to help fight climate change
          !! <br /> <br /> */}
          If you're reading this, it's probably because I don't have a portfolio
          website just yet—so I submit this project as my way of showcasing my
          passion and skills in web development! Though, I'm still working on
          this project here are some other paths that is not yet available
          through the landing page : <br />
          <br />
          <Link
            href={"/token"}
            className="text-2xl hover:cursor-pointer underline"
          >
            Blockchain
          </Link>
          - You will be ask to sign in with metamask wallet to do basic
          blockchain operations. I'm the only one able to use it fully, but you
          can give it a try
          <br />
          <Link
            href={"/user"}
            className="text-2xl hover:cursor-pointer underline"
          >
            Dashboard
          </Link>
          - I'm working on simplifying the estimation of GHGs for hotels but it
          will change to real dashboard soon
        </span>
        <button
          className="hover:text-hover-green underline"
          onClick={handleClick}
        >
          LEARN MORE
        </button>
      </div>
      <motion.div
        className="bg-white w-[220vw] left-0 flex pr-20 gap-7 mt-16 sm:gap-10 md:mt-20 md:gap-16 lg:gap-24 xl:gap-32 2xl:gap-40"
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
          // for mobile because they cant hover
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
