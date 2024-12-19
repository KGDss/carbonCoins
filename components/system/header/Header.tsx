import React from "react";
import Profile from "./Profile";
import Notification from "./Notification";
import Message from "./Message";
import Image from "next/image";
import { useAuth } from "@/components/context/authContext";

const Header = () => {
  const { username } = useAuth();
  return (
    <div className="text-black sticky top-0 bg-white shadow-lg h-[4em]">
      <div className="flex justify-between items-center px-5 h-full">
        <div className="text-lg font-semibold">
          Welcome Back, {username ? username : "User"}
        </div>
        <div className="flex gap-12 items-center">
          <Image src="/header/headerLine.svg" alt="line" width={1} height={5} />
          <Message />
          <Notification />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Header;
