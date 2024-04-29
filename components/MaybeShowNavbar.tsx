"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const MaybeShowNavbar = ({ children }: any) => {
  const pathname = usePathname();

  const [showNavBar, setShowNavBar] = useState(false);
  useEffect(() => {
    if (pathname === "/token") setShowNavBar(false);
    else setShowNavBar(true);
  }, [pathname]);

  return <div>{showNavBar && children}</div>;
};

export default MaybeShowNavbar;
