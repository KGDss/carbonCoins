import React from "react";
import { timeSeries } from "@/constants";
import dynamic from "next/dynamic"; // Import dynamic for lazy loading
import UserSummary from "./UserSummary";

const GraphPrice = dynamic(() => import("../GraphPrice"), { ssr: false });
const TokenVolume = dynamic(() => import("./TokenVolume"), { ssr: false });

const Dashboard = () => {
  return (
    <div className="border border-solid h-[93.4%] px-4">
      <UserSummary />
      <div className="flex justify-between gap-10">
        <div className="w-full">
          <span className="text-2xl text-mid-green font-bold">
            Carbon Coins Price
          </span>
          <div className="rounded-2xl shadow-lg">
            <GraphPrice timeSeries={timeSeries} height="400px" width="95%" />
          </div>
        </div>
        <div className="w-full">
          <span className="text-2xl text-mid-green font-bold">
            Carbon Coins Volume
          </span>
          <div className="rounded-2xl shadow-lg">
            <TokenVolume timeSeries={timeSeries} height="400px" width="95%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
