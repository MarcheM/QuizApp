import React from 'react'

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
            return <h1>loading...</h1>
        }

        return <>
            <h1>Quizy</h1>
            {
                this.state.quizList.map(quiz => <div>{quiz.ques1}</div>)
            }


        </>
    }
}

export default Quiz