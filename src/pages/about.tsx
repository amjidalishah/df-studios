import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import { Nav, Hero } from '../components'
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

export default function About() {
  return (
    <div className={styles.container}>
      <Nav/>
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