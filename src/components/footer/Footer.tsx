import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/ng_logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f56203', 
        boxShadow: '0 -4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{ height: 40 }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link component={RouterLink} to="/terms" sx={{ mx: 2, color: 'text.primary', textDecoration: 'none' }}>
            Terms of Use
          </Link>
          <Link component={RouterLink} to="/privacy" sx={{ mx: 2, color: 'text.primary', textDecoration: 'none' }}>
            Privacy
          </Link>
          <Link component={RouterLink} to="/about" sx={{ mx: 2, color: 'text.primary', textDecoration: 'none' }}>
            About
          </Link>
          <Link component={RouterLink} to="/admin" sx={{ mx: 2, color: 'text.primary', textDecoration: 'none' }}>
            Admin
          </Link>
        </Box>
      </Box>
      <Divider sx={{ width: '100%', mb: 1 }} />
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; {currentYear} Norsk Gjenvining. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
