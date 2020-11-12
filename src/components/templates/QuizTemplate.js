import React from 'react'

const QuizTemplate = ({ children }) => {

    return <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        <div style={{ width: "75%", height: "75%", backgroundColor: "lightblue", borderRadius: "16px" }}>
            {children}
        </div>
    </div>
}

export default QuizTemplate