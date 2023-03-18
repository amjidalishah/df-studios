// "use client"
import '../styles/globals.css';
import { Nav } from '../components'
import { GraphQLClient } from 'graphql-request'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UserProvider } from '@auth0/nextjs-auth0/client';
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <UserProvider>
        
          <Nav/>
          {children}
        </UserProvider>
      </body>
    </html>
  )
} 