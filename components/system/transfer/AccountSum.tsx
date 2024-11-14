import { useWallet } from "@/components/context/walletContext";
import Image from "next/image";
import React from "react";

const AccountSum = () => {
  const { walletAddress, balance } = useWallet();
  function truncateAddress(
    address: string,
    startLength: number = 6,
    endLength: number = 4
  ): string {
    if (address.length <= startLength + endLength) {
      return address;
    }
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
  }

  return (
    <div className="h-[55vh] w-[38%] top-52 rounded-4xl bg-white z-40 shadow-lg">
      <div className="rounded-4xl w-full h-full bg-gradient-to-b from-hover-green/30 relative overflow-hidden">
        <div>
          <div className="flex flex-col justify-center items-center text-text-gray pt-10">
            <div className="text-xs font-semibold flex items-center justify-center gap-6">
              <Image
                src={"/system/metamask.svg"}
                alt="metamask"
                width={0}
                height={0}
                className="w-[23%]"
              />
              <div className="bg-white rounded-xl px-16 text-xl shadow-md text-mid-green">
                {walletAddress
                  ? truncateAddress(walletAddress)
                  : "loading address"}
              </div>
            </div>
            <div className="mt-16  text-[2.8rem] font-bold">
              Balance : <span className="text-mid-green">{balance}</span> CC
            </div>
          </div>
        </div>
        <Image
          src="/landing/trees.svg"
          alt="trees"
          width={10000}
          height={10000}
          priority={true}
          className="absolute -bottom-1"
        />
      </div>
    </div>
  );
};

export default AccountSum;
