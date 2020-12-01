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
            <div style={{ width: "50%", padding: "10px", backgroundColor: '#414141', color: "white" }}>{protoQuiz.category.toUpperCase()} </div>
            <div style={{ width: "50%", padding: "10px", backgroundColor: chooseColor() }}> {protoQuiz.diff.toUpperCase()}</div>
        </div>
            <div style={{ width: "80%", margin: "1em auto", padding: "1em" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ marginTop: "1em", padding: "4px", color: "white", alignSelf: "flex-end", width: "10vw" }}><span>Pytanie</span> <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>{quesNumber + 1} </span> <span>z {protoQuiz.Ques.length}</span>  </div>
                    <div style={{ backgroundColor: "white", fontSize: "2em", borderBottom: "2px solid #eee", padding: "16px", border: "1px solid #333", boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)", borderRadius: "32px", width: "100%", margin: "0 auto 1.5em auto" }}>{singleQuiz[quesNumber].task}</div>
                </div>
                <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between", borderRadius: "16px" }}>
                    {children}
                </div>
            </div>
        </>
    )





}
export default QuizCard