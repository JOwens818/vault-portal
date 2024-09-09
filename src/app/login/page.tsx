'use client';
import { useContext } from 'react';
import { AuthContext } from '../context/auth-provider';

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex items-center justify-center p-20 pt-32">
      <div>
        <h1 className="max-w-3xl text-center font-bold text-5xl leading-tight mb-3">
          LOGIN {user.username}
        </h1>
      </div>
    </div>
  );
}
