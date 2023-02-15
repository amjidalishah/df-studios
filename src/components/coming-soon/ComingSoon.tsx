import * as React from 'react'
import { useScroll, animated, useSpring, SpringValue } from '@react-spring/web'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/index.module.scss'

const X_LINES = 40

const PAGE_COUNT = 5

const INITIAL_WIDTH = 20


export default function Home() {

  const containerRef = React.useRef<HTMLDivElement>(null!)
  const barContainerRef = React.useRef<HTMLDivElement>(null!)

  const duration = 5
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let int = .05

    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + int);
      if (time/duration > 0.7) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
      if (time >= duration) {
        console.log('time greater')
        int = 0.0002
      }
    }, int);
  }, []);

  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))

  return (
      <div ref={containerRef} className={styles.body}>
      
      <div className={styles.animated__layers}>
        <animated.div ref={barContainerRef} className={styles.bar__container}>
          {Array.from({ length: X_LINES }).map((_, i) => (
            
            <animated.div
              key={i}
              className={styles.bar}
              style={{
                width: new SpringValue(time/duration).to(scrollP => {
                  const percentilePosition = (i + 1) / X_LINES

                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div className={styles.bar__container__inverted}>
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className={styles.bar}
              style={{
                width: new SpringValue(time/duration).to(scrollP => {
                  const percentilePosition = 1 - (i + 1) / X_LINES

                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        <animated.div
          className={styles.dot}
          style={{
            clipPath: new SpringValue(time/duration).to(val => `circle(${val * 100}%)`),
          }}>
          
            <animated.span className={styles.logo}>
              <h2 className={styles.name}>
                <span style={{padding: '10px'}}>DakotahFerrari Studios</span>
              </h2>
              <br/>
              <span className={styles.coming_soon}>Coming Soon</span>
              
            </animated.span>
            
          
        </animated.div>
      </div>
      {new Array(PAGE_COUNT).fill(null).map((_, index) => (
        <div className={styles.full__page} key={index} />
      ))}
    </div>
  )
}
