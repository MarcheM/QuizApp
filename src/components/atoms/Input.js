import React from 'react';
import styles from './atoms.module.css'

const Input = ({ type }) => {
    return (
        <input className={styles.input} type={type} />
    );
}

export default Input;