import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// Define the registration function
const registerUser = async (userData: { username: string; email: string; password: string }) => {
  try {
    const response = await axios.post('https://admin.grindatunet.no/wp-json/wp/v2/register', userData);
    return response.data;
  } catch (error: any) {
    console.error('Registration failed:', error.response?.data?.message || error.message);
    throw new Error('Registration failed');
  }
};

// Create a custom hook for registration
export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onError: (error: any) => {
      console.error('Error registering user:', error.message);
    },
    onSuccess: (data) => {
      console.log('User registered successfully:', data);
    },
  });
};
