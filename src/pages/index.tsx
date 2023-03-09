import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import { AppProps } from 'next/app'
import { Nav, Hero } from '../components'
import { useQuery, gql } from '@apollo/client';
import { Media } from '../types'
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
// import { GET_HOME } from '@/queries'

export const GET_HOME = gql`
  query GetHome {
    home {
      data {
        attributes{
          header
          location
          description
          button_text
          main_img {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

const Page: React.FC = ({ user }) => {
  const { loading, error, data } = useQuery<any>(GET_HOME);
  if (loading) return (<p>Loading... </p>)
  if (error) return (<p>Error: {error.message} </p>)

  const media:Media = data.home.data.attributes.main_img
  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ position: 'relative', width: data.home.data.attributes.main_img.data.attributes.formats.large.width, height: data.home.data.attributes.main_img.data.attributes.formats.large.height, transform: 'translateY(30px)'}}>
        <Image style={{ objectFit: 'contain', transform: 'scaleX(-1)' }} fill={true} src={ data.home.data.attributes.main_img.data.attributes.formats.large.url }/ >
        <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%'}}>
          <div style={{ height: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', transform: 'translateY(25%)' }}>
            <h1 style={{ width: '400px', color: 'white', textAlign: 'center', zIndex: '0', fontSize: '8px', fontSize: '50px', margin: '0', border: '0' }}>
            { 
              data.home.data.attributes.header 
            }
            </h1>
            <div style={{ width: '400px', color: 'white', textAlign: 'center', zIndex: '0', fontSize: '10px',  lineHeight: '2'}}>
            { 
              data.home.data.attributes.description 
            }
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <div style={{ width: '400px', color: 'white', textAlign: 'center', fontSize: '35px' }}>
                Learn More
              </div>
              {/* <div style={{ width: '400px', color: 'white', textAlign: 'center', fontSize: '35px' }}>
              { 
                data.home.data.attributes.button_text 
              }
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page

const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "session",
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false
  },
}

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
)