// Define the interface for the post data
export interface PostData {
 title: string;
 heroImage: string;
 images: string[];
 content: string;
 tags: string;
 date: string;
 author: string;
}

// Define the interface for the response data if needed
export interface PostResponse {
 id: number;
 title: { rendered: string };
 content: { rendered: string };
 // Add other fields as needed
}
