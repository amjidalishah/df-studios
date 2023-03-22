"use client"
import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useApp } from '../../hooks/useAppContext/useAppContext'

export const Bar = () => {
    const { navigation, setNavigation } = useApp();
    const [ isOpen, setOpen ] = React.useState(false);
    if( navigation === null || setNavigation === null){
        return <div>Loading</div>
    }
    console.log("NAVIGATION: ",navigation)
    const toggleDrawer = ( event ) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setNavigation({ open: !navigation.open});
    };

    return(
        <AppBar style={{ width: '100%', backgroundColor: 'transparent' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2, ml: 'auto' }} // Combine the two sx props
                    onClick={(event) => toggleDrawer(event)} // Change this line
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
      </AppBar>
    )
}