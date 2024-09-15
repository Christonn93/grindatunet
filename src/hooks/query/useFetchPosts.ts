import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/wpRequests";
import { Post } from "../../types/blogTypes";

export const useFetchPosts = () => {
  return useQuery<Post[], Error>({
      queryKey: ['/wp/v2/posts'],
      queryFn: fetchPosts,
      staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
  });
};