"use client";

import dynamic from "next/dynamic";
import Header from "@/components/system/header/Header";
import SideBar from "@/components/system/sidebar/SideBar";
import { withAuth } from "@/components/hoc/withAuth";
import { useState } from "react";
import { useAuth } from "@/components/context/authContext";

const Dashboard = dynamic(
  () => import("@/components/system/dashboard/Dashboard")
);
const HotelFootprint = dynamic(
  () => import("@/components/system/hf/HotelFootprint")
);

const SidebarMap: { [key: number]: JSX.Element } = {
  0: <Dashboard />,
  1: <HotelFootprint />,
};

const AdminPage = () => {
  const { isAuthenticated } = useAuth();
  const [sidebarIndex, setSidebarIndex] = useState<number>(0);

  return (
    isAuthenticated && (
      <div className="flex h-screen">
        <SideBar
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
