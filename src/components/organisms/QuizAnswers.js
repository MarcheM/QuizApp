import React, { useState, useEffect } from 'react';
import styles from '../styles/quizDisplay.module.css'

const QuizAnswers = ({ singleQuiz, quesNumber, handleOnAnswerClick }) => {

    const [isShowAnswer, setIsShowAnswer] = useState(false)
    const [shufledAnswers, setShufledAnswers] = useState([])

    useEffect(() => {
        setShufledAnswers(shuffle(singleQuiz[quesNumber].ans))
        setIsShowAnswer(false)
    }, [quesNumber])

    const onHandleOnAnswerClick = (answer) => {
        setIsShowAnswer(true)
        setTimeout(() => handleOnAnswerClick(answer), 1100)
    }

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const showCorrectAnswer = (answer) => {
        const checkAnswer = isShowAnswer
            ? answer
                ? styles.answersCorrect
                : styles.answers
            : styles.answers

        return checkAnswer
    }

    return (
        shufledAnswers.map(ans => {
            {
                return <div key={ans.id} className={showCorrectAnswer(ans.correct)} onClick={() => onHandleOnAnswerClick(ans.correct)}>{ans.value}</div>
            }
        })
    )



}

export default QuizAnswers;