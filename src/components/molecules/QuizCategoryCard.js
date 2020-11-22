import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/quizCategoryCard.module.css'
const QuizCategoryCard = ({ id, title, category, difficulty }) => {
    return (

        <Link to={`quizy/${id}`} style={{ color: 'black', textDecoration: "none" }}>
            <div className={styles.quizCard}>
                <div className={styles.quizCardCover}>
                    <div className={styles.quizCardWrapper}>
                        <div className={styles.quizCardInfo}>{category}</div>
                        <div className={styles.quizCardInfo}>{difficulty.toUpperCase()}</div>
                    </div>
                    <div><h3>{title}</h3></div>

                </div>
            </div>
        </Link>
    )
}

export default QuizCategoryCard