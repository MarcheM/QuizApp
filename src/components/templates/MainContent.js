import React from 'react'
import Nav from '../organisms/nav/Nav'
import Container from '../molecules/container/Container'
import Footer from '../organisms/footer/Footer'

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