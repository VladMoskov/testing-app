import React from 'react';
import s from './AdminPanel.module.css';
import {NavLink} from "react-router-dom";

const AdminPanel = (props) => {
    return (
        <div>
            <div className={s.wrapper}>
                <NavLink to='/admin-panel/add-test'>
                    <button>addTest</button>
                </NavLink>
            </div>
        </div>
    )
}

export default AdminPanel;