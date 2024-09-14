import React from 'react';
import { Box, Typography } from '@mui/material';

const Privacy: React.FC = () => {
  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1">
        Your privacy is important to us. Learn about the data we collect and how we use it.
      </Typography>
      {/* Add full privacy policy content here */}
    </Box>
  );
};

export default Privacy;
