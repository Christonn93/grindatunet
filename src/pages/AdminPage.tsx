import React from 'react';
import { Box, Typography } from '@mui/material';

const AdminPage: React.FC = () => {
  return (
    <Box sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Admin Page
      </Typography>
      <Typography variant="body1">
        This is the admin page. You will manage your WordPress site here.
      </Typography>
    </Box>
  );
};

export default AdminPage;