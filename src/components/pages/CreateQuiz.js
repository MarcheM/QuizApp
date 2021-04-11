import React, { useState, useEffect } from 'react';
import MainContent from '../templates/mainContent/MainContent'
import Auth from '../organisms/Auth'
import QuizInputsForm from '../molecules/quizInputsForm/QuizInputsForm'
import Input from '../atoms/input/Input'



const CreateQuiz = () => {

    const [quizDetails, setQuizName] = useState({
        quizName: "",
        quizCat: ""
    })

    const [progress, setProgress] = useState(0)

    const handleOnChange = (event) => {
        setQuizName({
            ...quizDetails,
            [event.target.name]: event.target.value
        })
    }

    const handleOnButtonClick = () => {
        // let isNotEmpty = true
        // const getAllInputs = document.querySelectorAll("input")
        // Array.from(getAllInputs).map((input) => {
        //     if (input.value.length === 0) {
        //         input.
        //             isNotEmpty = false
        //     }
        // })
        // if (isNotEmpty) {
        let newProgress = progress + 1
        setProgress(newProgress)
        // }


    }




    return (
        <Auth>
            <MainContent title="Dodaj Quiz">
                {progress === 0
                    ? <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%" }}>
                        <div><p>Tutaj masz możliwość dodania swojego własnego Quizu! Sky is the limit!</p>
                            <p>To co? Zaczynamy?</p>
                            <p>Na początek podaj nazwę Quizu i jego kategorię</p>


                        </div>
                        <form onSubmit={handleOnButtonClick}> <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginLeft: "8px" }}>
                                <div style={{ width: "20%" }}>Podaj nazwę Quizu: </div>
                                <div style={{ flex: 1 }}><Input type="text" name="quizName" value={quizDetails.quizName} capture="Podaj tytuł Quizu" handleOnChange={handleOnChange} /></div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", marginLeft: "8px" }}>
                                <div style={{ width: "20%" }}>Podaj kategorię Quizu: </div>
                                <div style={{ flex: 1 }}><Input type="text" name="quizCat" value={quizDetails.quizCat} capture="Podaj kategorię Quizu" handleOnChange={handleOnChange} /></div>
                            </div>
                            <button type="submit" >Dalej</button>
                        </div>
                        </form>
                    </div>
                    : <QuizInputsForm info={quizDetails} handleOnClick={handleOnButtonClick} quesNum={progress} />
                }
            </MainContent>
        </Auth>);
}

export default CreateQuiz;