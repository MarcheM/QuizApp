import React from 'react'
import styles from "./nav.module.css"




const Nav = () => {
    return <div className={styles.mainWrapper}>
        <div className={styles.menu}>
            <div className={styles.menuItem}>Strona Główna</div>
            <div className={styles.menuItem}>Quizy</div>
        </div>
        <div className={styles.loginMenu}>
            <div className={styles.menuItem}>Zaloguj się</div>
        </div>
    </div>
}

export default Nav