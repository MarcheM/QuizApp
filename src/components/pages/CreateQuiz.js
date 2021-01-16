import React from 'react';
import MainContent from '../templates/mainContent/MainContent'
import Auth from '../organisms/Auth'
import QuizInputsForm from '../molecules/quizInputsForm/QuizInputsForm'
import Input from '../atoms/input/Input'
const CreateQuiz = () => {
    return (
        <Auth>
            <MainContent title="Dodaj Quiz">

                <Input type="text" name="login" value="" capture="Podaj tytuł Quizu" />

                <QuizInputsForm>

                </QuizInputsForm>

            </MainContent>
        </Auth>);
}

export default CreateQuiz;