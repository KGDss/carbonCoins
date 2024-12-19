// WalletContext.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { ethers } from "ethers";
import { toast } from "sonner";
import MyTokenABI from "@/contracts/abi/TokenMng.json";
import { useAuth } from "./authContext";
import { UserService } from "../services/user";

interface WalletContextType {
  walletAddress: string | null;
  isConnected: boolean;
  signer: ethers.JsonRpcSigner | null;
  balance: number;
  connectWallet: (username: string) => Promise<void>;
  updateBalance: (balance: number) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);
const contractAddress = "0xD6a973d907070A68F51A3885A169fFDF67e365c8";

export const WalletProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const { wallet_address, id } = useAuth();
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const connectWallet = async (username: string) => {
    if (typeof (window as any).ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();

        if (wallet_address !== null && wallet_address !== address) {
          toast.error(
            "Please use the same wallet you first connected with this account"
          );
          return;
        }

        const contract = new ethers.Contract(
          contractAddress,
          MyTokenABI,
          signer
        );

        const balance = await contract.balanceOf(address);
        const total_coins = +ethers.formatEther(balance.toString());

        // if (wallet_address === null) {
        //   await UserService.connectWalletFirstTime({
        //     wallet_address: address,
        //     total_coins,
        //     id,
        //     token: localStorage.getItem("token") ?? "",
        //   });
        // }

        setIsConnected(true);
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

  const updateBalance = (balance: number) => {
    setBalance(balance); // Update the balance in context
    toast.success("Balance updated successfully");
  };

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        isConnected,
        signer,
        balance,
        connectWallet,
        updateBalance,
      }}
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
