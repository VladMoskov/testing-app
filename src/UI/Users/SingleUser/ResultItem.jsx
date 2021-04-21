import React from 'react';
import s from "./SingleUser.module.css";

export const ResultItem = ({item}) => {
    return <a>
        <div className={s.header}>
            <h1>{item.name}</h1>
            <h3>id: {item.id}</h3>
        </div>

        <div className={s.header}>
            <h2>{item.description}</h2>
            <h2>Вопросов: {item.questions.length}</h2>
        </div>
    </a>
}