"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import MyTokenABI from "../../contracts/abi/TokenMng.json";

// Replace with the actual contract address
const contractAddress = "0xf304ba1d85Dd7e5558C9AE4c7ccc3968F4f24BaA";

const getSigner = async () => {
  const provider = new ethers.BrowserProvider((window as any).ethereum);
  return await provider.getSigner();
};

const getContract = async () => {
  return new ethers.Contract(contractAddress, MyTokenABI, await getSigner());
};

export default function TokenPage() {
  const [mintAccount, setMintAccount] = useState("");
  const [burnAccount, setBurnAccount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [balanceAccount, setBalanceAccount] = useState("");
  const [mintAmount, setMintAmount] = useState("");
  const [burnAmount, setBurnAmount] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  async function mintToken() {
    if (!mintAccount || !mintAmount) {
      alert("Please fill Account and Amount");
      return;
    }
    try {
      const myTokenContract = await getContract();
      await myTokenContract.mint(mintAccount, ethers.parseEther(mintAmount));
      console.log("Tokens minted successfully!");
    } catch (error) {
      console.error("Error minting tokens:", error);
    }
  }

  async function burnToken() {
    if (!burnAmount) {
      alert("Please fill Amount");
      return;
    }
    try {
      const myTokenContract = await getContract();
      await myTokenContract.burn(ethers.parseEther(burnAmount));
      console.log("Tokens burned successfully!");
    } catch (error) {
      console.error("Error burning tokens:", error);
    }
  }

  async function transferToken() {
    if (!transferAccount || !transferAmount) {
      alert("Please fill Account and Amount");
      return;
    }
    try {
      const myTokenContract = await getContract();
      await myTokenContract.transfer(
        transferAccount,
        ethers.parseEther(transferAmount)
      );
      console.log("Tokens transferred successfully!");
    } catch (error) {
      console.error("Error transferring tokens:", error);
    }
  }

  async function getTokenBalance() {
    if (!balanceAccount) {
      alert("Please fill Account");
      return;
    }
    try {
      const myTokenContract = await getContract();
      const balance = await myTokenContract.balanceOf(balanceAccount);
      setTokenBalance(balance.toString());
      console.log("Balance: ", balance);
    } catch (error) {
      console.error("Error getting token balance:", error);
    }
  }

  async function getTotalSupply() {
    try {
      const myTokenContract = await getContract();
      const supply = await myTokenContract.totalSupply();
      setTotalSupply(supply.toString().toLocaleString("en-US"));
    } catch (error) {
      console.error("Error getting total supply:", error);
    }
  }

  async function getTokenInfo() {
    try {
      const myTokenContract = await getContract();
      const tokenName = await myTokenContract.name();
      const tokenSymbol = await myTokenContract.symbol();
      setName(tokenName);
      setSymbol(tokenSymbol);
    } catch (error) {
      console.error("Error getting token info:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await getTokenInfo();
      await getTotalSupply();
    }
    fetchData();
  }, [name, symbol]);

  useEffect(() => {
    async function fetchWalletAddress() {
      try {
        const signer = await getSigner();
        setWalletAddress(await signer.getAddress()); // Fetch and set wallet address
      } catch (error) {
        console.error("Error fetching wallet address:", error);
      }
    }
    fetchWalletAddress();
  }, [name, symbol]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-50 text-text-gray">
        <div className="pt-10">
          <h1 className="text-2xl font-bold mb-4 flex flex-col justify-center items-center">
            Admin Carbon Coins Interactions
            {walletAddress && (
              <p>
                Wallet Address:{" "}
                <span className="text-hover-green">{walletAddress}</span>
              </p>
            )}
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-3">
            <div id="show" className="flex flex-row ">
              <div className="p-8 bg-white rounded shadow-md mb-16 border border-solid w-96 h-fit">
                <h1 className="text-lg font-bold mb-4 flex flex-col justify-center items-center">
                  {name && (
                    <p>
                      Token Name:{" "}
                      <span className="text-hover-green">{name}</span>
                    </p>
                  )}
                  {symbol && (
                    <p>
                      Token Symbol:{" "}
                      <span className="text-hover-green">{symbol}</span>
                    </p>
                  )}
                </h1>
                {totalSupply && (
                  <p>
                    Total Supply:{" "}
                    <span className="font-bold text-mid-green text-xl">
                      {ethers.formatEther(totalSupply)}
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div id="mint" className="flex flex-row ">
              <div className="p-8 bg-white rounded shadow-md mb-16 border border-solid w-96 h-fit">
                <h1 className="text-2xl font-bold mb-4 flex justify-center">
                  Minting System
                </h1>
                <div className="mt-2 text-text-gray">
                  <label htmlFor="account" className="block text-text-gray">
                    Account:{" "}
                  </label>
                  <input
                    id="accont"
                    type="text"
                    className="block border w-full"
                    value={mintAccount}
                    onChange={(e) => setMintAccount(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block ">
                    Amount:{" "}
                  </label>
                  <input
                    id="amount"
                    type="text"
                    className="block border w-full"
                    value={mintAmount}
                    onChange={(e) => setMintAmount(e.target.value)}
                  />
                </div>

                <button
                  onClick={mintToken}
                  className="mt-4 bg-mid-green text-white px-4 py-2 rounded w-full"
                >
                  Mint Token
                </button>
              </div>
            </div>
            <div id="burn" className="flex flex-row ">
              <div className="p-8 bg-white rounded shadow-md mb-16 border border-solid w-96 h-fit">
                <h1 className="text-2xl font-bold mb-4 flex justify-center">
                  Burning System
                </h1>
                <div className="mt-2 text-text-gray">
                  <label htmlFor="account" className="block text-text-gray">
                    Account:{" "}
                  </label>
                  <input
                    id="accont"
                    type="text"
                    className="block border w-full"
                    value={burnAccount}
                    onChange={(e) => setBurnAccount(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block ">
                    Amount:{" "}
                  </label>
                  <input
                    id="amount"
                    type="text"
                    className="block border w-full"
                    value={burnAmount}
                    onChange={(e) => setBurnAmount(e.target.value)}
                  />
                </div>

                <button
                  onClick={burnToken}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
                >
                  Burn Token
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <div id="transfer" className="flex flex-row ">
              <div className="p-8 bg-white rounded shadow-md mb-16 border border-solid w-96 h-fit">
                <h1 className="text-2xl font-bold mb-4 flex justify-center">
                  Transfer System
                </h1>
                <div className="mt-2 text-text-gray">
                  <label htmlFor="account" className="block text-text-gray">
                    Account:{" "}
                  </label>
                  <input
                    id="accont"
                    type="text"
                    className="block border w-full"
                    value={transferAccount}
                    onChange={(e) => setTransferAccount(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block ">
                    Amount:{" "}
                  </label>
                  <input
                    id="amount"
                    type="text"
                    className="block border w-full"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </div>

                <button
                  onClick={transferToken}
                  className="mt-2 bg-mid-green text-white px-4 py-2 rounded w-full"
                >
                  Transfer Token
                </button>
              </div>
            </div>
            <div id="balance" className="flex flex-row ">
              <div className="p-8 bg-white rounded shadow-md mb-16 border border-solid w-96 h-fit">
                <h1 className="text-2xl font-bold mb-4 flex justify-center">
                  Balance System
                </h1>
                {tokenBalance && (
                  <p>Token Balance: {ethers.formatEther(tokenBalance)}</p>
                )}
                <div className="mt-2 text-text-gray">
                  <label htmlFor="account" className="block text-text-gray">
                    Account:{" "}
                  </label>
                  <input
                    id="accont"
                    type="text"
                    className="block border w-full"
                    value={balanceAccount}
                    onChange={(e) => setBalanceAccount(e.target.value)}
                  />
                </div>
                <button
                  onClick={getTokenBalance}
                  className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded w-full"
                >
                  Balance
                </button>
              </div>
            </div>
            {/* <div className="flex flex-row">
              <div className="p-8 bg-white rounded shadow-md mb-16">
                <h1 className="text-2xl font-bold mb-4">Token Interaction</h1>

                {tokenBalance && (
                  <p>Token Balance: {ethers.formatEther(tokenBalance)}</p>
                )}
                {totalSupply && (
                  <p>Total Supply: {ethers.formatEther(totalSupply)}</p>
                )}
                {name && <p>Token Name: {name}</p>}
                {symbol && <p>Token Symbol: {symbol}</p>}

                <div className="mt-2 text-text-gray">
                  <label htmlFor="account" className="block text-text-gray">
                    Account:{" "}
                  </label>
                  <input
                    id="accont"
                    type="text"
                    className="block border w-full"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="amount" className="block ">
                    Amount:{" "}
                  </label>
                  <input
                    id="amount"
                    type="text"
                    className="block border w-full"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <button
                  onClick={mintToken}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Mint Token
                </button>
                <button
                  onClick={burnToken}
                  className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                >
                  Burn Token
                </button>
                <button
                  onClick={transferToken}
                  className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
                >
                  Transfer Token
                </button>
                <button
                  onClick={getTokenBalance}
                  className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded"
                >
                  Balance
                </button>

                <div className="mt-4 italic text-sm">
                  * Need to redeploy a contract (./contract/MyToken.sol)
                </div>
                <div className="italic text-sm">
                  {" "}
                  and change a contract address (./app/token/page.tsx){" "}
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
