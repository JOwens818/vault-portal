import { NextMiddleware, NextRequest, NextResponse } from 'next/server';

export const middleware: NextMiddleware = async (req: NextRequest) => {
  const token = req.cookies.get('vault_session');
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }
};

export const config = {
  matcher: ['/protected/:path*']
};
