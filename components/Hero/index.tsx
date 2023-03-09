import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './index.module.css'
import { Button } from '..'

const Hero = () => { 
    const btn_style: React.CSSProperties = {
        borderRadius: '50px'
    }
  
  return (
    <div className={styles.container}>
       
        {/* {
            slice ? 
            (<PrismicRichText field={slice.primary.title}  components={{ heading1: ({ children }) =>  <h3 className={styles.hero_h3}> {children}</h3> }} />) 
            : <></>
            // Hollywood, CA)
        }
            
        
        <h1 className={styles.hero_h}>
            Recording Studio<br/>
        </h1>
        <p className={styles.hero_p}>
            This text is imporant and should guide users to booking a room. 
            This if just filler text to get something in here, this should be re-phrased
        </p>
        <div className={styles.button_container}>
            <Button style={btn_style} link='/test' text='Book Today' />
        </div> */}
        
    </div>
  )  
}
export default Hero
