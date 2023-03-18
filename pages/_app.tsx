import styles from '../styles/index.module.css'
import '../styles/globals.css'
import { useState, useEffect, useRef } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu, menuClasses, ProSidebarProvider } from 'react-pro-sidebar';
import { Nav } from '../components'
import { AppProvider } from '../hooks/useAppContext';
import { Playfair_Display } from 'next/font/google'
import React, { Suspense } from 'react';
const playfair = Playfair_Display({ weight:'400', style: 'normal', subsets: ['cyrillic'] })
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}:{Component:any, pageProps:any, user:any}) {
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_API_URL
  })
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore({}),
  })
  return (
    <AppProvider>
      <ApolloProvider client={client}>
          <style jsx global>{`
        html {
          font-family: ${playfair.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
      </ApolloProvider>
    </AppProvider>
  ) 
}