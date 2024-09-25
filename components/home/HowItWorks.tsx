"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { imageSlide, textSlide } from "@/constants";
import Image from "next/image";

const HowItWorks = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
  const [currentPos, setCurrentPos] = useState(0);
  const handleNext = () => {
    setPositionIndexes((prevIndexes): any => {
      const updateIndexes = prevIndexes.map(
        (prevIndex): Number => (prevIndex + 1) % 5
      );
      if (currentPos == 4) setCurrentPos(0);
      else setCurrentPos(currentPos + 1);
      return updateIndexes;
    });
  };
  const positions = ["center", "left1", "left", "right", "right1"];
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-25%", scale: 0.7, zIndex: 2 },
    left: { x: "-45%", scale: 0.5, zIndex: 1 },
    right: { x: "45%", scale: 0.5, zIndex: 1 },
    right1: { x: "25%", scale: 0.7, zIndex: 2 },
  };

  return (
    <section className="pt-20 sm:pt-40 lg:pt-20">
      <div className=" sm:mb-0 lg:mb-40" />
      <div className="  xl:flex flex-row justify-evenly pb-10">
        <div className="flex mt-0 xl:flex items-center flex-row justify-center basis-1/2 ">
          <Image
            src="/rightArrow.svg"
            alt="arrow"
            height={150}
            width={150}
            className="min-w-20 z-10 ml-80 sm:ml-124 md:ml-142 lg:ml-160 xl:ml-168 2xl:ml-188 "
            onClick={handleNext}
          />
          {imageSlide.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={image}
              className="w-6/12 xl:w-5/12 2xl:w-4/12"
              initial="center"
              animate={positions[positionIndexes[index]]}
              variants={imageVariants}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute" }}
            ></motion.img>
          ))}
        </div>
        <div
          className="hidden xl:flex flex-col items-center justify-center basis-1/3 pt-20"
          key="animate-on-state"
        >
          <span className="text-6xl font-bold pb-5">
            {textSlide[currentPos].id}.
          </span>
          <span className="text-xl">{textSlide[currentPos].text}</span>
        </div>
      </div>
      <motion.div className="flex flex-col text-center  px-20 pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:hidden">
        <span className="text-3xl font-bold">{textSlide[currentPos].id}.</span>
        <span className="text-lg">{textSlide[currentPos].text}</span>
      </motion.div>
    </section>
  );
};

export default HowItWorks;
