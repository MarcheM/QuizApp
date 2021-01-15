import React from 'react'
import styles from './container.module.css'

const Container = ({ title, children }) => {
    return <div className={styles.flexContainer}>
        <div className={styles.titleDiv}> <h1>{title}</h1></ div>
        <div className={styles.container} >
            {children}
        </div >
    </div>
}

export default Container