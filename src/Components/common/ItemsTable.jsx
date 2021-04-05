import React from 'react';
import s from "./CommonStyles.module.css";

export const ItemsTable = ({children, array, itemComponent}) => {
    return <div className={s.listWrapper}>
        {array.map((arr, i) => (
            <div key ={i} className={s.listItemWrapper}>
                {itemComponent({item: arr})}
            </div>
        ))}
        {children}
    </div>
}