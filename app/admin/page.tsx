"use client";
import { AuthService } from "@/components/services/auth";
import HotelFootprint from "@/components/system/HotelFootprint/HotelFootprint";
import SideBar from "@/components/system/SideBar/SideBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sidebarIndex, setSidebarIndex] = useState<number>(0);

  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        toast.error("Unauthorized");
        router.push("/");
        return;
      }

      try {
        const res = await AuthService.status(token);
        console.log(res);

        if (!res) {
          toast.error("Unauthorized");
          router.push("/");
          return;
        }

        setIsAuthenticated(true);
      } catch (error) {
        router.push("/");
        toast.error("Unauthorized");
      }
    };
    checkAuthStatus();
  }, [router]);

  return (
    isAuthenticated && (
      <div className="flex h-screen">
        <SideBar
          sideBarIndex={sidebarIndex}
          setSidebarIndex={setSidebarIndex}
        />

        <div className="flex-1 text-black overflow-y-auto">
          <HotelFootprint />
        </div>
      </div>
    )
  );
};

export default AdminPage;
