import React from 'react';
import styles from './quizDisplay.module.css'


const QuizAnswers = ({ singleQuiz, quesNumber, handleOnAnswerClick }) => {




    return (
        <>
            {console.log(singleQuiz)}
            <div
                className={styles.answers}
                onClick={() => handleOnAnswerClick(singleQuiz[quesNumber].ans1.correct)}>
                {singleQuiz[quesNumber].ans1.value}
            </div>
            <div
                className={styles.answers}
                onClick={() => handleOnAnswerClick(singleQuiz[quesNumber].ans2.correct)}>
                {singleQuiz[quesNumber].ans2.value}
            </div>
            <div
                className={styles.answers}
                onClick={() => handleOnAnswerClick(singleQuiz[quesNumber].ans3.correct)}>
                {singleQuiz[quesNumber].ans3.value}
            </div>
            <div
                className={styles.answers}
                onClick={() => handleOnAnswerClick(singleQuiz[quesNumber].ans4.correct)}>
                {singleQuiz[quesNumber].ans4.value}
            </div>
        </>
    );
}

export default QuizAnswers;