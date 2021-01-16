import React from "react"
import AnimatedProgressProvider from '../../molecules/animatedProgressProvider/AnimatedProgressProvider'
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from './score.module.css'
import { easeQuad } from "d3-ease";



const Score = ({ score, quesLength }) => {

    const perScore = Math.round(score / quesLength * 100)

    return <>
        <h1 className={styles.mainText}>{`Twój wynik: ${perScore}%`}</h1>
        <div className={styles.scoreBox}>
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