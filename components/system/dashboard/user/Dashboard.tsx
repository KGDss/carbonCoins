"use client";

import React, { useEffect, useState } from "react";
import { useWallet } from "@/components/context/walletContext";
import ConnectWallet from "../../smartContract/ConnectWallet";
import dynamic from "next/dynamic"; // For dynamic import
import SummaryCard from "./SummaryCard";
import { useAuth } from "@/components/context/authContext";
import Image from "next/image";
import { timeSeries } from "@/constants";

// Dynamically import the GraphPrice component
const GraphPrice = dynamic(() => import("../GraphPrice"), { ssr: false });

const Dashboard = () => {
  const { isConnected, balance } = useWallet();
  const { used_coins } = useAuth();
  const [data, setData] = useState<{
    todayPrice: number | null;
    changeInPercent: number | null;
  }>({
    todayPrice: 1000, // Needs to be null for API call
    changeInPercent: 20, // Needs to be null for API call
  });

  return (
    <div
      className={
        isConnected
          ? ""
          : "flex justify-center items-center border border-solid h-[93.5vh] relative"
      }
    >
      {isConnected ? (
        <div>
          <div className="flex">
            <SummaryCard
              topic="Total coins:"
              main={balance.toLocaleString()}
              description={`${balance.toLocaleString()} tCO2 to claims`}
            />
            <SummaryCard
              topic="Price per coin:"
              main={`${
                data.todayPrice ? (+data.todayPrice).toFixed(2) + " $" : "ERROR"
              }`}
              descriptionTag={
                <>
                  {data.changeInPercent ? (
                    data.changeInPercent > 0 ? (
                      <div className="flex">
                        <Image
                          src={"/system/positiveArrow.svg"}
                          alt="positiveArrow"
                          height={0}
                          width={0}
                          className="w-2 mr-1"
                        />
                        <span className="text-mid-green">
                          +{data.changeInPercent.toFixed(2)}%
                        </span>
                        <span>&nbsp;Since Yesterday</span>
                      </div>
                    ) : (
                      <div className="flex">
                        <Image
                          src={"/system/negativeArrow.svg"}
                          alt="negativeArrow"
                          height={0}
                          width={0}
                          className="w-2 mr-1"
                        />
                        <span className="text-alert-red">
                          {data.changeInPercent.toFixed(2)}%
                        </span>
                        <span>&nbsp;Since Yesterday</span>
                      </div>
                    )
                  ) : (
                    <div className="text-alert-red">Fetching API ERROR</div>
                  )}
                </>
              }
            />
            <SummaryCard
              topic="Used coins:"
              main={`${used_coins ? used_coins : 0}`}
              description={`${used_coins ? used_coins : 0} tCO2 reduced`}
            />
          </div>
          <div className="mt-16 ml-10">
            <GraphPrice timeSeries={timeSeries} width="95%" height="600px" />
          </div>
        </div>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default Dashboard;
