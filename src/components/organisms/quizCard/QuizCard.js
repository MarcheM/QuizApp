import React from 'react';
import styles from './quizCard.module.css'

const QuizCard = ({ protoQuiz, singleQuiz, quesNumber, children }) => {

    const chooseColor = () => {
        switch (protoQuiz.diff) {
            case "łatwy":
                return "green";
            case "średni":
                return "yellow";
            case "trudny":
                return "red";
            default:
                return 'none'
        }

    }


    return (
        <><div className={styles.infoBox}>
            <div className={styles.categoryBox}>{protoQuiz.category.toUpperCase()} </div>
            <div className={styles.diffBox} style={{ backgroundColor: chooseColor() }}> {protoQuiz.diff.toUpperCase()}</div>
        </div>
            <div className={styles.quizContainer}>
                <div className={styles.quizInfo}>
                    <div className={styles.quesNumBox}><span>Pytanie</span> <span className={styles.quesNumBold}>{quesNumber + 1} </span> <span>z {protoQuiz.Ques.length}</span>  </div>
                    <div className={styles.quizQues}>{singleQuiz[quesNumber].task}</div>
                </div>
                <div className={styles.quizAnswers} >
                    {children}
                </div>
            </div>
        </>
    )





}
export default QuizCard