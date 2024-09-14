import React from 'react';
import { Box, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 800 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        We are Norsk Gjenvinning, committed to environmental sustainability. Learn more about our mission, team, and values.
      </Typography>
    </Box>
  );
};

export default About;
