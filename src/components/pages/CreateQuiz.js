import React, { useState } from 'react';
import MainContent from '../templates/mainContent/MainContent'
import Auth from '../organisms/Auth'
import QuizInputsForm from '../molecules/quizInputsForm/QuizInputsForm'
import Input from '../atoms/input/Input'
const CreateQuiz = () => {

    const [quizName, setQuizName] = useState("")


    const handleOnChange = (event) => {
        setQuizName(event.target.value)
    }



    return (
        <Auth>
            <MainContent title="Dodaj Quiz">

                <Input type="text" name="login" value={quizName} capture="Podaj tytuł Quizu" handleOnChange={handleOnChange} />

                <QuizInputsForm>

                </QuizInputsForm>

            </MainContent>
        </Auth>);
}

export default CreateQuiz;