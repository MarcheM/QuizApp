import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/quizCategoryCard.module.css'
const QuizCategoryCard = ({ id, title, category, difficulty }) => {
    return (

        <Link to={`quizy/${id}`} className={styles.quizLink}>
            <div className={styles.quizDetails}>
                <div>{category}</div>
                <div>{difficulty.toUpperCase()}</div>
            </div>
            <div className={styles.title}><h4>{title}</h4></div>
        </Link>

    )
}

export default QuizCategoryCard