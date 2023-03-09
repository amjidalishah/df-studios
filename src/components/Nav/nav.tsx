import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'
import { Logo, Button, Profile } from '../'
import { Squash as Hamburger } from 'hamburger-react'

const Nav = ({ user, ref }: { user: any, ref: any}) => { 

  const [isOpen, setOpen] = React.useState(false)
  

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Link href='/' className={styles.link}>
          <Logo/>
        </Link>
      </div>
      <Link href="/rooms" className={styles.link}>ROOMS</Link>  
      <Link href="/booking" className={styles.link}>BOOKING</Link>
      <Link href="/about" className={styles.link}>ABOUT</Link>
      <div className={styles.button}>
      {
        user ? <div className={styles.burger}><Hamburger toggled={isOpen} toggle={setOpen} size={40} color="white"/></div> : <Button className={styles.button} link='http://localhost:1337/api/connect/auth0' text='LOGIN'/> 
      }
      </div>
    </div>
  )
}

// export default withSession(MyApp);


export default Nav
