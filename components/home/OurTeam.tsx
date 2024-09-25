import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <section className="mt-20 lg:mt-60 object-contain">
      <div
        id="contactus"
        className="flex justify-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-8xl "
      >
        OUR TEAM
      </div>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col w-7/12 space-y-5  absolute mt-28 xs:mt-40 sm:mt-48 sm:space-y-14 md:mt-64 lg:mt-88 xl:mt-108 2xl:mt-136">
          <span className="text-right text-2xs xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ">
            Nicki Julius Hartmann (Front-End)
          </span>
          <span className="text-left text-2xs xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Nicki Julius Hartmann (Back-End)
          </span>
        </div>
      </div>
      <div className="flex flex-row justify-between right-0">
        <Image
          src="/nicki1.svg"
          alt="nicki1"
          height={0}
          width={0}
          style={{ width: "46vw", height: "auto" }}
        />
        <Image
          src="/nicki2.svg"
          alt="nicki2"
          height={0}
          width={0}
          style={{ width: "46vw", height: "auto" }}
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="absolute">
          <Image
            src="/logo.svg"
            alt="logo"
            height={0}
            width={0}
            style={{ width: "4vw", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
