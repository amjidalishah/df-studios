import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'
import { Logo, Button, Profile } from '../'
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const Nav = () => { 
  // const { user, error, isLoading } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link href='/' className={styles.link}>
          <Logo/>
        </Link>
      </div>
      <Link href="/booking" className={styles.link}>BOOKING</Link>
      <Link href="/about" className={styles.link}>ABOUT</Link>
      <Link href="/pricing" className={styles.link}>PRICING</Link>
      <div className={styles.button}>
        <Button className={styles.button} link='http://localhost:1337/api/connect/auth0' text='LOGIN'/> 
      </div>
    </div>
  )
}

// export default withSession(MyApp);
const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "user",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false
  },
};
// export const getServerSideProps = withIronSessionSsr(
//   async function getServerSideProps({ req }) {
//     console.log('REQUEST',req)
//     const user = req.session.user;

//     console.log('SESSION: ', req.session)

//     if (user.admin !== true) {
//       return {
//         notFound: true,
//       };
//     }

//     return {
//       props: {
//         user: req.session.user,
//       },
//     };
//   },sessionOptions
// );
export async function getServerSideProps() {
  console.log('testing')
};
export default Nav
