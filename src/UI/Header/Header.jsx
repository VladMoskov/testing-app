import React, {useState} from 'react';
import s from './Header.module.css';
import {LoginMenuContainer} from "./LoginMenu/LoginMenuContainer";
import menu from './../../img/menu.svg'
import Sidebar from "../Sidebar/Sidebar";

export const Header = () => {

    const [isModal, setIsModal] = useState(false)

    return (
        <div className={s.wrapper}>
            <div className={s.menuButton} onClick={() => setIsModal(!isModal)}>
                <img src={menu} alt={''}/>
            </div>
            <div/>
            <div className={s.loginWrapper}>
                <LoginMenuContainer/>
            </div>

            {isModal && <Sidebar modalState={[isModal, setIsModal]}/>}

        </div>
    )
}