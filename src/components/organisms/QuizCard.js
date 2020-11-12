import React from 'react';


const QuizCard = ({ protoQuiz, singleQuiz, quesNumber, children }) => {

    const chooseColor = () => {
        switch (protoQuiz.diff) {
            case "łatwy":
                return "green";
            case "średni":
                return "yellow";
            case "trudny":
                return "red";
        }

    }


    return (
        <><div style={{ display: "flex", flex: 1 }}>
            <div style={{ width: "50%", padding: "10px", backgroundColor: '#b0a' }}>{protoQuiz.category.toUpperCase()} </div>
            <div style={{ width: "50%", padding: "10px", backgroundColor: chooseColor() }}> {protoQuiz.diff.toUpperCase()}</div>
        </div>
            <h1 style={{ borderBottom: "2px solid #eee", padding: "16px" }}>{singleQuiz[quesNumber].task}</h1>
            <div style={{ display: 'grid', gap: "10px", gridTemplateColumns: "repeat(2,1fr)", margin: "16px" }}>
                {children}
            </div>
        </>
    )





}
export default QuizCard