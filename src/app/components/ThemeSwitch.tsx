'use client';

import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from 'react-icons/hi2';
import React, { useState, useEffect, FC } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitch: FC = (): React.JSX.Element => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>;

  if (currentTheme === 'dark') {
    return <SunIcon className="h-8 w-8 hover:cursor-pointer" onClick={() => setTheme('light')} />;
  }

  return <MoonIcon className="h-8 w-8 hover:cursor-pointer" onClick={() => setTheme('dark')} />;
};

export default ThemeSwitch;
