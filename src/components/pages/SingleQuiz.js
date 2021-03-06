import React, { useState, useEffect } from 'react';
import { DATABASE_URL } from '../../index'
import MainContent from '../templates/mainContent/MainContent'
import QuizCard from '../organisms/quizCard/QuizCard'
import Score from '../organisms/score/Score'
import Spinner from '../atoms/spinner/Spinner'
import QuizAnswers from '../organisms/quizAnswers/QuizAnswers'

const SingleQuiz = (props) => {

    const [protoQuiz, setProtoQuiz] = useState([])
    const [singleQuiz, setSingleQuiz] = useState([])
    const [quesNumber, setQuesNumber] = useState(0)
    const [score, setScore] = useState(0)


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
                setSingleQuiz(transformProto(arrayList))
            })
    }

    const transformProto = (array) => {

        const newProto = array.map(question => {
            const newArray = Object
                .keys(question.ans)
                .map(key => {
                    return {
                        id: key,
                        ...question.ans[key]
                    }
                })
            question.ans = newArray
            return question
        })
        return newProto
    }


    useEffect(() => {
        fetchQuizData()
    }, [])



    const handleOnAnswerClick = (correctId) => {
        if (correctId) {
            const newScore = score + 1
            setScore(newScore)
        }
        const newNumber = quesNumber + 1
        setQuesNumber(newNumber)
    }



    return <MainContent title={protoQuiz.title}>


        {singleQuiz.length > 0
            ?
            quesNumber !== singleQuiz.length
                ? <QuizCard protoQuiz={protoQuiz} singleQuiz={singleQuiz} quesNumber={quesNumber}>
                    <QuizAnswers singleQuiz={singleQuiz} quesNumber={quesNumber} handleOnAnswerClick={handleOnAnswerClick} />
                </QuizCard>
                : <Score score={score} quesLength={protoQuiz.Ques.length} />
            : <Spinner />
        }

    </MainContent >
}





export default SingleQuiz