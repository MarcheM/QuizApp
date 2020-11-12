import React, { useState, useEffect } from 'react';
import { DATABASE_URL } from '../index'
import MainContent from '../components/templates/MainContent'
import QuizTemplate from '../components/templates/QuizTemplate'
import QuizCard from '../components/organisms/QuizCard'
import Score from '../components/organisms/Score'
import Spinner from '../components/atoms/Spinner'
import QuizAnswers from '../components/organisms/QuizAnswers'

const SingleQuiz = (props) => {

    const [protoQuiz, setProtoQuiz] = React.useState({})
    const [singleQuiz, setSingleQuiz] = React.useState([])
    const [quesNumber, setQuesNumber] = React.useState(0)
    const [score, setScore] = React.useState(0)

    const fetchQuizData = () => {
        fetch(`${DATABASE_URL}/quiz/${props.match.params.id}.json`)
            .then(res => res.json())
            .then(quiz => {
                const arrayList = quiz
                    ? Object
                        .keys(quiz.Ques)
                        .map(key => {
                            return {
                                id: key,
                                ...quiz.Ques[key]
                            }
                        })
                    : []


                setProtoQuiz(quiz);
                setSingleQuiz(arrayList)

            })



    }


    useEffect(() => {
        fetchQuizData()
    }, [])


    const handleOnAnswerClick = (ans) => {
        if (ans) {
            const newScore = score + 1
            setScore(newScore)
        }
        const newNumber = quesNumber + 1
        setQuesNumber(newNumber)
    }



    return <MainContent title={protoQuiz.title}>

        <QuizTemplate>
            {singleQuiz.length > 0
                ?
                quesNumber !== singleQuiz.length
                    ?
                    <> <QuizCard protoQuiz={protoQuiz} singleQuiz={singleQuiz} quesNumber={quesNumber}>
                        <QuizAnswers singleQuiz={singleQuiz} quesNumber={quesNumber} handleOnAnswerClick={handleOnAnswerClick} />
                    </QuizCard>
                    </>

                    : <Score score={score} />
                : <Spinner />
            }
        </QuizTemplate>

    </MainContent >
}





export default SingleQuiz