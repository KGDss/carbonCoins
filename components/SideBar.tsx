import Image from "next/image";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-2/12 h-screen bg-background-green relative overflow-hidden">
      <Image
        src="/logoName.svg"
        alt="logoname"
        width={250}
        height={20}
        priority={true}
        className="pt-5 pl-5"
      />
      <div className="flex justify-center">
        <span className="font-semibold text-xl pt-2">DASHBOARD</span>
      </div>
      <Image
        src="/sidebar.svg"
        alt="logoname"
        width={225}
        height={20}
        priority={true}
        className="pt-5"
      />
      <div className="pt-6 pl-6">
        <span className="font-medium text-xl">MAIN MENU</span>
      </div>
    </div>
  );
};

export default SideBar;
