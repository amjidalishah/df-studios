'use client';
import * as React from 'react';
import Link from 'next/link'
import styles from './Nav.module.css';
import { useUser } from '@auth0/nextjs-auth0/client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface NextEvent {
  date: string;
}

interface Props {
  align?: string;
  fontFamily?: string;
  fontSize?: string;
  color?: string;
}
const Nav = () => {
  const [isOpen, setOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const { user } = useUser();
  const router = useRouter();
  const toggleDrawer = (toggle) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(toggle);
  };

  const listItemTextStyle = {
    fontFamily: 'Passion One, cursive',
    fontSize: '24px',
    color: 'white',
    textAlign: 'center',
  };
  console.log(user)

  const nextEvent = {
    date: '2023-04-25',
  };
  return (
    <div className={styles.container}>
      <AppBar style={{ width: '100%', backgroundColor: 'transparent' }}>
        <Toolbar>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, ml: 'auto' }} // Combine the two sx props
          onClick={toggleDrawer(!isOpen)} // Change this line
        >
          <MenuIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
            width: isMobile ? '100%' : '50%' // Add this line
          },
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flexGrow: 1 }}>
            {
              user ? (
                <Box sx={{ height: '100%', width: '100%', flexGrow: 1, color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {/* Add Logout link */}
                <Box sx={{ alignSelf: 'flex-start', paddingLeft: '16px' }}>
                  <Link href="/api/auth/logout" passHref>
                    <Button color="inherit" href="/api/auth/logout">
                      Logout
                    </Button>
                  </Link>
                </Box>
                {/* Center the profile picture */}
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  {
                    user.picture ? (
                      <Image
                        src={ user.picture }
                        alt="Profile"
                        width={50} // Adjust the width as needed
                        height={50} // Adjust the height as needed
                        style={{ borderRadius: '50%' }}
                      />
                    ) : (
                      <div>

                      </div>
                    )
                  }
                </Box>
                {/* Display the date of the next booked event */}
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                  <Typography>
                    Next event: {nextEvent.date}
                  </Typography>
                </Box>
                {/* Add your logic to display the user's next booking */}
              </Box>
              ) : (
                <Button sx={{ height: '100%', width: '100%', flexGrow: 1, color: 'white', display: 'flex', justifyContent: 'center' }} color="inherit" href='/api/auth/login'>
                  Login
                </Button>
              )
            }
          </Box>
          <Divider />
          <Box sx={{ flexGrow: 1 }}>
            <List>
              {['Rooms', 'Booking', 'About'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ marginBottom: '20px' }}>
                  <ListItemButton sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <ListItemText primary={text} sx={{ fontFamily: 'Passion One, cursive', fontSize: '24px', color: 'white', textAlign: 'center' }}  />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default Nav;