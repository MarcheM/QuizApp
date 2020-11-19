import React from 'react';
import styles from './atoms.module.css'

const Input = ({ type, name, value, capture, handleOnChange }) => {

    const hereHandleOnChange = (event) => {
        handleOnChange(event)
    }

    return <>

        <div className={styles.textField}>
            <input type={type} name={name} value={value} onChange={hereHandleOnChange} required />
            <label>{capture}</label>
        </div>


    </>
}

export default Input;