// src/pages/RulesPage.tsx
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const RulesPage: React.FC = () => {
  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 8, p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Cabin Rules
      </Typography>
      <List>
        <ListItem>Respect the property and neighbors.</ListItem>
        <ListItem>No smoking inside the cabin.</ListItem>
        <ListItem>No pets allowed.</ListItem>
        <ListItem>Check-out by 11 AM.</ListItem>
      </List>
    </Box>
  );
};

export default RulesPage;
