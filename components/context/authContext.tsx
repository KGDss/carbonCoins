"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  username: string | null;
  used_coins: number | null;
  role: string | null;
  setAuthData: (data: {
    isAuthenticated: boolean;
    username: string | null;
    used_coins: number | null;
    role: string | null;
  }) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authData, setAuthData] = useState<AuthContextType>({
    isAuthenticated: false,
    username: null,
    used_coins: null,
    role: null,
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
