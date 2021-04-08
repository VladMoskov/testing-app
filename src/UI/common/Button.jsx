import React from 'react';
import s from './CommonStyles.module.css';

export const Button = (props) => {
    return <button
        className={props.disabled ? `${s.disabled} ${s.button}` : s.button}
        {...props}
    >
        {props.text}
    </button>
}