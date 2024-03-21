import { CardProps } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Card: React.FC<CardProps> = ({ image, link }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <motion.div
      className="borde relative overflow-hidden rounded-xl min-w-[100px] md:min-w-[150px] lg:min-w-[200px]  flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={() => {
        setShowOverlay(!showOverlay);
      }}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-30 h-full w-full " />
            <a href={link} target="_blank">
              <motion.h1
                className="bg-white font-semibold z-10 flex gap-[0.5ch] items-center hover:opacity-75 
          text-3xs pl-1 sm:text-2xs md:text-xs md:px-0.5 md:py-0 lg:text-sm lg:px-3 lg:py-2  rounded-full"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span className="text-black">Explore</span>
                <Image
                  src="/rightArrowBlack.svg"
                  alt="arrow"
                  height={0}
                  width={0}
                  className="overflow-hidden w-2 sm:w-4 md:w-6 lg:w-7"
                ></Image>
              </motion.h1>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt="carousel"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
    </motion.div>
  );
};

export default Card;
