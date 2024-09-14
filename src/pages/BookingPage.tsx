// src/pages/BookingPage.tsx
import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const BookingPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Book Your Stay
      </Typography>
      <TextField
        label="Name"
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
        label="Check-in Date"
        variant="outlined"
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Check-out Date"
        variant="outlined"
        fullWidth
        margin="normal"
        type="date"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" fullWidth>
        Submit Booking
      </Button>
    </Box>
  );
};

export default BookingPage;
