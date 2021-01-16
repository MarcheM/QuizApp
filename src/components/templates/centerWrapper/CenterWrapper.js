import React from 'react';
import style from './centerWrapper.module.css'

const CenterWrapper = ({ children }) => {
    return (
        <div className={style.centerWrapper}>
            {children}
        </div>
    );
}

export default CenterWrapper;