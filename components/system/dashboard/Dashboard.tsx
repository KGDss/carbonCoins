import React, { useEffect, useState } from "react";
import { useWallet } from "@/components/context/walletContext";
import ConnectWallet from "../../system/smartContract/ConnectWallet";
import GraphPrice from "./GraphPrice";
import SummaryCard from "./SummaryCard";
import { alphaVantageService } from "@/components/services/alphavantage";
import { useAuth } from "@/components/context/authContext";
import Image from "next/image";
import { timeSeries } from "@/constants";

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

  const [timeSeries, setTimeSeries] = useState<{ [key: string]: any } | null>(
    null
  );

  useEffect(() => {
    if (isConnected) {
      const fetchData = async () => {
        try {
          const {
            todayPrice,
            changeInPercent,
            timeSeries: series,
          } = await alphaVantageService.getToday();

          setData({ todayPrice, changeInPercent });
          setTimeSeries(series);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [isConnected]);

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
                          alt="positiveArrow"
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
              main={`${used_coins}`}
              description={`${used_coins} tCO2 reduced`}
            />
          </div>
          <div className="mt-16 ml-10">
            <GraphPrice timeSeries={timeSeries} />
          </div>
        </div>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default Dashboard;
