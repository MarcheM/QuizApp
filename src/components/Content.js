import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Quiz from './Quiz'
import LogIn from './LogIn'

const Content = () => {
    return <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/quizy' component={Quiz} />
        <Route exact path='/logIn' component={LogIn} />

    </Switch>
}

export default Content