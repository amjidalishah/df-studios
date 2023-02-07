import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import { Nav } from './components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>
    </div>
  )
}
