import create from 'zustand';

type ThemeState = {
  mode: 'light' | 'dark';
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  mode: 'light', // Default theme mode
  toggleTheme: () => set((state) => ({
    mode: state.mode === 'light' ? 'dark' : 'light',
  })),
}));