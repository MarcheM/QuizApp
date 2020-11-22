import React, { useState, useEffect } from 'react'
import { DATABASE_URL } from '../../index'
import MainContent from '../templates/MainContent'
import GridContainer from '../organisms/GridContainer'
import Spinner from '../atoms/Spinner'
import QuizCategoryCard from '../molecules/QuizCategoryCard'
import SearchBar from '../organisms/SearchBar'

const QuizList = () => {
    const [quizList, setQuizList] = useState([])
    const [filteredList, setFilteredList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [categorySort, setCategorySort] = useState("none")



    const fetchData = () => {
        setIsLoading(true)
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
                setFilteredList(listOfQuiz)
                setIsLoading(false)
            })
    }

    const onCategorySort = (eventValue) => {
        setCategorySort(eventValue)
    }

    useEffect(() => {
        filtrQuiz()
    }, [categorySort])

    const filtrQuiz = () => {
        if (categorySort !== "none") {
            const filteredArray = quizList.filter((tempQues) => {
                return tempQues.category.toUpperCase() === categorySort
            })
            setFilteredList(filteredArray)
        } else {
            setFilteredList(quizList)
        }
    }


    const getCategory = (list) => {
        let categoryList = list.map((ques) => {
            return ques.category.toUpperCase()
        }).filter((category, index, array) => {
            return array.indexOf(category) === index
        })
        return categoryList
    }

    useEffect(() => {
        fetchData()
    }, [])


    if (isLoading) {
        return <MainContent title="Ładowanie..."><Spinner /></MainContent>
    }

    return <MainContent title="Wybierz Quiz">
        <SearchBar categories={getCategory(quizList)} handleOnChange={onCategorySort} />
        <GridContainer>
            {
                filteredList.map(quiz =>
                    <QuizCategoryCard key={quiz.id} id={quiz.id} title={quiz.title} category={quiz.category.toUpperCase()} />
                )
            }
        </GridContainer>
    </MainContent>

}

export default QuizList