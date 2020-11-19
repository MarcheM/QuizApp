import React, { useState } from 'react'
import MainContent from '../components/templates/MainContent'
import QuizTemplate from '../components/templates/QuizTemplate'
import Input from '../components/atoms/Input'

const LogIn = () => {

    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    })

    const handleOnChange = (event) => {
        console.log(event.target.value)
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setLoginData({
            login: "",
            password: ""
        })
    }

    return <MainContent title="Logowanie">
        <QuizTemplate>
            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
                <form onSubmit={handleOnSubmit}>

                    <Input type="email" name="login" value={loginData.login} capture="Podaj maila" handleOnChange={handleOnChange} />
                    <Input type="password" name="password" value={loginData.password} capture="Wpisz hasło" handleOnChange={handleOnChange} />
                    <div style={{ width: "50%", margin: "0 auto" }}>
                        <button type="submit" style={{ width: "100%", padding: "1rem", borderRadius: "8px", backgroundColor: "yellow" }}>Zaloguj</button>
                    </div>
                </form>
                <p>{loginData.login} </p>
                <p>{loginData.password} </p>
            </div>
        </QuizTemplate>
    </MainContent >
}

export default LogIn