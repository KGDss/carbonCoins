"use client";

import dynamic from "next/dynamic";
import Header from "@/components/system/header/Header";
import SideBarComponent from "@/components/system/sidebar/SideBarComponent";
import { withAuth } from "@/components/hoc/withAuth";
import { useState } from "react";
import { useAuth } from "@/components/context/authContext";

const Dashboard = dynamic(() => import("@/components/system/Dashboard"));
const HotelFootprintComponent = dynamic(
  () => import("@/components/system/hotelFootprint/HotelFootprintComponent")
);

const SidebarMap: { [key: number]: JSX.Element } = {
  0: <Dashboard />,
  1: <HotelFootprintComponent />,
};

const AdminPage = () => {
  const { isAuthenticated } = useAuth();
  const [sidebarIndex, setSidebarIndex] = useState<number>(0);

  return (
    isAuthenticated && (
      <div className="flex h-screen">
        <SideBarComponent
          sideBarIndex={sidebarIndex}
          setSidebarIndex={setSidebarIndex}
        />

        <div className="flex-1 text-black overflow-y-auto">
          <Header />
          {SidebarMap[sidebarIndex]}
        </div>
      </div>
    )
  );
};

export default withAuth(AdminPage);
