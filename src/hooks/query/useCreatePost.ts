import { useMutation } from '@tanstack/react-query';
import { createPost } from '../../api/wpRequests'
import { PostData, PostResponse } from 'src/types/createTypes';
 
export const useCreatePost = () => {
    return useMutation<PostResponse, Error, PostData>({
      mutationFn: (newPost: PostData) => {
        console.log("Creating post with data:", newPost);
        return createPost(newPost);
      },
      onError: (error: Error) => {
        console.error('Error creating post:', error);
      },
      onSuccess: (data: PostResponse) => {
        console.log('Post created successfully:', data);
      },
    });
  };