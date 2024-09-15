import useAxiosInstance from "../api/useAxiosInstance";
import { useMutation } from "@tanstack/react-query";
import { LoginData } from "../../types/loginTypes";

const login = async (loginData: LoginData) => {
 try {
  const response = await useAxiosInstance.post("/login", loginData);
  return response.data;
 } catch (error: any) {
  // Handle errors here
  throw new Error(error.response?.data?.message || "Login failed");
 }
};

export const useLogin = () => {
 return useMutation({
  mutationFn: login,
  onError: (error: any) => {
   console.error("Login error:", error.message);
  },
  onSuccess: (data) => {
   console.log("Login successful:", data);
   // Handle successful login here, e.g., store token, redirect user, etc.
  },
 });
};
