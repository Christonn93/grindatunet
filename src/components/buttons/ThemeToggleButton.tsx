import React from 'react';
import { Button } from '@mui/material';
import { useThemeStore } from '../../store/themeStore';

const ThemeToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useThemeStore();

  return (
    <Button onClick={toggleTheme} variant="contained" color="primary">
      Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};

export default ThemeToggleButton;