import { useQuery } from "@tanstack/react-query";
import { searchPosts } from "src/api/wpRequests";

export const useSearchPosts = (searchTerm: string) => {
    return useQuery({
      queryKey: ['searchPosts', searchTerm],
      queryFn: () => searchPosts(searchTerm),
      staleTime: 5 * 60 * 1000, // Data is considered fresh for 5 minutes
      enabled: !!searchTerm, // Only run the query if searchTerm is not empty
    });
  };