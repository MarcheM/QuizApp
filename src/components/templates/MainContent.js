import React from 'react'
import Nav from '../organisms/Nav'
import Title from '../molecules/Title'
import Container from '../molecules/Container'
import Footer from '../organisms/Footer'
const MainContent = ({ title, children }) => {

    return (

        <div style={{ height: "100%" }}>
            <Nav />
            <Title title={title} />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>

    )

}

export default MainContent