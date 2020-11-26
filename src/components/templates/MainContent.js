import React from 'react'
import Nav from '../organisms/Nav'
import Container from '../molecules/Container'
import Footer from '../organisms/Footer'
const MainContent = ({ title, children }) => {

    return (

        <>
            <Nav />
            <Container>
                {children}
            </Container>
            <Footer />
        </>

    )

}

export default MainContent