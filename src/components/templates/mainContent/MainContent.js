import React from 'react'
import Nav from '../../organisms/nav/Nav'
import Container from '../../molecules/container/Container'
import Footer from '../../organisms/footer/Footer'
import styles from './mainContent.module.css'

const MainContent = ({ title, children }) => {

    return (

        <div className={styles.mainContent}>
            <Nav />
            <Container title={title} >
                {children}
            </Container>
            <Footer />
        </div>

    )

}

export default MainContent