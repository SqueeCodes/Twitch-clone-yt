import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware({});

export const config = {
  matcher: ['/((?!.+\\.[\\ww]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};