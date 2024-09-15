import { createTheme, Theme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { tokens } from './colorTokens';

export const themeSettings = (mode: 'light' | 'dark') => {
  const colors = tokens(mode);

  return {
    palette: {
      primary: { main: colors.primary.orangeMain }, // Main Orange
      secondary: { 
        main: colors.secondary.tealBright,         // Teal Bright
        dark: colors.secondary.tealDark,           // Teal Dark
        light: colors.secondary.tealBright         // Teal Bright (used for both main and light)
      },
      error: { 
        main: colors.error?.errorRed || '#f44336', // Error handling, default in case not provided
        light: colors.error?.lightErrorRed || '#ff7961' 
      },
      background: { 
        default: colors.background.default,        // Background Default
        paper: colors.background.paper             // Paper Background
      },
      text: { 
        primary: colors.text.primary,              // Text Primary
        secondary: colors.text.secondary,          // Text Secondary
        white: colors.text.white                   // Text White
      },
    },
    typography: {
      fontSize: 16,
      fontFamily: 'RedgoRegular, sans-serif',      // Custom Font
      fontWeightBold: 700,
      h1: { 
        color: colors.text.primary, 
        fontSize: '2rem', 
        fontWeight: 700 
      },
      h2: { 
        color: colors.text.primary, 
        fontSize: '1.5rem', 
        fontWeight: 700 
      },
      h3: { 
        color: colors.primary.orangeMain, 
        fontSize: '1.125rem', 
        fontWeight: 700 
      },
      body1: { fontSize: '1rem' },                // Body text size
    },
    // Add additional component styles here as needed
  };
};

export const useMode = (): [Theme, () => void] => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const storedMode = localStorage.getItem('appTheme');
    return storedMode === 'dark' ? 'dark' : 'light';
  });

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => {
      const newMode = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('appTheme', newMode);
      return newMode;
    });
  };

  return [theme, toggleColorMode];
};
