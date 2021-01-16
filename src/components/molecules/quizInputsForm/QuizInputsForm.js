import React from 'react';
import Input from '../../atoms/input/Input'
import styles from './quizInputsForm.module.css'
import style from '../../organisms/quizCard/quizCard.module.css'

const QuizInputsForm = () => {
    return (
        <>
            <div className={style.quizQues}><Input type="text" name="Podaj pytanie" value="" capture="Podaj pytanie" /></div>
            <div className={styles.answerInputContainer}>
                <Input type="text" name="Ans1" value="" capture="poprawna odpowiedź" />
                <Input type="text" name="Ans2" value="" capture="odpowiedź 2" />
                <Input type="text" name="Ans3" value="" capture="odpowiedź 3" />
                <Input type="text" name="Ans4" value="" capture="odpowiedź 4" />

            </div>
        </>
    );
}

export default QuizInputsForm;