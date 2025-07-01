import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: {params: Record<string, string>}) {
  // Await params before using it
  const authParams = await params;

  return handleAuth({
    login: handleLogin({
      returnTo: '/home',
    }),
    logout: handleLogout({
      returnTo: '/',
    }),
  })(request, { params: authParams });
}

export async function POST(request: NextRequest, { params }: {params: Record<string, string>}) {
  const authParams = await params;
  return handleAuth()(request, { params: authParams });
}
