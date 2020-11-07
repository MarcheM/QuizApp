import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./nav.module.css"




const Nav = () => {
    return <div className={styles.mainWrapper}>
        <div className={styles.menu}>
            <Link className={styles.links} to='/'><div className={styles.menuItem}>Strona Główna</div></Link>
            <Link className={styles.links} to='/quizy'><div className={styles.menuItem}>Quizy</div></Link>
        </div>
        <div className={styles.loginMenu}>
            <Link className={styles.links} to='/logIn'> <div className={styles.menuItem}>Zaloguj się</div></Link>
        </div>
    </div>

}

export default Nav