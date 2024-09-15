import axios from "axios";

const useAxiosInstance = axios.create({
    baseURL: 'https://admin.grindatunet.no/wp-json/jwt-auth/v1',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  
  export default useAxiosInstance;