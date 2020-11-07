import React from 'react'
import MainContent from '../components/templates/MainContent'
import GridContainer from '../components/organisms/GridContainer'
import Spinner from '../components/atoms/Spinner'



class QuizList extends React.Component {
    state = {
        quizList: [],
        isLoading: true
    }

    fetchData = () => {
        fetch('https://quiz-56bc5.firebaseio.com/quiz.json')
            .then(res => res.json())
            .then(quiz => {
                const quizList = quiz
                    ? Object
                        .keys(quiz)
                        .map(key => {
                            return {
                                id: key,
                                ...quiz[key]
                            }
                        })
                    : []

                this.setState({
                    quizList: quizList,
                    isLoading: false
                })
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        if (this.state.isLoading) {
            return <MainContent title="Ładowanie..."><Spinner /></MainContent>
        }

        return <MainContent title="Wybierz Quiz">
            <GridContainer quizList={this.state.quizList} />
        </MainContent>


    }
}

export default QuizList