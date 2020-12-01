import React from "react"

const Score = ({ score, quesLength }) => {

    const perScore = Math.round(score / quesLength * 100)

    return <h1 style={{ padding: "24px" }}>{`Twój wynik: ${perScore}%`}</h1>
}

export default Score