// src/pages/InfoPage.tsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const InfoPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Information
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Owner: John Doe" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Phone: (123) 456-7890" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email: johndoe@example.com" />
        </ListItem>
      </List>
    </Box>
  );
};

export default InfoPage;
