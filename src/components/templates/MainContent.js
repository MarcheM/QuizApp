import React from 'react'
import Nav from '../organisms/Nav'
import Container from '../molecules/Container'
import Footer from '../organisms/Footer'
const MainContent = ({ children }) => {

    return (

        <div>
            <Nav />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>

    )

}

export default MainContent