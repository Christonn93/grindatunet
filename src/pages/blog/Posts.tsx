import React from "react";
import { Box, Typography } from "@mui/material";
import { Post as PostType } from "../../types/blogTypes";
import Post from '../../components/posts/Post';

const Posts: React.FC = () => {
 const mockPost: PostType = {
  id: "1",
  title: "Sample Post",
  heroImage: "https://via.placeholder.com/800x400",
  images: ["https://via.placeholder.com/200", "https://via.placeholder.com/200"],
  content: "This is a sample post content.",
  tags: "#sample #post",
  date: new Date().toISOString(),
  author: "John Doe",
 };

 return (
  <Box sx={{ mt: 4, mx: "auto", maxWidth: 800 }}>
   <Typography variant="h4" gutterBottom>
    Blog Posts
   </Typography>
   <Post post={mockPost} />
  </Box>
 );
};

export default Posts;
