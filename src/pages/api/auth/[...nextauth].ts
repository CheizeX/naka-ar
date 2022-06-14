import NextAuth from 'next-auth';
// import AppleProvider from 'next-auth/providers/apple';
// import FacebookProvider from 'next-auth/providers/facebook';
// import GoogleProvider from 'next-auth/providers/google';
// import EmailProvider from 'next-auth/providers/email';
import GitHubProvider from 'next-auth/providers/github';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Credentials({
      name: 'your Email',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Ingresa tu email',
          required: true,
          autoComplete: '',
        },
        password: {
          label: 'Contraseña',
          type: 'password',
          placeholder: 'Ingresa tu contraseña',
          required: true,
          autoComplete: '',
        },
      },
      async authorize(credentials) {
        console.log(credentials);
        const url = `${process.env.NEXT_PUBLIC_AUTH_API_URL}/api/auth/login`;
        const response = await axios.post(url, credentials);
        console.log('[RESPONSE]', response);
        if (response) {
          console.log('[RESPONSE > DATA]', response?.data);
          return response.data;
        } else {
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  //Callbacks
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        switch (account.type) {
          case 'oauth':
            // TODO: crear usuario o verificar si existe en la db
            break;
          case 'credentials':
            token.user = user;
            break;
        }
      }
      console.log(token, account, user);
      return token;
    },
    async session({ session, token, user }) {
      console.log(session, token, user);

      session.accessToken = token.accessToken;
      session.user = token.user as any;

      return session;
    },
  },
});
