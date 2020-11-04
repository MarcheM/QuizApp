import React from 'react'
import MainContent from '../templates/MainContent'
import QuizCategoryCard from './QuizCategoryCard'
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
        console.log(this.state.quizList)
        if (this.state.isLoading) {
            return <MainContent><h1>loading...</h1></MainContent>
        }

        return <MainContent>
            <h1>Quizy</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {
                    this.state.quizList.map(quiz =>
                        <QuizCategoryCard title={quiz.title} category={quiz.category.toUpperCase()} />
                    )

                }
            </div>
        </MainContent>


    }
}

export default Quiz