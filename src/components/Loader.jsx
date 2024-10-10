import React from 'react';
import styles from './Loader.module.css';

function Loader() {
    return (
        <>
            <div className={styles.loadingScreen}>
                <div className={styles.loadingText}>LOADING...</div>
                <div className={styles.loadingBar}>
                    <div className={styles.block} style={{ '--i': 1 }}></div>
                    <div className={styles.block} style={{ '--i': 2 }}></div>
                    <div className={styles.block} style={{ '--i': 3 }}></div>
                    <div className={styles.block} style={{ '--i': 4 }}></div>
                    <div className={styles.block} style={{ '--i': 5 }}></div>
                    <div className={styles.block} style={{ '--i': 6 }}></div>
                    <div className={styles.block} style={{ '--i': 7 }}></div>
                    <div className={styles.block} style={{ '--i': 8 }}></div>
                    <div className={styles.block} style={{ '--i': 9 }}></div>
                    <div className={styles.block} style={{ '--i': 10 }}></div>
                </div>
            </div>
        </>
    );
}

export default Loader;
