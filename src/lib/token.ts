import { User, UserResponse } from '@/types';
import { fetcher, setupRequestInit } from './request';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const validateToken = async (): Promise<User> => {
  const token = cookies().get('vault_token')?.value;
  const requestInit = setupRequestInit('GET', token);
  const resp: UserResponse = await fetcher('http://localhost:3030/api/users/user-info', requestInit);
  if (resp.status !== 'success') {
    redirect('/login');
  }
  return resp.data!;
};

export { validateToken };
