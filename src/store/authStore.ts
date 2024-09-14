import create from 'zustand';

// Define a type for your auth store
interface AuthState {
  user: {
    id: string;
    token: string;
  } | null;
  setUser: (user: { id: string; token: string } | null) => void;
  clearUser: () => void;
}

// Create the Zustand store
export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
