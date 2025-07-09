import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }
      return session
    },
    async jwt({ token, user, account }: any) {
      if (account && user) {
        token.accessToken = account.access_token
      }
      return token
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } 