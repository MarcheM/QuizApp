import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
import styles from "../styles/nav.module.css"


const Nav = () => {
    const [userState, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        });

        return () => {
            unsubscribe()
        }
    }, [])

    const handleOnSignOutClick = () => {
        firebase.auth().signOut();
    }


    return <div className={styles.mainBar}>
        <div className={styles.finalThreedeeTypo}>Quiz-App!</div>
        <div className={styles.menu}>

            <Link className={styles.links} to='/'><div className={styles.menuItem}>Quizy</div></Link>
            {userState && <Link className={styles.links} to='/createQuiz'><div className={styles.menuItem}>Dodaj Quiz</div></Link>}


        </div>
        <div className={styles.login}>
            {
                userState && <div className={styles.hello}> Witaj, {userState.email} </div>
            }
            {userState
                ? <Link className={styles.links} to='/'> <div className={styles.menuItem} onClick={handleOnSignOutClick}>Wyloguj się</div></Link>
                : <Link className={styles.links} to='/signIn'> <div className={styles.menuItem}>Zaloguj się</div></Link>
            }
        </div>

    </div >

}

export default Nav