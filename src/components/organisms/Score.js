import React from "react"
import AnimatedProgressProvider from '../molecules/animatedProgressProvider/AnimatedProgressProvider'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuad } from "d3-ease";



const Score = ({ score, quesLength }) => {

    const perScore = Math.round(score / quesLength * 100)

    return <>
        <h1 style={{ padding: "24px" }}>{`Twój wynik: ${perScore}%`}</h1>
        <div style={{ width: "30%", margin: "0 auto" }}>
            <AnimatedProgressProvider
                valueStart={0}
                valueEnd={perScore}
                duration={1.4}
                easingFunction={easeQuad}

            >
                {value => {
                    const roundedValue = Math.round(value);
                    return (
                        <CircularProgressbar
                            value={value}
                            text={`${roundedValue}%`}
                            /* This is important to include, because if you're fully managing the
                      animation yourself, you'll want to disable the CSS animation. */
                            styles={buildStyles({ pathTransition: "none" })}
                        />
                    );
                }}
            </AnimatedProgressProvider>
        </div>
    </>
}

export default Score