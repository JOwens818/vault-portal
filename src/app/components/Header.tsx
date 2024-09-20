'use client';

import React, { FC, useContext } from 'react';
import { AuthContext } from '@/app/context/auth-provider';
import { SiVault } from 'react-icons/si';
import { FaUserAstronaut } from 'react-icons/fa6';
import { Button } from 'react-aria-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';

const VaultHeader: FC = (): React.JSX.Element => {
  const { user } = useContext(AuthContext);
  const path = usePathname();
  const doNotRender = ['/', '/login', '/signup'];

  if (doNotRender.includes(path)) return <></>;

  return (
    <div className="header flex justify-between ml-8 mr-8 mt-4 relative">
      <Link href="/">
        <SiVault className="h-8 w-8" href="/" />
      </Link>

      <div className="items-center flex">
        <ThemeSwitch />
        {user.username !== 'no-user' && (
          <Button className="ml-6">
            <FaUserAstronaut className="h-8 w-8" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default VaultHeader;
