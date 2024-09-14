// src/pages/BlogPage.tsx
import React from 'react';
import { Box } from '@mui/material';
import PostForm from '../components/posts/PostForm';
import { Post as PostType } from '../types/blogTypes';
import Post from '../components/posts/Post';

const BlogPage: React.FC = () => {
  const mockPost: PostType = {
    id: '1',
    title: 'Sample Post',
    heroImage: 'https://via.placeholder.com/800x400',
    images: ['https://via.placeholder.com/200', 'https://via.placeholder.com/200'],
    content: 'This is a sample post content.',
    tags: '#sample #post',
    date: new Date().toISOString(),
    author: 'John Doe',
  };
  
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 8, p: 2 }}>
     <PostForm />
     <Post post={mockPost} />
    </Box>
  );
};

export default BlogPage;
