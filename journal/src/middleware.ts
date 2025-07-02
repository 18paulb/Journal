// middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@auth0/nextjs-auth0/edge';

// Function to check if the route should be public
function isPublicRoute(pathname: string) {
  const publicRoutes = [
    '/',              // Landing page
    '/api/auth/login',
    '/api/auth/logout',
    '/api/auth/callback',
    '/info/contact-us',
    '/info/privacy-policy',
    '/info/terms-of-service',
    "/journalLogo.jpg"
  ];
  return publicRoutes.includes(pathname);
}

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();
  
  // Allow public routes to bypass authentication
  if (isPublicRoute(req.nextUrl.pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const user = await getSession(req, response);

  if (!user) {
    // Handle differently based on whether it's an API route or a page
    if (req.nextUrl.pathname.startsWith('/api/')) {

      // For API routes, return 401 Unauthorized instead of redirecting
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized', message: 'Authentication required' }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

    } else {
      // For regular routes, redirect to login
      const returnTo = encodeURIComponent(req.nextUrl.pathname);
      return NextResponse.redirect(
        new URL(`/api/auth/login?returnTo=${returnTo}`, req.url)
      );
    }
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