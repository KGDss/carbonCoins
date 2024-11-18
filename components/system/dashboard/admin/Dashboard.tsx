import React from "react";
import GraphPrice from "../GraphPrice";
import TokenVolume from "./TokenVolume";
import { timeSeries } from "@/constants";
import UserSummary from "./UserSummary";

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
