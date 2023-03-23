import '../styles/globals.css';
import Nav from './Nav'
import { cookies } from 'next/headers';
import { AppProvider } from '@/hooks/useAppContext';
import { Suspense } from 'react';

export default async function RootLayout({
  children
}) {
  // console.log(`${process.env.AUTH0_BASE_URL}/api/auth/me`)
  // try{
  //   const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
  //     headers: {
  //       cookie: `appSession=${cookies().get('appSession')?.value}`
  //     }
  //   })
  //   if(res.body == null || res.status !== 200){
  //     session = false
  //   } else {
  //     session = await res.body
  //   }
  // } catch(e){
  //   session = false
  // }
  // if(!session){
    
  // }
 let session = {
user: {
picture: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
}
}
  
  const AsyncNav: JSX.Element = await Nav({ session: session })

  return (
    <html lang="en">
      <head />
      <body>
        <AppProvider>
          <Suspense fallback={<>Loading...</>}>
            { AsyncNav }
          </Suspense>
          {children}
        </AppProvider>
      </body>
    </html>
  )
} 

