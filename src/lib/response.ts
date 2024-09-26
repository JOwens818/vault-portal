import { UserResponse } from '@/types';
import { NextResponse } from 'next/server';

const sendTokenAsCookie = async (userResp: UserResponse) => {
  const response = NextResponse.json({ status: 'success', message: 'Token generated' }, { status: 200 });
  response.cookies.set('vault_token', userResp.data!.token!, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 1800
  });

  return response;
};

const sendFriendlyLoginMessage = (userResp: UserResponse) => {
  if (userResp.message !== 'Invalid username or password') {
    userResp.message = 'Server Error Encountered';
    return NextResponse.json(userResp, { status: 500 });
  }
  return NextResponse.json(userResp, { status: 401 });
};

const sendFriendlySignupMessage = (userResp: UserResponse) => {
  if (
    userResp.message?.includes('username') ||
    userResp.message?.includes('password') ||
    userResp.message?.includes('email')
  ) {
    return NextResponse.json(userResp, { status: 400 });
  }

  userResp.message = 'Server Error Encountered';
  return NextResponse.json(userResp, { status: 500 });
};

export { sendTokenAsCookie, sendFriendlyLoginMessage, sendFriendlySignupMessage };
