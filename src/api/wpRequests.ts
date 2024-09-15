import { PostData } from 'src/types/createTypes';
import useAxiosInstance from '../hooks/api/useAxiosInstance'
import axios from 'axios';


// Function to fetch posts from WordPress
export const fetchPosts = async () => {
  const { data } = await useAxiosInstance.get('posts'); 
  return data;
};

// Function to search posts based on a search term
export const searchPosts = async (searchTerm: string) => {
  const { data } = await useAxiosInstance.get(`posts?search=${searchTerm}`);
  return data;
};

export const createPost = async (postData: PostData) => {

  try {
    console.log('Sending POST request with data:', postData);

    const response = await useAxiosInstance.post('/posts', postData);

    console.log('Response received from server:', response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error occurred while creating post:', {
        message: error.message,
        status: error.response?.status,
        headers: error.response?.headers,
        data: error.response?.data,
      });
    } else {
      console.error('Unexpected error occurred while creating post:', error);
    }

    throw error;
  }
};