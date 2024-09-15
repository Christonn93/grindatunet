import useAxiosInstance from '../hooks/api/useAxiosInstance'


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