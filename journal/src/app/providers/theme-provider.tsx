'use client';

import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction, ReactNode } from 'react';

// 1. Define the context type
interface ThemeContextType {
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useTheme must be used within a ThemeProvider');
  return theme;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>('rgb(239, 246, 255)');

  useEffect(() => {
    // Load theme from localStorage (if exists)
    const savedColor = localStorage.getItem('theme-background');
    if (savedColor) setBackgroundColor(savedColor);
  }, []);

  useEffect(() => {
    // Save theme to localStorage when changed
    localStorage.setItem('theme-background', backgroundColor);
  }, [backgroundColor]);

  return (
    <ThemeContext.Provider value={{ backgroundColor, setBackgroundColor }}>
      <div style={{ backgroundColor }}>{children}</div>
    </ThemeContext.Provider>
  );
}
