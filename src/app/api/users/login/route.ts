import { fetcher, setupRequestInit } from '@/lib/request';
import { sendFriendlyLoginMessage, sendTokenAsCookie } from '@/lib/response';
import { UserResponse } from '@/types';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const requestInit = setupRequestInit('POST');
  const body = await req.json();
  requestInit.body = JSON.stringify(body);
  const user: UserResponse = await fetcher('http://localhost:3030/api/users/login', requestInit);
  if (user.status !== 'success') {
    return sendFriendlyLoginMessage(user);
  }
  return sendTokenAsCookie(user);
}
