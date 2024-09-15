import { createTheme, Theme } from '@mui/material/styles';
import { useMemo, useState } from 'react';

export const tokens = (mode: 'light' | 'dark') => ({
  ...(mode === 'dark'
    ? {
        primary: { orangeMain: '#ff6600' },
        secondary: { orangeLight: '#ff8c42', orangeDark: '#c44d27' },
        greyScale: { black: '#121212', dark: '#1d1d1d', darkMid: '#4e4e4e', lightMid: '#6d6d6d', light: '#b0b0b0', white: '#ffffff' },
        error: { errorRed: '#f44336', lightErrorRed: '#ff7961' },
        background: { default: '#121212', paper: '#1d1d1d' },
        text: { primary: '#e0e0e0', secondary: '#b0b0b0', white: '#ffffff' },
      }
    : {
        primary: { orangeMain: '#ff6600' },
        secondary: { orangeLight: '#ff8c42', orangeDark: '#c44d27' },
        greyScale: { black: '#000000', dark: '#333333', darkMid: '#888888', lightMid: '#cccccc', light: '#f5f5f5', white: '#ffffff' },
        error: { errorRed: '#f44336', lightErrorRed: '#ff7961' },
        background: { default: '#ffffff', paper: '#f5f5f5' },
        text: { primary: '#000000', secondary: '#333333', white: '#ffffff' },
      }
  ),
});

export const themeSettings = (mode: 'light' | 'dark') => {
  const colors = tokens(mode);
  return {
    palette: {
      primary: { main: colors.primary.orangeMain },
      secondary: { main: colors.secondary.orangeLight, dark: colors.secondary.orangeDark, light: colors.secondary.orangeLight },
      error: { main: colors.error.errorRed, light: colors.error.lightErrorRed },
      background: { default: colors.background.default, paper: colors.background.paper },
      text: { primary: colors.text.primary, secondary: colors.text.secondary, white: colors.text.white },
    },
    typography: {
      fontSize: 16,
      fontFamily: 'RedgoRegular, sans-serif',
      fontWeightBold: 700,
      h1: { color: colors.text.primary, fontSize: '2rem', fontWeight: 700 },
      h2: { color: colors.text.primary, fontSize: '1.5rem', fontWeight: 700 },
      h3: { color: colors.primary.orangeMain, fontSize: '1.125rem', fontWeight: 700 },
      body1: { fontSize: '1rem' },
    },
    // other component styles as needed
  };
};

export const useMode = (): [Theme, () => void] => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

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
