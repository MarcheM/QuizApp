import React from 'react'
import styles from "../styles/spinner.module.css"

const Spinner = () => {
    return <div style={{ display: "flex", height: "70vh", justifyContent: "center", alignItems: "center" }}>
        <div className={styles.about}>
            <a className={`${styles.bg_links} ${styles.bg_links} ${styles.social} ${styles.linkedin}`} href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                <span className={styles.icon}></span>
            </a >
            <a className={`${styles.bg_links}, ${styles.logo}`}></a>
        </div >

        <div className={styles.content}>
            <div className={styles.planet}>
                <div className={styles.ring}></div>
                <div className={styles.coverRing}></div>
                <div className={styles.spots}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>
            </div>
            <p>loading</p>
        </div>
    </div>
}

export default Spinner