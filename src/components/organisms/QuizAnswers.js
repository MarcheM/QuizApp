import React from 'react';
import styles from './quizDisplay.module.css'


const QuizAnswers = ({ singleQuiz, quesNumber, handleOnAnswerClick }) => {

    return (
        singleQuiz[quesNumber].ans.map(ans => {
            return <div key={ans.id} className={styles.answers} onClick={() => handleOnAnswerClick(ans.correct)}>
                {ans.value}
            </div>
        })
    )



}

export default QuizAnswers;