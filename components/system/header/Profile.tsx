import React from "react";
import Image from "next/image";
import { useAuth } from "@/components/context/authContext";
import { toast } from "sonner";

const Profile = () => {
  const { username } = useAuth();
  return (
    <div
      className="flex items-center gap-2 hover:cursor-pointer"
      onClick={() => {
        toast.info("To be implemented", { duration: 1000 });
      }}
    >
      <Image
        src="/header/blankProfile.svg"
        height={50}
        width={50}
        alt="Dummy Image"
      />
      <div className="flex items-center gap-1">
        {username}
        <Image
          src="/header/profileArrow.svg"
          height={10}
          width={10}
          alt="Dummy Image"
        />
      </div>
    </div>
  );
};

export default Profile;
