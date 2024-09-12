import { NextMiddleware, NextRequest, NextResponse } from 'next/server';

export const middleware: NextMiddleware = async (req: NextRequest) => {
  const token = req.cookies.get('vault_token');
  if (!token) {
    return NextResponse.json({ status: 'error', message: 'Missing vault token' }, { status: 401 });
  }
  const headers = new Headers(req.headers);
  headers.set('Authorization', `Bearer ${token.value}`);
  return NextResponse.next();
};

export const config = {
  matcher: ['/api/:path*']
};
