'use client';
import { FC, useState, ReactNode, createContext, useEffect } from 'react';

const prefersDarkMode = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches;
const defaultTheme = prefersDarkMode ? 'dark' : 'light';
const preferredTheme = localStorage.getItem('theme');
let renderedTheme: string;
if (!preferredTheme) {
  localStorage.setItem('theme', defaultTheme);
  renderedTheme = defaultTheme;
} else {
  renderedTheme = preferredTheme;
}

const ThemeContext = createContext({
  theme: renderedTheme,
  updateTheme: (_theme: string) => {}
});

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>(renderedTheme);
  const value = useEffect(() => {
    const updateTheme = (theme: string) => {
      setTheme(theme);
      localStorage.setItem('theme', theme);
    };
    return { theme, updateTheme };
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
