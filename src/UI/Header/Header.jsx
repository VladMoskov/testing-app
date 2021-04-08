import React from 'react';
import s from './Header.module.css';
import {LoginMenuContainer} from "./LoginMenu/LoginMenuContainer";
import menu from './../../img/menu.svg'

export const Header = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.menuButton}>
                <img src={menu} alt={''}/>
            </div>
            <div/>
            <div className={s.loginWrapper}>
                <LoginMenuContainer/>
            </div>
        </div>
    )
}