'use client';
import React, { FC, useContext } from 'react';
import { AuthContext } from '@/app/context/auth-provider';
import { SiVault } from 'react-icons/si';
import { FaUserAstronaut } from 'react-icons/fa6';
import { Button } from 'react-aria-components';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

const VaultHeader: FC = (): React.JSX.Element => {
  const { user } = useContext(AuthContext);

  return (
    <div className="header flex justify-between ml-8 mr-8 mt-4">
      <Link href="/">
        <SiVault size={36} href="/" />
      </Link>

      <div>
        <ThemeSwitch />
        {user.username != 'no-user' && (
          <Button>
            <FaUserAstronaut size={36} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default VaultHeader;
