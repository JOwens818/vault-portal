'use client';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/auth-provider';
import { ThemeContext } from '../context/theme-provider';
import { SiVault } from 'react-icons/si';
import { FaUserAstronaut } from 'react-icons/fa6';
import { Button } from 'react-aria-components';
import Link from 'next/link';

export default function VaultHeader() {
  const { user, updateUser } = useContext(AuthContext);
  const { theme, updateTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    updateUser({ username: 'newUser' });
  };

  useEffect(() => {
    if (theme == 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="header flex justify-between ml-8 mr-8 mt-4">
      <Link href="/">
        <SiVault size={36} href="/" />
      </Link>

      {user.username != 'no-user' && (
        <Button onPress={toggleTheme}>
          <FaUserAstronaut size={36} />
        </Button>
      )}
    </div>
  );
}
