import { useWallet } from "@/components/context/walletContext";
import ConnectWallet from "../smartContract/ConnectWallet";
import AccountSum from "./AccountSum";
import { TransferComponent } from "./TransferComponent";
import CustomButton from "@/components/CustomButton";
import { addTokenToWallet } from "../smartContract/functions";

const Transfer = () => {
  const { isConnected } = useWallet();
  const handleClick = async () => {
    await addTokenToWallet();
  };

  return (
    <div
      className={
        isConnected
          ? ""
          : "flex justify-center items-center border border-solid h-[93.5vh] relative"
      }
    >
      {isConnected ? (
        <div className="h-[93.5vh] flex flex-col items-center justify-center gap-16">
          <div className="flex items-center justify-center w-[100%]  gap-10">
            <AccountSum />
            <TransferComponent />
          </div>
          <CustomButton
            title="Add token to your wallet"
            containerStyles="bg-white text-mid-green py-1 px-5 text-4xl rounded-4xl shadow-xl "
            handleClick={handleClick}
          />
        </div>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default Transfer;
