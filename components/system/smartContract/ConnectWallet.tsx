// ConnectWallet.tsx
import Image from "next/image";
import React from "react";
import { useWallet } from "@/components/context/walletContext";
import CustomButton from "@/components/CustomButton";

const ConnectWallet = () => {
  const { connectWallet } = useWallet();

  return (
    <div className="shadow-lg h-4/6 w-3/6 rounded-2xl flex flex-col gap-20 items-center justify-center">
      <Image
        src={"/system/metamask.svg"}
        alt="metamask"
        width={0}
        height={0}
        className="w-7/12"
      />
      <CustomButton
        title="Connect to your wallet"
        handleClick={connectWallet}
        containerStyles="shadow-lg rounded-lg px-7 py-1 text-mid-green font-medium text-2xl hover:cursor"
      />
    </div>
  );
};

export default ConnectWallet;
