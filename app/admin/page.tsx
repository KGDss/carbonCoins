"use client";
import SideBar from "@/components/SideBar";
import React, { useEffect } from "react";

const AdminPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "white";
  }, []);
  return (
    <>
      <SideBar />
    </>
  );
};

export default AdminPage;
