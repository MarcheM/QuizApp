import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const SignInGoogle = () => {

    const [isSignIn, setSignIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setSignIn(user)
        })
    }, [])

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    return (
        <div>
            {
                isSignIn
                    ? <Redirect to="/" />
                    : (
                        <StyledFirebaseAuth
                            uiConfig={uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )
            }
        </div>
    )

}

export default SignInGoogle;