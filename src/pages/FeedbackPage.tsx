// src/pages/FeedbackPage.tsx
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const FeedbackPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Feedback & Maintenance Requests
      </Typography>
      <TextField
        label="Your Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        type="email"
      />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" fullWidth>
        Send Feedback
      </Button>
    </Box>
  );
};

export default FeedbackPage;
