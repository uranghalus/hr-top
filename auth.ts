import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GitHub from 'next-auth/providers/github';
import { db } from './lib/db';
export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({ adapter: PrismaAdapter(db) });
