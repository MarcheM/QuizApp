import React, { useState, useEffect } from 'react';
import Input from '../../atoms/input/Input'
import styles from './quizInputsForm.module.css'

const initialState = {
    ques: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
}

const QuizInputsForm = () => {

    const [answers, setAnswers] = useState(initialState)

    const handleOnChange = (event) => {
        setAnswers({
            ...answers,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        console.log(answers)
    }, [answers])

    return (
        <>
            <div><Input type="text" name="ques" value={answers.ques} capture="Podaj pytanie" handleOnChange={handleOnChange} /></div>
            <div className={styles.answerInputContainer}>
                <Input type="text" name="ans1" value={answers.ans1} capture="poprawna odpowiedź" handleOnChange={handleOnChange} />
                <Input type="text" name="ans2" value={answers.ans2} capture="odpowiedź 2" handleOnChange={handleOnChange} />
                <Input type="text" name="ans3" value={answers.ans3} capture="odpowiedź 3" handleOnChange={handleOnChange} />
                <Input type="text" name="ans4" value={answers.ans4} capture="odpowiedź 4" handleOnChange={handleOnChange} />

            </div>
        </>
    );
}

export default QuizInputsForm;