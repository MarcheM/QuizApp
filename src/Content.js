import React from 'react'
import { Switch, Route } from 'react-router-dom'
import QuizList from './components/pages/QuizList'
import SingleQuiz from './components/pages/SingleQuiz'
import LogIn from './components/pages/LogIn'
import CreateQuiz from './components/pages/CreateQuiz'

const Content = () => {
    return <Switch>
        <Route exact path='/' component={QuizList} />
        <Route path='/quizy/:id' component={SingleQuiz} />
        <Route path='/createQuiz' component={CreateQuiz} />
        <Route path='/signIn' component={LogIn} />
        <Route path='/signUp' component={() => <LogIn isSignUp />} />
        <Route path='/resetMail' component={() => <LogIn isReset />} />
    </Switch>
}

export default Content