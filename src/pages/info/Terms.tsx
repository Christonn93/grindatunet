import React from 'react';
import { Box, Typography } from '@mui/material';

const Terms: React.FC = () => {
  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        Terms of Use
      </Typography>
      <Typography variant="body1">
        By using this platform, you agree to the terms and conditions outlined here.
      </Typography>
      {/* Add full terms content here */}
    </Box>
  );
};

export default Terms;
