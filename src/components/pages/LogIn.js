import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import MainContent from '../templates/MainContent'
import Input from '../atoms/input/Input'
import firebase from 'firebase'
import SignInGoogle from '../organisms/SignInGoogle'

const LogIn = (props) => {

    const [loginData, setLoginData] = useState({
        login: "",
        password: ""
    })
    const [redirect, setRedirect] = useState(false)

    const handleOnChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (props.isSignUp) {
            firebase.auth()
                .createUserWithEmailAndPassword(loginData.login, loginData.password)
                .then(() => {
                    setRedirect(true)
                })
                .catch((error) => {
                    alert(error.message);
                })
        } else if (props.isReset) {
            firebase.auth().sendPasswordResetEmail(loginData.login).then(function () {
                alert(`Email został wysłany`)
            }).catch(function (error) {
                alert(error.message)
            });
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(loginData.login, loginData.password)
                .then((userData) => {
                    setRedirect(true)
                })
                .catch((error) => {
                    console.log(error)
                    alert(error.message);
                })
        }

    }

    if (redirect) {
        return <Redirect to='/' />
    }

    return <MainContent title="Logowanie">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', marginTop: "3em", width: "60%", backgroundColor: "rgba(256,256,256, 0.8)" }}>

                <form style={{ width: "100%" }} onSubmit={handleOnSubmit}>

                    <Input type="email" name="login" value={loginData.login} capture="Podaj maila" handleOnChange={handleOnChange} />
                    {!props.isReset && <Input type="password" name="password" value={loginData.password} capture="Wpisz hasło" handleOnChange={handleOnChange} />}
                    <div style={{ width: "95%", margin: "0 auto" }}>
                        {props.isReset
                            ? <button type="submit" style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "darkblue", color: "white" }}>Resetuj hasło</button>
                            : props.isSignUp
                                ? <button type="submit" style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "darkblue", color: "white" }}>Zarejestruj się</button>
                                : <button type="submit" style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "darkblue", color: "white" }}>Zaloguj</button>
                        }
                    </div>
                </form>
                <SignInGoogle />
                <p>
                    {props.isReset
                        ? <><Link to='/signIn'>Masz konto? Zaloguj się</Link>
                            <Link to='/signUp'> / Nie masz konta? Zarejestruj się</Link></>
                        : props.isSignUp
                            ? <Link to='/signIn'>Masz konto? Zaloguj się</Link>
                            : <Link to='/signUp'>Nie masz konta? Zarejestruj się</Link>
                    }
                    {!props.isReset && <Link to='/resetMail'> / Zapomniałeś hasła?</Link>}

                </p>
            </div>
        </div>

    </MainContent >
}

export default LogIn