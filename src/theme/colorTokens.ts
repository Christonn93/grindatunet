export const tokens = (mode: 'light' | 'dark') => ({
    ...(mode === 'dark'
      ? {
          primary: { 
            orangeMain: '#ff6600',  // Main Orange
            brownDark: '#55433b',   // Dark Brown
            beigeLight: '#bca79d',  // Light Beige/Brown
            greenBright: '#00b125', // Bright Green
            greenDark: '#007a00',   // Dark Green
          },
          secondary: { 
            tealBright: '#00b895',  // Bright Teal Green
            tealDark: '#007f63',    // Dark Teal Green
          },
          greyScale: { 
            black: '#121212', 
            dark: '#1d1d1d', 
            darkMid: '#4e4e4e', 
            lightMid: '#6d6d6d', 
            light: '#b0b0b0', 
            white: '#ffffff' 
          },
          error: { 
            errorRed: '#f44336',    // Standard error red color
            lightErrorRed: '#ff7961' // Lighter variant of error red
          },
          background: { 
            default: '#121212', 
            paper: '#1d1d1d' 
          },
          text: { 
            primary: '#e0e0e0', 
            secondary: '#b0b0b0', 
            white: '#ffffff' 
          },
        }
      : {
          primary: { 
            orangeMain: '#ff6600',  // Main Orange
            brownDark: '#55433b',   // Dark Brown
            beigeLight: '#bca79d',  // Light Beige/Brown
            greenBright: '#00b125', // Bright Green
            greenDark: '#007a00',   // Dark Green
          },
          secondary: { 
            tealBright: '#00b895',  // Bright Teal Green
            tealDark: '#007f63',    // Dark Teal Green
          },
          greyScale: { 
            black: '#000000', 
            dark: '#333333', 
            darkMid: '#888888', 
            lightMid: '#cccccc', 
            light: '#f5f5f5', 
            white: '#ffffff' 
          },
          error: { 
            errorRed: '#f44336',    // Standard error red color
            lightErrorRed: '#ff7961' // Lighter variant of error red
          },
          background: { 
            default: '#ffffff', 
            paper: '#f5f5f5' 
          },
          text: { 
            primary: '#000000', 
            secondary: '#333333', 
            white: '#ffffff' 
          },
        }
    ),
  });
  