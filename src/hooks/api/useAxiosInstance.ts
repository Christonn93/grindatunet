import axios from 'axios';

// Create an Axios instance with default settings
const useAxiosInstance = axios.create({
  baseURL: 'https://admin.grindatunet.no/wp-json/custom/v1/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Add a request interceptor to include auth details
useAxiosInstance.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});

export default useAxiosInstance;