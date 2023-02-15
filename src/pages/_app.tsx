import '@/styles/globals.css'
import '@/styles/colors.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}:{Component:any, pageProps:any, user:any}) {
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_API_URL,
  });
  const c = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore({}),
  });
  const [client, setClient] = useState<ApolloClient<any> | null>(c);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}
const withLogging = (getServerSideProps) => {
  return async (context) => {
    console.log('Request:', context.req);
    return await getServerSideProps(context);
  };
};


// export const getServerSideProps = withIronSession(async ({ req, res }) => {
//   const user = req.session.get('user')
//   return { props: { user } }
// })