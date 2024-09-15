import { useQuery } from "@tanstack/react-query";
import { fetchPageBySlug } from "../../api/wpRequests";

export const useFetchPageBySlug = (slug: string) => {
    return useQuery({
        queryKey: ['/wp/v2/pages', slug],
        queryFn: () => fetchPageBySlug(slug),
    });
};