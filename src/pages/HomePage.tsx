import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import PageContent from '../components/content/PageContent'

const HomePage: React.FC = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Cabin Management System
        </Typography>
        <PageContent slug='home'/>
      </Box>
    </Container>
  );
};

export default HomePage;
