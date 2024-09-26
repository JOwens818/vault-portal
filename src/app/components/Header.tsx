'use client';

import React, { FC } from 'react';
import { SiVault } from 'react-icons/si';
import { FaUserAstronaut } from 'react-icons/fa6';
import { Button } from 'react-aria-components';
import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';
import { User } from '@/types';

interface HeaderProps {
  user: User;
}

const VaultHeader: FC<HeaderProps> = (props): React.JSX.Element => {
  return (
    <div className="header flex justify-between ml-8 mr-8 mt-4 relative">
      <Link href="/">
        <SiVault className="h-8 w-8" href="/" />
      </Link>

      <div className="items-center flex">
        <ThemeSwitch />
        {props.user.username !== '' && (
          <Button className="ml-6">
            <FaUserAstronaut className="h-8 w-8" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default VaultHeader;
