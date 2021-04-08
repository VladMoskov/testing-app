import React from 'react';
import {useSelector} from "react-redux";
import {LoginMenu} from "./LoginMenu";
import s from "../Header.module.css";
import {NavLink} from "react-router-dom";

export const LoginMenuContainer = () => {

    const authUser = useSelector(state => state.authUser);

    return authUser.isAuth
        ? <LoginMenu authUserData={authUser.authUserData}/>
        : <NavLink to={'/login'} className={s.inner}>
            <div className={s.name}>
                <h1>Login In</h1>
            </div>
        </NavLink>
}