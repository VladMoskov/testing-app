import React from 'react';
import {NavLink} from "react-router-dom";
import s from './TestsPage.module.css';


export const TestItem = ({item}) => {
    return (
        <NavLink to={`/tests/${item.id}`}>
            <div className={s.header}>
                <h1>{item.name}</h1>
                <h3>id: {item.id}</h3>
            </div>

            <div className={s.header}>
                <h2>{item.description}</h2>
                <h2>Вопросов: {item.questions.length}</h2>
            </div>
        </NavLink>
    )
}