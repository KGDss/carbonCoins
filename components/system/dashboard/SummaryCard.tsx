import { useWallet } from "@/components/context/walletContext";
import Image from "next/image";
import React from "react";

type SummaryCardType = {
  topic: string;
  main: string;
  description?: string;
  descriptionTag?: React.ReactNode;
};

//! need dynamic in total coins, 2024 and left to claim for other parts
const SummaryCard: React.FC<SummaryCardType> = ({
  topic,
  main,
  description,
  descriptionTag,
}) => {
  return (
    <div className="shadow-xl w-3/12 h-40 rounded-2xl mt-10 ml-10 relative border border-solid">
      <div className="flex gap-5 pt-5 pl-5">
        <Image
          src={"/system/cardLine.svg"}
          alt="line"
          height={0}
          width={0}
          className="w-1"
        ></Image>
        <div>
          <div className="text-black font-semibold text-4xl">{topic}</div>
          <div className="text-mid-green font-semibold text-5xl">{main}</div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-12 pb-2 text-gray-700 font-semibold">
        {description}
        {descriptionTag}
      </div>
    </div>
  );
};

export default SummaryCard;
