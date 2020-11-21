import React, { useState, useEffect } from 'react';
import firebase from 'firebase'
import NotAuthorised from '../../pages/NotAuthorised'

const Auth = (props) => {
    const [userState, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        });

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        userState
            ? props.children
            : <NotAuthorised />

    );
}

export default Auth;