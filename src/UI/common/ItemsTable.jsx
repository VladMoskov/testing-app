import React from 'react';
import s from "./CommonStyles.module.css";

export const ItemsTable = ({props, children, array, itemComponent}) => {
    return <div className={s.listWrapper}>
        {array.map((arr, i) => (
            <div key ={i} className={s.listItemWrapper}>
                {itemComponent({...props, item: arr})}
            </div>
        ))}
        {children}
    </div>
}