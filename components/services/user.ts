import axios from "axios";
import { toast } from "sonner";
import { LoginDto, RegisterDto } from "../models/auth";
import { DecodedToken } from "../models/base";
import { jwtDecode } from "jwt-decode";
import { ConnectWalletFirstTime } from "../models/user";
import { truncateAddress } from "../system/smartContract/functions";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface AuthStatusResponse {
  used_coins: number | null;
  isAuthenticated: boolean;
  username: string | null;
  role: string | null;
}

export const UserService = {
  getAll: async (token: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Get all user failed");
    }
  },
  connectWalletFirstTime: async ({
    wallet_address,
    total_coins,
    id,
    token,
  }: ConnectWalletFirstTime) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/user/${id}`,
        { wallet_address, total_coins },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(
        `Your default wallet has been set to ${truncateAddress(wallet_address)}`
      );
      return response.data;
    } catch (error: any) {
      console.log(error);
      toast.error(error.response?.data?.message || "Cannot set wallet");
    }
  },
  register: async ({ username, password, email }: RegisterDto) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        username,
        password,
        email,
        role: "USER",
      });

      toast.success("success");
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Register failed");
    }
  },
  roleFromToken: (token: string) => {
    const decoded: DecodedToken = jwtDecode(token);
    return decoded.role === "ADMIN"
      ? "ADMIN"
      : decoded.role === "USER"
      ? "USER"
      : "";
  },

  status: async (token: string): Promise<AuthStatusResponse> => {
    try {
      const res = await axios.get(`${API_BASE_URL}/auth/status`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200 && res.data && res.data.username) {
        return {
          isAuthenticated: true,
          role: res.data.role,
          username: res.data.username,
          used_coins: res.data.used_coins,
        };
      }
    } catch (error: any) {
      console.log(error);
    }

    return {
      isAuthenticated: false,
      username: null,
      used_coins: null,
      role: null,
    };
  },
  updateBalance: async (id: number, token: string, total: number) => {
    try {
      const response = await axios.patch(
        `${API_BASE_URL}/user/${id}`,
        { total_coins: total },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("success");
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Update failed");
      console.log(error);
    }
  },
};
