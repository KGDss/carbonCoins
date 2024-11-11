// import { ethers } from "ethers";
// import MyTokenABI from "@/contracts/abi/TokenMng.json";
// import { useWallet } from "../context/walletContext";

// const contractAddress = "0xD6a973d907070A68F51A3885A169fFDF67e365c8";

// const { signer } = useWallet();

// const getContract = async () => {
//   return new ethers.Contract(contractAddress, MyTokenABI, signer);
// };

// export const contractService = {
//   getBalance: async () => {
//     if (!balanceAccount) {
//       alert("Please fill Account");
//       return;
//     }
//     try {
//       const myTokenContract = await getContract();
//       const balance = await myTokenContract.balanceOf(balanceAccount);
//       setTokenBalance(balance.toString());
//       console.log("Balance: ", balance);
//     } catch (error) {
//       console.error("Error getting token balance:", error);
//     }
//   },
// };
