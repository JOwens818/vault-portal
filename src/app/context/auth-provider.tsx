'use client';
import { FC, useState, ReactNode, createContext, useMemo } from 'react';
import { User } from '@/types';

const defaultUser: User = { username: 'no-user' };
const AuthContext = createContext({
  user: defaultUser,
  updateUser: (_user: User) => {}
});

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);
  const value = useMemo(() => {
    const updateUser = (user: User) => {
      setUser(user);
    };
    return { user, updateUser };
  }, [user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
