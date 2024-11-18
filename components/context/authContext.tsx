"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { AuthStatusResponse } from "../services/auth";

type AuthContextType = AuthStatusResponse & {
  setAuthData: (data: AuthStatusResponse) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthContextType>({
    isAuthenticated: false,
    id: null,
    username: null,
    used_coins: null,
    role: null,
    wallet_address: null,
    setAuthData: (data) => setAuthData({ ...authData, ...data }),
  });

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
