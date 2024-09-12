import { NextRequest, NextResponse, NextMiddleware } from 'next/server';
import fetcher from '@/lib/request';
import { UserResponse } from '@/types';

const authMiddleware: NextMiddleware = async (req: NextRequest) => {
  const hasVaultToken = req.cookies.get('vault_token');

  if (!hasVaultToken) {
    return NextResponse.redirect('/');
  }

  if (hasVaultToken) {
    console.log('calling user-info endpoint');
    const options: RequestInit = {
      credentials: 'include',
      method: 'GET',
      headers: new Headers({ Authorization: `Bearer ${hasVaultToken.value}` })
    };
    const user: UserResponse = await fetcher('http://localhost:3030/api/users/user-info', options);

    if (user.status !== 'success') {
      return NextResponse.redirect('/');
    }
  }
  return NextResponse.next();
};

export default authMiddleware;
