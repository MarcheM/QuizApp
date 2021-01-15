import React from 'react'
import styles from './gridContainer.module.css'

const GridContainer = ({ children }) => {
    return <div className={styles.gridContainer}>
        {children}
    </div>
}

export default GridContainer