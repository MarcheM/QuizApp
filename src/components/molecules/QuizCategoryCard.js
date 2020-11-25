import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/quizCategoryCard.module.css'
const QuizCategoryCard = ({ id, title, category, difficulty }) => {
    return (

        <Link to={`quizy/${id}`} className={styles.quizLink}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div>
                <div >
                    <div>
                        <div>{category}</div>
                        <div >{difficulty.toUpperCase()}</div>
                    </div>
                    <div><h4>{title}</h4></div>

                </div>
            </div>
        </Link>

    )
}

export default QuizCategoryCard