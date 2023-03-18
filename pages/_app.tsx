import styles from '../styles/index.module.css'
import '../styles/globals.css'
import { useState, useEffect, useRef } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useWindowDimensions } from 'hooks';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu, menuClasses, ProSidebarProvider } from 'react-pro-sidebar';
import { Nav } from '../components'
import { AppProvider } from '../hooks/useAppContext';
import { Playfair_Display } from 'next/font/google'

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

  const{ height, width } = useWindowDimensions() 
  const [ collapsed, setCollapsed ] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed)
  }

  const [ sidebar, setSidebar ] = useState(false)

  useEffect(()=> {
    if( width && width < 756 ){
      setSidebar(true)
    } else {
      setSidebar(false)
    }
  },[width])

  return (
    !( sidebar ) 
    ?  
      (
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
    : 
      (
        <AppProvider>
          <ApolloProvider client={client}>
            <ProSidebarProvider>
              <Sidebar collapsed={collapsed}>
                <Menu iconShape="square">
                  <MenuItem onClick={() => router.push('/')}>
                    Home
                  </MenuItem>
                  <SubMenu title="Components">
                    <MenuItem onClick={() => router.push('/components/button')}>
                      Button
                    </MenuItem>
                    <MenuItem onClick={() => router.push('/components/card')}>
                      Card
                    </MenuItem>
                  </SubMenu>
                </Menu>
              </Sidebar>
            </ProSidebarProvider>
          <button onClick={toggleMenu}>Toggle menu</button>
          <style jsx global>{`
            html {
              font-family: ${playfair.style.fontFamily};
            }
          `}</style>
          <Component {...pageProps} />
          </ApolloProvider>
        </AppProvider>
      )
  ) 
}