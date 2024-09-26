import axios from "axios";
import { toast } from "sonner";
import { LoginDto, RegisterDto } from "../models/auth";
import { DecodedToken } from "../models/base";
import { jwtDecode } from "jwt-decode";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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
};
