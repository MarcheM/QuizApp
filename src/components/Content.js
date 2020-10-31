import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'


const Content = () => {
    return <Switch>
        <Route exact path='/' component={MainPage} />
    </Switch>
}

export default Content