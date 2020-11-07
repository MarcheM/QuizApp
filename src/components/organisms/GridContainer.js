import React from 'react'
import QuizCategoryCard from '../molecules/QuizCategoryCard'

const GridContainer = ({ quizList }) => {
    return <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", padding: "10px", overflow: "auto" }}>
        {
            quizList.map(quiz =>
                <QuizCategoryCard key={quiz.id} id={quiz.id} title={quiz.title} category={quiz.category.toUpperCase()} />
            )

        }
    </div>
}

export default GridContainer