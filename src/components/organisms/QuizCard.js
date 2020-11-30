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
            default:
                return 'none'
        }

    }


    return (
        <><div style={{ display: "flex", flex: 1 }}>
            <div style={{ width: "50%", padding: "10px", backgroundColor: '#b0a' }}>{protoQuiz.category.toUpperCase()} </div>
            <div style={{ width: "50%", padding: "10px", backgroundColor: chooseColor() }}> {protoQuiz.diff.toUpperCase()}</div>
        </div>
            <div style={{ backgroundColor: "white", width: "80%", margin: "1em auto", padding: "1em" }}>
                <h2 style={{ borderBottom: "2px solid #eee", padding: "16px", border: "1px solid #333", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)", borderRadius: "32px", width: "80%", margin: "20px auto 0 auto" }}>{singleQuiz[quesNumber].task}</h2>
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-around", borderRadius: "16px" }}>
                    {children}
                </div>
            </div>
        </>
    )





}
export default QuizCard