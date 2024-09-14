import React from 'react';
import { Box, Typography } from '@mui/material';

const Images: React.FC = () => {
  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        Blog Images
      </Typography>
      {/* Add logic to upload or display images here */}
    </Box>
  );
};

export default Images;
