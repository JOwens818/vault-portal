'use client';

import {
  HiOutlineSun as SunIcon,
  HiOutlineMoon as MoonIcon
} from 'react-icons/hi2';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className="h-6 w-6 hover:cursor-pointer"
        onClick={() => setTheme('light')}
      />
    );
  }

  if (currentTheme === 'light') {
    return (
      <MoonIcon
        className="h-6 w-6 hover:cursor-pointer"
        onClick={() => setTheme('dark')}
      />
    );
  }
};

export default ThemeSwitch;
