import React from 'react';
import styles from '../styles/quizDisplay.module.css'


const QuizAnswers = ({ singleQuiz, quesNumber, handleOnAnswerClick }) => {


    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    return (
        shuffle(singleQuiz[quesNumber].ans).map(ans => {
            return <div key={ans.id} className={styles.answers} onClick={() => handleOnAnswerClick(ans.correct)}>
                {ans.value}
            </div>
        })
    )



}

export default QuizAnswers;