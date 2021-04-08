import React from 'react';
import s from './UsersPage.module.css';
import {NavLink} from "react-router-dom";

export const UserItem = ({item}) => {
    return (
        <NavLink to={'/users/' + item.id}>
            <div className={s.header}>
                <h1>{item.name} {item.lastName}</h1>
                <h3>id: {item.id}</h3>
            </div>
            <div className={s.header}>
                <h2><i>Должность:</i> {item.role}</h2>
            </div>
        </NavLink>
    )
}