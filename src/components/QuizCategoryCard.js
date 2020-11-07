import React from "react"
import { Link } from "react-router-dom"

const QuizCategoryCard = ({ id, title, category }) => {
    return (

        <Link to={`quizy/${id}`} style={{ color: 'black', textDecoration: "none" }}>
            <div style={{ backgroundColor: "white", height: "26vh", border: '1px solid black', }}>
                <div>{category}</div>

                <div><h3>{title}</h3></div>

            </div>
        </Link>
    )
}

export default QuizCategoryCard