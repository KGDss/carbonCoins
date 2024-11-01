import React from "react";
import ConnectWallet from "./smartContract/ConnectWallet";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center border border-solid h-lvh">
      <ConnectWallet></ConnectWallet>
    </div>
  );
};

export default Dashboard;
