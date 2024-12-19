import React, { FormEvent, useState } from "react";
import CustomButton from "@/components/CustomButton";
import { transferToken } from "../smartContract/functions";
import { useAuth } from "@/components/context/authContext";
import { useWallet } from "@/components/context/walletContext";

export const TransferComponent = () => {
  const { id, wallet_address } = useAuth();
  const { balance, updateBalance } = useWallet();
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    if (id && wallet_address && token) {
      await transferToken(account, amount, id, wallet_address, token);
      updateBalance(balance - +amount);
    }
  };
  return (
    <div className="h-[55vh] w-[38%] top-52 rounded-4xl bg-white z-40 shadow-lg">
      <div className="rounded-4xl w-full h-full bg-gradient-to-b from-hover-green/30 relative overflow-hidden">
        <div>
          <div className="flex flex-col justify-center items-center text-text-gray pt-10">
            <div className="font-semibold flex items-center justify-center gap-6">
              <div className="bg-white rounded-xl px-10 py-1 mt-9 text-2xl shadow-md text-mid-green">
                Transfer your Carbon Coins
              </div>
            </div>
            <div className="mt-16  font-bold">
              <form
                action="submit"
                className="flex flex-col justify-center items-center gap-12"
                onSubmit={handleSubmit}
              >
                <input
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  placeholder="Account:"
                  className="bg-inherit border-b-2 text-2xl border-text-gray text-text-gray placeholder:text-text-gray w-92 "
                />
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount:"
                  className="bg-inherit border-b-2 text-2xl border-text-gray text-text-gray placeholder:text-text-gray w-92"
                />
                <CustomButton
                  title="Send"
                  containerStyles="bg-mid-green text-white py-1 px-3 text-4xl"
                  btnType="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
