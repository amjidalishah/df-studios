"use client"
import * as React from 'react'
import Image from 'next/image';
import { Drawer as MDrawer } from '@mui/material';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useApp } from '../../hooks/useAppContext/useAppContext'
import { isBooleanObject } from 'util/types';

export const Drawer = ({ children }) => {
    const [isOpen, setOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width: 600px)');
    const { navigation, setNavigation } = useApp();

    console.log("NAVIGATION: ",navigation)

    if( navigation === null || setNavigation === null){
        return <div>Loading</div>
    
    }
    const toggleDrawer = (toggle) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setNavigation({ open: toggle });
    };
    React.useEffect(() => {
        return () => {
            setOpen( navigation.open )
        }
    }, [navigation.open])
    return (
        <MDrawer
            anchor={'right'}
            open={ navigation.open }
            onClose={ () => setNavigation({ open: true }) }
            onOpen={ () => setNavigation({ open: true }) }
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    width: isMobile ? '100%' : '50%' // Add this line
                }
            }}
        >
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ flexGrow: 1 }}>
                {
                    children
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
                ))
                }
                </List>
            </Box>
            </Box>
        </MDrawer>
    )
}

