import type { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from './prisma'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Hasło', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) return null
        const ok = await bcrypt.compare(credentials.password, user.passwordHash)
        if (!ok) return null
  return { id: String(user.id), name: user.name ?? user.email, email: user.email, role: user.role, permissions: (user as any).permissions ?? {}, locale: user.locale }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // @ts-ignore
        token.id = user.id
        // @ts-ignore
        token.role = (user as any).role
        // @ts-ignore
        token.permissions = (user as any).permissions ?? {}
        // @ts-ignore
        token.locale = (user as any).locale ?? 'pl'
      }
      return token
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user.id = token.id
      // @ts-ignore
      // @ts-ignore
      session.user.role = token.role
      // @ts-ignore
      session.user.locale = token.locale ?? 'pl'
      // @ts-ignore
      session.user.permissions = token.permissions ?? {}
      return session
    }
  },
  pages: { signIn: '/login' }
}
