import * as React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './index.module.css'

export default function Logo() {
  return (
    <div className={styles.border}>
      <div className={styles.container}>
        <span className={styles.upper}>D</span>
        <span className={styles.lowercase}>akotah</span><span className={styles.upper}>F</span><span className={styles.lowercase}>errari</span>
      </div>
    </div>
  )
}
