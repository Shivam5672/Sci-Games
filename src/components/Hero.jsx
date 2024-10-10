import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.heroSection}>
        <h1 className={styles.heading}>Sci-Games</h1>
        <p className={styles.para}>Play and Download Different Games and Emulator</p>
        <button className={styles.btn}>Let's Explore</button>
    </div>
  )
}

export default Hero