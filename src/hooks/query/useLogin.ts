import { LoginData, LoginResponse } from "src/types/loginTypes";
import useAxiosInstance from "../api/useAxiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginData>(
    async (loginData: LoginData) => {
      const response = await useAxiosInstance.post('/jwt-auth/v1/token', loginData);
      return response.data;
    }
  );
};