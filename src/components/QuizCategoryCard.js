import React from "react"

const QuizCategoryCard = ({ title, category }) => {
    return (
        <div style={{ width: "22%", backgroundColor: "white", height: "26vh", margin: "10px 0" }}>
            <div>{category}</div>

            <div><h3>{title}</h3></div>

        </div>
    )
}

export default QuizCategoryCard