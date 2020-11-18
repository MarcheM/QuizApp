import React, { useState, useEffect } from 'react'
import MainContent from '../components/templates/MainContent'
import GridContainer from '../components/organisms/GridContainer'
import Spinner from '../components/atoms/Spinner'
import QuizCategoryCard from '../components/molecules/QuizCategoryCard'


const QuizList = () => {
    const [quizList, setQuizList] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const fetchData = () => {
        fetch('https://quiz-56bc5.firebaseio.com/quiz.json')
            .then(res => res.json())
            .then(quiz => {
                const listOfQuiz = quiz
                    ? Object
                        .keys(quiz)
                        .map(key => {
                            return {
                                id: key,
                                ...quiz[key]
                            }
                        })
                    : []

                setQuizList(listOfQuiz)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])


    if (isLoading) {
        return <MainContent title="Ładowanie..."><Spinner /></MainContent>
    }

    return <MainContent title="Wybierz Quiz">
        <GridContainer>
            {
                quizList.map(quiz =>
                    <QuizCategoryCard key={quiz.id} id={quiz.id} title={quiz.title} category={quiz.category.toUpperCase()} />
                )

            }
        </GridContainer>
    </MainContent>

}

export default QuizList