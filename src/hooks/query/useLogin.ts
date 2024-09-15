import useAxiosInstance from '../api/useAxiosInstance';
import { useMutation } from '@tanstack/react-query';
import { LoginData, LoginResponse } from '../../types/loginTypes';



export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginData>({
    mutationFn: async (loginData: LoginData) => {
      const response = await useAxiosInstance.post('/login', loginData);
      return response.data;
    },
    onError: (error) => {
      console.error('Error logging in:', error);
    },
    onSuccess: (data) => {
      console.log('Login successful:', data);
      // Save the token and user data to localStorage or context
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    },
  });
};