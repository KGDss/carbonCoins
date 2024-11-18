import { BaseAuth } from "./base";

export type ConnectWalletFirstTime = BaseAuth & {
  wallet_address: string;
  total_coins: number;
  id: number | null;
};
