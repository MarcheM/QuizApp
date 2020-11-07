import React from 'react'
import MainContent from '../components/templates/MainContent'
import QuizCategoryCard from '../components/molecules/QuizCategoryCard'
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

        return <MainContent title="Quizy">

            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", padding: "10px", height: "75vh", overflow: "auto" }}>
                {
                    this.state.quizList.map(quiz =>
                        <QuizCategoryCard key={quiz.id} id={quiz.id} title={quiz.title} category={quiz.category.toUpperCase()} />
                    )

                }
            </div>
        </MainContent>


    }
}

export default QuizList