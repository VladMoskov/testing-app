import React from 'react';
import s from './Header.module.css';
import {LoginMenuContainer} from "./LoginMenu/LoginMenuContainer";

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div/>
            <div/>
            <div className={s.loginWrapper}>
                <LoginMenuContainer/>
            </div>
        </div>
    )
}