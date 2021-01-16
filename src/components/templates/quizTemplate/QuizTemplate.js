import React from 'react'
import style from "./quizTemplate.module.css"

const QuizTemplate = ({ children }) => {

    return <div className={style.quizTemplateContainer} style={{}}>
        {children}
    </div>
}

export default QuizTemplate