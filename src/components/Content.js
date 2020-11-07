import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './MainPage'
import QuizList from './QuizList'
import SingleQuiz from './SingleQuiz'
import LogIn from './LogIn'

const Content = () => {
    return <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/quizy' component={QuizList} />
        <Route path='/quizy/:id' component={SingleQuiz} />
        <Route path='/logIn' component={LogIn} />

    </Switch>
}

export default Content