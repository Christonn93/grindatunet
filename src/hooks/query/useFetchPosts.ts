import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../api/wpRequests";

export const useFetchPosts = () => {
    return useQuery({
      queryKey: ['posts'],
      queryFn: fetchPosts,
      staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
    });
  };