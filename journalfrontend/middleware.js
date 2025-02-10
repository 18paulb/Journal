// middleware.ts
import { NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0/edge';

// Function to check if the route should be public
function isPublicRoute(pathname) {
  const publicRoutes = [
    '/',              // Landing page
    '/api/auth/login',
    '/api/auth/logout',
    '/api/auth/callback',
  ];
  return publicRoutes.includes(pathname);
}

export async function middleware(req) {
  // Allow public routes to bypass authentication
  if (isPublicRoute(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const user = await getSession(req);

  if (!user) {
    // Redirect to login if not authenticated
    // Store the intended destination to redirect back after login
    const returnTo = encodeURIComponent(req.nextUrl.pathname);

    console.log("URL:", req.url)
    return NextResponse.redirect(
      new URL(`/api/auth/login?returnTo=${returnTo}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public|api/auth).*)',
  ],
};