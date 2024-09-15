import React from 'react';
import { Box } from '@mui/material';
import PostForm from '../../components/form/PostForm';

const CreatePost: React.FC = () => {
  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 800 }}>
      <PostForm />
    </Box>
  );
};

export default CreatePost;
