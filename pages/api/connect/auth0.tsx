import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
const jwksClient = require('jwks-rsa');
import { withIronSessionApiRoute } from "iron-session/next";
const ironOptions = {
  cookieName: "session",
  password: process.env.SECRET_COOKIE_PASSWORD,
  secure: false, // should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

async function handleAuthCallback(req: NextApiRequest, res: NextApiResponse) {
  const { id_token } = req.query;
  const user = jwt.decode(id_token);
  const jwks = jwksClient({
    jwksUri: 'https://dev-ex6v7prabrsirl65.us.auth0.com/.well-known/jwks.json',
  });
  const getKey = (header: any, callback: any) => {
    jwks.getSigningKey(header.kid, function (err: any, key: any) {
      const signingKey = key.publicKey || key.rsaPublicKey;
      callback(null, signingKey);
    });
  }
  jwt.verify(
    id_token,
    getKey,
    { algorithms: ['RS256'], audience: user.aud, issuer: user.iss },
    (err: any, user: any) => {
      if (err) {
        console.error('Error verifying JWT:', err);
        res.status(401).json({ message: 'Invalid authentication token.' });
        return;
      }
    }
  );
  // Handle the request here
  req.session.user = user
  await req.session.save();
  return res.status(200).redirect("/")
}

export default withIronSessionApiRoute(handleAuthCallback, ironOptions);


  
