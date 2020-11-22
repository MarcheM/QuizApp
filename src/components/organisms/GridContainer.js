import React from 'react'
import styles from '../styles/quizCategoryCard.module.css'

const GridContainer = ({ children }) => {
    return <div className={styles.linksContainer}>
        {children}
    </div>
}

export default GridContainer