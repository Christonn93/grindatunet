// src/pages/PhotoPage.tsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const PhotoPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', mt: 8, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Cabin Photos
      </Typography>
      <Grid container spacing={2}>
        {/* Example photo */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{ padding: 2 }}>
            <img
              src="https://via.placeholder.com/300"
              alt="Sample"
              style={{ width: '100%', height: 'auto' }}
            />
          </Paper>
        </Grid>
        {/* Add more photos similarly */}
      </Grid>
    </Box>
  );
};

export default PhotoPage;
