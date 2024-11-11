// WalletContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ethers } from "ethers";
import { toast } from "sonner";
import MyTokenABI from "@/contracts/abi/TokenMng.json";

interface WalletContextType {
  walletAddress: string | null;
  isConnected: boolean;
  signer: ethers.JsonRpcSigner | null;
  balance: number;
  connectWallet: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);
const contractAddress = "0xD6a973d907070A68F51A3885A169fFDF67e365c8";

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);

  const isConnected = Boolean(walletAddress);

  const connectWallet = async () => {
    if (typeof (window as any).ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const contract = new ethers.Contract(
          contractAddress,
          MyTokenABI,
          signer
        );
        const balance = await contract.balanceOf(address);
        setWalletAddress(address);
        setSigner(signer);
        setBalance(+ethers.formatEther(balance.toString()));
      } catch (error) {
        toast.warning("please check your metamask extension");
      }
    } else {
      toast.error("Please install MetaMask!");
    }
  };

  return (
    <WalletContext.Provider
      value={{ walletAddress, isConnected, signer, balance, connectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};
