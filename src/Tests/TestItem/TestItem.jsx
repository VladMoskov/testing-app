import React from 'react';
import {NavLink} from "react-router-dom";
import s from './TestItem.module.css';


const TestItem = (props) => {
    return (
        <div>
            <NavLink to={'/tests/' + props.id}>
                <div className={s.wrapper}>
                    <div>name:{props.name}</div>
                    <div>id:{props.id}</div>
                    <div>description:{props.description}</div>
                </div>
            </NavLink>
        </div>
    )
}

export default TestItem;