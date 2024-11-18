import axios from "axios";
import { toast } from "sonner";
import { LoginDto, RegisterDto } from "../models/auth";
import { DecodedToken } from "../models/base";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface AuthStatusResponse {
  wallet_address: string | null;
  id: number | null;
  used_coins: number | null;
  isAuthenticated: boolean;
  username: string | null;
  role: string | null;
}

export const AuthService = {
  login: async ({ username, password }: LoginDto) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      toast.success("success");
      return response.data;
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed");
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
          id: res.data.id,
          role: res.data.role,
          username: res.data.username,
          used_coins: res.data.used_coins,
          wallet_address: res.data.wallet_address,
        };
      }
    } catch (error: any) {
      console.log(error);
    }

    return {
      isAuthenticated: false,
      id: null,
      username: null,
      used_coins: null,
      role: null,
      wallet_address: null,
    };
  },
};
