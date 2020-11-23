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
        setTimeout(() => handleOnAnswerClick(answer), 800)
    }

    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

        return array;
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