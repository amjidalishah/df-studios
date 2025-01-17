// import NextAuth, { AuthOptions } from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import Auth0Provider from "next-auth/providers/auth0";

// export const authOptions: AuthOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     Auth0Provider({
//         clientId: process.env.AUTH0_CLIENT_ID,
//         clientSecret: process.env.AUTH0_CLIENT_SECRET,
//         issuer: process.env.AUTH0_ISSUER
//       })
//   ],
//   callbacks: {

//   }
    
// }

// export default NextAuth(authOptions)

// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
export default handleAuth({
    async login(req, res) {
      try {
        await handleLogin(req, res, { 
          returnTo: '/',
          authorizationParams: {
            response_type: 'code',
            scope: 'openid profile email',
          }
        });
      } catch (error) {
        res.status(error.status || 500).end(error.message);
      }
    }
  });