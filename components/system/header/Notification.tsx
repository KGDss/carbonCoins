import React from "react";
import Image from "next/image";
import { toast } from "sonner";

const Notification = () => {
  return (
    <div
      className="hover:cursor-pointer"
      onClick={() => {
        toast.info("To be implemented", { duration: 1000 });
      }}
    >
      <Image src="/header/noti.svg" height={40} width={40} alt="Dummy Image" />
    </div>
  );
};

export default Notification;
