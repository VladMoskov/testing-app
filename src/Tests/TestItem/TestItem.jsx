import React from 'react';
import {NavLink} from "react-router-dom";
import s from './../TestsPage.module.css';


export const TestItem = ({test, even}) => {
    return (
        <div  className={`${s.itemWrapper} ${even ? '' : s.dark}`}>
            <NavLink to={'/tests/' + test.id}>
                <div className={s.header}>
                    <h1>{test.name}</h1>
                    <h3>id: {test.id}</h3>
                </div>
                <h2>{test.description}</h2>
            </NavLink>
        </div>
    )
}