'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode, FC } from 'react';

const UserThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default UserThemeProvider;
