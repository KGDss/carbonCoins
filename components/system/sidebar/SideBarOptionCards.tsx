import { SideBarCardProps } from "@/types";
import React from "react";
import Image from "next/image";

const SideBarOptionCard: React.FC<SideBarCardProps> = ({
  image,
  title,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className={`flex flex-row justify-start items-center gap-5 pl-5 h-20 hover:cursor-pointer ${
        isSelected ? "bg-white bg-opacity-50" : ""
      }`}
      onClick={onClick}
    >
      <div>
        <Image
          src={image}
          alt="sideBar"
          width={0}
          height={0}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="text-lg font-medium">{title}</div>
    </div>
  );
};

export default SideBarOptionCard;
