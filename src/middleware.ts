import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function middleware(request: NextRequest) {
console.log("URL:", supabaseUrl);
console.log("KEY:", supabaseKey?.slice(0, 10)); // Don't print full key in prod
  return await updateSession(request, supabaseUrl, supabaseKey)
  
}




export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/home',
    '/messages',
    '/notifications',
    '/settings',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}