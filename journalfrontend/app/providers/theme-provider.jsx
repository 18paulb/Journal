'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(null);

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useTheme must be used within a ThemeProvider');
  return theme;
}

export function ThemeProvider({ children }) {
  const [backgroundColor, setBackgroundColor] = useState('rgb(239, 246, 255)');

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
