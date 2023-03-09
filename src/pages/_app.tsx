import styles from '../styles/index.module.css'
import '@/styles/globals.css'
import '@/styles/colors.module.css'
import { useState, useEffect, useRef } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useWindowDimensions } from '@/hooks';
import { Sidebar, Menu, MenuItem, useProSidebar, SubMenu, menuClasses, ProSidebarProvider } from 'react-pro-sidebar';
import { Nav } from '../components'
import { AppProvider } from '../hooks/useAppContext';
export default function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}:{Component:any, pageProps:any, user:any}) {
  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_API_URL,  });
  const c = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache().restore({}),
  });
  const [ client, setClient ] = useState<ApolloClient<any> | null>(c);
  const{ height, width } = useWindowDimensions() 

  const [ collapsed, setCollapsed ] = useState(false);
  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  const [ sidebar, setSidebar ] = useState(false)
  // const { collapseSidebar } = useProSidebar();
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
            <div className={styles.flex}>

            
            <Nav user={false}/>
            <Component {...pageProps} />
            </div>
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
          <Component {...pageProps} />
          </ApolloProvider>
        </AppProvider>
      )
  ) 
}