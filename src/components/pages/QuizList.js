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

    const onCategorySort = (searchCondition) => {
        const finalArray = quizList.filter(tempQues => {
            if (searchCondition.categories !== "none") {
                return tempQues.category.toUpperCase() === searchCondition.categories
            } else {
                return tempQues
            }
        })
            .filter(tempQues2 => {
                if (searchCondition.difficulty !== "none") {
                    return tempQues2.diff === searchCondition.difficulty
                } else {
                    return tempQues2
                }
            })

        return setFilteredList(finalArray)

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
        <div style={{ height: "100%", background: "linear-gradient(-30deg, #341ee9 0%,#00000a 50%,#dc1010 50%,#000000 100% )", padding: "8px" }}>
            <SearchBar categories={getCategory(quizList)} handleOnChange={onCategorySort} />
            <GridContainer>
                {
                    filteredList.map(quiz =>
                        <QuizCategoryCard key={quiz.id} id={quiz.id} title={quiz.title} category={quiz.category.toUpperCase()} difficulty={quiz.diff} />
                    )
                }
            </GridContainer>
        </div>
    </MainContent>

}

export default QuizList