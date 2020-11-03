import React from 'react'
import MainContent from './MainContent'
class Quiz extends React.Component {
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
            return <MainContent><h1>loading...</h1></MainContent>
        }

        return <MainContent>
            <h1>Quizy</h1>
            {
                this.state.quizList.map(quiz => <div>{quiz.category}</div>)
            }
        </MainContent>


    }
}

export default Quiz