import React from 'react'
import Nav from '../organisms/Nav'
import Container from '../molecules/Container'
import Footer from '../organisms/Footer'

const MainContent = ({ title, children }) => {

    return (

        <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Nav />
            <Container title={title} >
                {children}
            </Container>
            <Footer />
        </div>

    )

}

export default MainContent