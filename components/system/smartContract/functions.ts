import { ethers } from "ethers";
import MyTokenABI from "@/contracts/abi/TokenMng.json";
import { UserService } from "@/components/services/user";

const contractAddress = "0xD6a973d907070A68F51A3885A169fFDF67e365c8";
let tName = "";
let tSymbol = "";

const getSigner = async () => {
  console.log("signer being called");
  const provider = new ethers.BrowserProvider((window as any).ethereum);
  return await provider.getSigner();
};

const getContract = async () => {
  return new ethers.Contract(contractAddress, MyTokenABI, await getSigner());
};

export const transferToken = async (
  account: string,
  amount: string,
  id: number,
  wallet_address: string,
  token: string
) => {
  if (!account || !amount) {
    alert("Please fill Account and Amount");
    return;
  }
  try {
    const myTokenContract = await getContract();
    await myTokenContract.transfer(account, ethers.parseEther(amount));

    const balance = await myTokenContract.balanceOf(wallet_address); // This is the destination address; we want the sender's balance instead
    const formattedBalance = ethers.formatEther(balance); // Convert from Wei to Ether

    await UserService.updateBalance(id, token, +formattedBalance - +amount);

    console.log("Tokens transferred successfully!");
  } catch (error) {
    console.error("Error transferring tokens:", error);
  }
};

export const addTokenToWallet = async () => {
  await getTokenInfo();
  try {
    const tokenAddress = contractAddress;
    const tokenSymbol = tSymbol;
    const tokenDecimals = 18; // Adjust if your token uses different decimals
    const tokenImage = ""; // Provide the URL of your token image if available

    const wasAdded = await (window as any).ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage,
        },
      },
    });

    if (wasAdded) {
      console.log("Token added to wallet!");
    } else {
      console.log("Token not added to wallet.");
    }
  } catch (error) {
    console.error("Error adding token to wallet:", error);
  }
};

const getTokenInfo = async () => {
  try {
    const myTokenContract = await getContract();
    const tokenName = await myTokenContract.name();
    const tokenSymbol = await myTokenContract.symbol();
    tName = tokenName;
    tSymbol = tokenSymbol;
  } catch (error) {
    console.error("Error getting token info:", error);
  }
};

export const truncateAddress = (
  address: string,
  startLength: number = 6,
  endLength: number = 4
): string => {
  if (address.length <= startLength + endLength) {
    return address;
  }
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
};
