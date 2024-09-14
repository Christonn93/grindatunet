// src/pages/HomePage.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Cabin Management System
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
