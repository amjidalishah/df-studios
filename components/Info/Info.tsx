"use client"
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
export const Info = ({ session }) => {
    session = JSON.parse(session)
    if(!session){
        return <div>Loading</div>
    }
    console.log("SESSION:", session.user.picture)
    return (
        <Box sx={{ height: '100%', width: '100%', flexGrow: 1, color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Add Logout link */}
            <Box sx={{ alignSelf: 'flex-start', paddingLeft: '16px' }}>
                <Link href="/api/auth/logout" as="/api/auth/logout" passHref>
                    <Button color="inherit" href="/api/auth/logout">
                        Logout
                    </Button>
                </Link>
            </Box>
            {/* Center the profile picture */}
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
            {/* {
                session.user.picture ? (
                    <Image
                        src={ session.user.picture }
                        alt="Profile"
                        width={50} // Adjust the width as needed
                        height={50} // Adjust the height as needed
                        style={{ borderRadius: '50%' }}
                    />
                ) : (
                    <div>
                        <div>

                        </div>
                        <Button sx={{ height: '100%', width: '100%', flexGrow: 1, color: 'white', display: 'flex', justifyContent: 'center' }} color="inherit" href='/api/auth/login'>
                            Login
                        </Button>
                    </div>
                )
            } */}
            </Box>
            {/* Display the date of the next booked event */}
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: '16px' }}>
                <Typography>
                    Next Event: SOMETHING
                </Typography>
            </Box>
            {/* Add your logic to display the user's next booking */}
        </Box>
    )
}