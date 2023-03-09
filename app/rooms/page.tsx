import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/rooms.module.css'
import { Room } from '../components'
import { useQuery } from '@apollo/client';
import { useHover } from '../hooks'

import { GET_ROOMS } from '../queries/pages'
import { RoomApiResponse } from '../types'
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { v4 as uuidv4 } from 'uuid';

import { animated, useTransition, config } from "react-spring";

// const rooms = [
//     ({ style }) => { room }</animated.div>,
//     ({ style }) => <animated.div src={beach} alt="Beach" style={style} >{ room }</animated.div>,
//     ({ style }) => <animated.div src={desert} alt="Desert" style={style} >{ room}</animated.div>
// ];

export default function Booking( { user } ) {
    // const { theme } = useTheme()
    const { loading, error, data } = useQuery<RoomApiResponse>(GET_ROOMS);
    if (error) return <p>Error: {error.message}</p>;

    const [index, setIndex] = React.useState(0);
    const onClick = React.useCallback(() => setIndex(state => (state + 1) % 3), []);

    const transitions = useTransition(index, {
        from: { opacity: 1, transform: "translateX(100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 1, transform: "translateX(-150%)" },
        config: config.slow
    });

    return (
        <div className={styles.container}>
            {
                loading ?
                    <p>Loading...</p>
                    :
                    data?.rooms.data.map((room, index) => (
                        <animated.div key={room.id} style={transitions[index] ? transitions[index].props : {}}>
                        <Room {...room} />
                        </animated.div>
                    ))
            }
        </div>
    )
}
const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "session",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false
  },
};
export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req }) {
    let user = null
    if(req.session.user){
      user = req.session.user
    } else {
      user = false
    }
    return {
      props: {
        user: user
      },
    };
  },sessionOptions
);


