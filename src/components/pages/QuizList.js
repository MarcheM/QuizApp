import React, { useState, useEffect } from 'react'
import { DATABASE_URL } from '../../index'
import MainContent from '../templates/MainContent'
import GridContainer from '../organisms/GridContainer'
import Spinner from '../atoms/Spinner'
import QuizCategoryCard from '../molecules/QuizCategoryCard'


const QuizList = () => {
    const [quizList, setQuizList] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const fetchData = () => {
        fetch(`${DATABASE_URL}/quiz.json`)
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