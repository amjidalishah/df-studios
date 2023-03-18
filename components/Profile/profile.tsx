import React from 'react';
import { useUser, UserProfile } from '@auth0/nextjs-auth0/client';
import { Avatar } from '@mui/material'
interface Props {
    className?: string;
    children?: React.ReactNode;
    user?: UserProfile;
    error?: Error;
    isLoading?: Boolean;
}
const Profile: React.FC<Props> = ({ className, children, user, error, isLoading}) => {
    if (isLoading) return <><div>Loading...</div></>;
    if (error) return <><div>{error.message}</div></>;
    return (
        <div>
            <Avatar src={user?.picture} alt={user?.name!} imgProps={{ referrerPolicy: 'no-referrer' }}/>
            {/* <h2>{user!.name}</h2>
            <p>{user!.email}</p> */}
        </div>
    )
};

export default Profile;