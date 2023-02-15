import { React, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import { AppProps } from 'next/app'
import { Nav, Hero } from '../components'
import { useQuery, gql } from '@apollo/client';
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

const Page = ({ user }) => {
  return (
    <div className={styles.container}>
      <Nav user={user}/>
      <Hero/>
    </div>
  );
};
export default Page;
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
    return {
      props: {
        user: req.session.user
      },
    };
  },sessionOptions
);