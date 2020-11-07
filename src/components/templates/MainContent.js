import React from 'react'
import Nav from '../organisms/Nav'
import Title from '../molecules/Title'
import Container from '../molecules/Container'

const MainContent = ({ title, children }) => {

    return (
        <>
            <Nav />
            <Title title={title} />
            <Container>
                {children}
            </Container>

        </>
    )

}

export default MainContent