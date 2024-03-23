import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <section className="mt-20 lg:mt-60 object-contain">
      <div className="flex justify-center font-bold text-4xl sm:text-6xl md:text-7xl lg:text-7xl  xl:text-8xl">
        OUR TEAM
      </div>
      <div className="flex flex-row justify-between">
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
    </section>
  );
};

export default OurTeam;
