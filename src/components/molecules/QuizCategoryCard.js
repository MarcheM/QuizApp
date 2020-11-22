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
            <div className={styles.quizCardInfo}>{category}</div>
            <div className={styles.quizCardInfo}>{difficulty.toUpperCase()}</div>
            <div><h3>{title}</h3></div>

        </Link>
    )
}

export default QuizCategoryCard