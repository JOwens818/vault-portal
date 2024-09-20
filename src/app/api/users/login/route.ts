import { fetcher, setupRequestInit } from '@/lib/request';
import { UserResponse } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const requestInit = setupRequestInit('POST');
  const body = await req.json();
  requestInit.body = JSON.stringify(body);
  const user: UserResponse = await fetcher('http://localhost:3030/api/users/login', requestInit);
  return NextResponse.json(user, { status: 200 });
}
