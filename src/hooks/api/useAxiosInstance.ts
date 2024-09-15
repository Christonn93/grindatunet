import axios from 'axios';

// Create an Axios instance with default settings
const useAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WP_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default useAxiosInstance;