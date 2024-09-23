import axios from "axios";
import { Login, RegisterDto } from "../models/auth";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const AuthService = {
  login: async ({ username, password }: Login) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },
  register: async ({ username, password, email }: RegisterDto) => {
    try {
      console.log("ma ", API_BASE_URL);
      console.log("hello");
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        username,
        password,
        email,
        role: "USER",
      });

      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Register failed");
    }
  },
};
