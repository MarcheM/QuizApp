import React from 'react';
import styles from './input.module.css'

const Input = ({ type, name, value, capture, handleOnChange }) => {

    const hereHandleOnChange = (event) => {
        handleOnChange(event)
    }

    return <>

        <div className={styles.textField}>
            <input className={styles.inputText} type={type} name={name} value={value} onChange={hereHandleOnChange} required />
            <label className={styles.labelInputText}>{capture}</label>
        </div>


    </>
}

export default Input;