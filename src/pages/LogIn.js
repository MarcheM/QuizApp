import React from 'react'
import MainContent from '../components/templates/MainContent'
import QuizTemplate from '../components/templates/QuizTemplate'
import Input from '../components/atoms/Input'

const LogIn = () => {
    return <MainContent title="Logowanie">
        <QuizTemplate>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <div style={{ margin: "30px", width: "75%" }}>
                    <div style={{ textAlign: "left" }}>podaj e-mail</div>
                    <Input type="email" />
                </div>
                <div style={{ margin: "30px", width: "75%" }}>
                    <div style={{ textAlign: "left" }}>Wpisz hasło</div>
                    <Input type="password" />
                </div>
            </div>
        </QuizTemplate>
    </MainContent>
}

export default LogIn