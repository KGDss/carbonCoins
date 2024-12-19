"use client";
import { sideBarOptions } from "@/constants";
import Image from "next/image";
import React from "react";
import SideBarOptionCard from "./SideBarOptionCards";
import { useAuth } from "@/components/context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type SideBarIndexType = {
  sideBarIndex: number;
  setSidebarIndex: (index: number) => void;
};

const SideBar: React.FC<SideBarIndexType> = ({
  sideBarIndex,
  setSidebarIndex,
}) => {
  const { role } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logout successfully");
    router.push("/");
  };

  return (
    <div className="w-2/12 h-screen bg-background-green overflow-hidden sticky top-0">
      <div>
        <Image
          src="/sideBar/logoName.svg"
          alt="logoname"
          width={250}
          height={20}
          priority={true}
          className="pt-5 pl-5"
        />
      </div>

      <div className="flex justify-center">
        <span className="font-semibold text-xl pt-2">DASHBOARD</span>
      </div>
      <div>
        <Image
          src="/sideBar/sidebar.svg"
          alt="logoname"
          width={225}
          height={20}
          priority={true}
          className="pt-5"
        />
      </div>

      <div className="pt-6 pl-5 pb-9">
        <span className="font-medium text-lg">MAIN MENU</span>
      </div>

      <div>
        {sideBarOptions.map((item, index) => (
          <SideBarOptionCard
            key={index}
            image={
              index === sideBarIndex ? item.selectedUrl : item.notSelectedUrl
            }
            title={
              item.title != "Transfer"
                ? item.title
                : role == "ADMIN"
                ? "Carbon Coins"
                : "Transfer"
            }
            isSelected={index === sideBarIndex}
            onClick={() => {
              setSidebarIndex(index);
            }}
          />
        ))}
        <SideBarOptionCard
          image="./sideBar/logout.svg"
          title={"Logout"}
          onClick={handleLogout}
        />
      </div>
      <div className="absolute bottom-0 w-full flex justify-center">
        <Image
          src="/sideBar/animals.svg"
          alt="logoname"
          width={180}
          height={10}
          priority={true}
        />
      </div>
    </div>
  );
};

export default SideBar;
