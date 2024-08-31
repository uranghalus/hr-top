import { auth } from './auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log('Route:', req.nextUrl.pathname);
  console.log('IS Loggedin: ', isLoggedIn);
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/signin',
    '/signup',
  ],
};
