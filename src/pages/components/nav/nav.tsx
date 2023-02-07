import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Nav.module.css'
import { Logo } from '../'
import Button from '../button'


export default function Nav() { 
  
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Logo/>
      </div>
      <Link href="/booking" className={styles.link}>BOOKING</Link>
      <Link href="/about" className={styles.link}>ABOUT</Link>
      <Link href="/pricing" className={styles.link}>PRICING</Link>
      <Button link='/link' text='Reserve Room'/>
    </div>
  )
}
