import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import QuizList from './pages/QuizList'
import SingleQuiz from './pages/SingleQuiz'
import LogIn from './pages/LogIn'
import CreateQuiz from './pages/CreateQuiz'

const Content = () => {
    return <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/quizy' component={QuizList} />
        <Route path='/quizy/:id' component={SingleQuiz} />
        <Route path='/createQuiz' component={CreateQuiz} />
        <Route path='/signIn' component={LogIn} />
        <Route path='/signUp' component={() => <LogIn isSignUp />} />
        <Route path='/resetMail' component={() => <LogIn isReset />} />
    </Switch>
}

export default Content