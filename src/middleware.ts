import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAuthenticated = false // Replace with your auth check

  // Redirect root to appropriate page
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(isAuthenticated ? '/home' : '/auth', request.url))
  }

  // Protect /home route
  if (!isAuthenticated && request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }

  // Redirect authenticated users away from login
  if (isAuthenticated && request.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/home/:path*', '/login']
}