import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <NavLink activeClassName={s.active} to={'/tests'}>
                    <div className={s.navItem}>Тесты</div>
                </NavLink>
                <NavLink activeClassName={s.active} to={'/my-stats'}>
                    <div className={s.navItem}>Мои результаты</div>
                </NavLink>
                <NavLink activeClassName={s.active} to={'/info'}>
                    <div className={s.navItem}>Информация</div>
                </NavLink>
                <NavLink activeClassName={s.active} to={'/settings'}>
                    <div className={s.navItem}>Настройки</div>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar;