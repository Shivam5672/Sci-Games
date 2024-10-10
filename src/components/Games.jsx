import React from 'react'
import styles from './Games.module.css';
import data from '../../src/assets/gamesData.json'
import GameCard from './GameCard';

function Games() {
    return (
        <div className={styles.gameSection}>
            <h2 className={styles.gameHeading}>Featured Games:</h2>
            <div className={styles.cards}>
                {data.map((item) => {
                    return <GameCard key={item.id} data = {item} />
                })}
            </div>
        </div>
    )
}

export default Games
