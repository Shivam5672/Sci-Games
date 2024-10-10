import React from 'react'
import styles from './GameCard.module.css';
function GameCard({data}) {
  return (
    <div className={styles.gameCardContainer}>
      <img src={data.imgUrl} alt='gameLogo'/>
      <h3>{data.name}</h3>
      <p>{data.desc}</p>
      <button className='btn'>Play Now!</button>
    </div>
  )
}

export default GameCard
